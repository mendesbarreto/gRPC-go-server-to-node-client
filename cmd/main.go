package main

import (
	"context"
	"fmt"
	"log"
	"net"

	"github.com/mendesbarreto/server-grpc-go/proto"
	"google.golang.org/grpc"
)

type server struct {
	gen.UserServiceServer
}

func (s *server) GetUser(ctx context.Context, req *gen.GetUserRequest) (*gen.GetUserResponse, error) {
	return &gen.GetUserResponse{
		Name:  "Douglas Mendes",
		Email: "mendes-barreto@live.com",
		Phone: "11999999999",
	}, nil
}

func main() {
	lis, err := net.Listen("tcp", ":50051")

	if err != nil {
		log.Fatalln("failed to listen %v", err)
	}

	grpcServer := grpc.NewServer()

	s := server{}
	gen.RegisterUserServiceServer(grpcServer, &s)
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalln("failed to server: %v", err)
	}

	fmt.Print("Hello HotReload In Go!\n")
}
