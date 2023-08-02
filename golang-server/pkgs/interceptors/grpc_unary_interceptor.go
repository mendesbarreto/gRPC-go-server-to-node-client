package interceptors

import (
	"context"
	"fmt"

	"google.golang.org/grpc"
)

func GetLoggerUnaryIntercptor() grpc.UnaryServerInterceptor {
	return func(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
		fmt.Printf("[unary interceptor]: %v\n", info.FullMethod)
		return handler(ctx, req)
	}
}
