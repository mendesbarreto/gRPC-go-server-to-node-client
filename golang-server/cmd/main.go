package main

import (
	"context"
	"encoding/json"
	"flag"
	"fmt"
	"io/ioutil"
	"net"
	"net/http"

	"github.com/mendesbarreto/server-grpc-go/pkgs/interceptor"
	"github.com/mendesbarreto/server-grpc-go/pkgs/logger"
	gen "github.com/mendesbarreto/server-grpc-go/proto"
	"github.com/rs/zerolog/log"
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
	logger.SetupLogger()

	lis, err := net.Listen("tcp", ":50051")

	log.Info().Msgf("flag received %v", *flag.Bool("debug", false, "set debug"))

	if err != nil {
		log.Error().Msgf("failed to listen: %v", err)
	}

	log.Info().Msgf("Server listening on %v", lis.Addr())

	loggerInterceptor := grpc.UnaryInterceptor(interceptor.GetLoggerUnaryIntercptor())

	grpcServer := grpc.NewServer(loggerInterceptor)

	s := server{}
	gen.RegisterChuckNorrisFactServiceServer(grpcServer, &s)

	if err := grpcServer.Serve(lis); err != nil {
		log.Error().Msgf("failed to server: %v", err)
	}
}
