package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net"
	"net/http"

	"github.com/mendesbarreto/server-grpc-go/pkgs/interceptors"
	gen "github.com/mendesbarreto/server-grpc-go/proto"
	"google.golang.org/grpc"
)

var chuckNorrisFactsURL string = "https://api.chucknorris.io/jokes/random"

type server struct {
	gen.ChuckNorrisFactServiceServer
}

type ChuckNorrisFact struct {
	IconUrl string `json:"icon_url"`
	Id      string `json:"id"`
	Url     string `json:"url"`
	Value   string `json:"value"`
}

func (s *server) GetRandomFact(ctx context.Context, req *gen.GetRandomJokeRequest) (*gen.GetRandomJokeResponse, error) {

	response, err := http.Get(chuckNorrisFactsURL)

	if err != nil {
		return nil, err
	}

	defer response.Body.Close()

	if response.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("status code was %d", response.StatusCode)
	}

	body, err := ioutil.ReadAll(response.Body)

	if err != nil {
		return nil, fmt.Errorf("Problem to read the response body %v", err)
	}

	var fact ChuckNorrisFact

	if err := json.Unmarshal(body, &fact); err != nil {
		return nil, fmt.Errorf("Could not unmarshal the response %v", err)
	}

	return &gen.GetRandomJokeResponse{
		Id:      fact.Id,
		IconUrl: fact.IconUrl,
		Url:     &fact.Url,
		Value:   fact.Value,
	}, nil
}

func main() {
	lis, err := net.Listen("tcp", ":50051")

	if err != nil {
		log.Fatalln("failed to listen %v", err)
	}

	loggerInterceptor := grpc.UnaryInterceptor(interceptors.GetLoggerUnaryIntercptor())

	grpcServer := grpc.NewServer(loggerInterceptor)

	s := server{}
	gen.RegisterChuckNorrisFactServiceServer(grpcServer, &s)

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalln("failed to server: %v", err)
	}

	fmt.Print("Hello HotReload In Go!\n")
}
