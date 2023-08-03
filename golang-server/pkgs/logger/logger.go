package logger

import (
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
)

func SetupLogger() {
	zerolog.TimeFieldFormat = zerolog.TimeFormatUnix
	// TODO: this code should be uncommented when air accepts flags
	debug := true //flag.Bool("debug", false, "sets log level to debug")

	if debug {
		zerolog.SetGlobalLevel(zerolog.DebugLevel)
		log.Debug().Msg("Debug mode enabled")
	} else {
		zerolog.SetGlobalLevel(zerolog.InfoLevel)
	}

	log.Info().Msg("Logger ready to be used")
}
