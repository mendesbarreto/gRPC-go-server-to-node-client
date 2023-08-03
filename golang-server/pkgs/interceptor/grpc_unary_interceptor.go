package interceptor

import (
	"context"
	"time"

	"github.com/rs/zerolog/log"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func GetLoggerUnaryIntercptor() grpc.UnaryServerInterceptor {
	return func(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
		startTime := time.Now()
		result, err := handler(ctx, req)
		duration := time.Since(startTime)

		statusCode := codes.Unknown

		if st, ok := status.FromError(err); ok {
			statusCode = st.Code()
		}

		logger := log.Info()
		if err != nil {
			logger = log.Error()
		}

		logger.
			Str("protocol", "gRPC").
			Str("method", info.FullMethod).
			Int("statusCode", int(statusCode)).
			Str("status", statusCode.String()).
			Dur("duration", duration).
			Msg("received a gRPC request")

		return result, err
	}
}
