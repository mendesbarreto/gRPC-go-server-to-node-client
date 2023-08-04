# Golang gRPC server

This is a simple golan project using gRPC tech.

## Deps Instalation

### Air

This project uses air for live reload to install run:

Via Go:

```bash
go install github.com/cosmtrek/air@latest
```

Via Docker:

```bash
docker run -it --rm \
    -w "<PROJECT>" \
    -e "air_wd=<PROJECT>" \
    -v $(pwd):<PROJECT> \
    -p <PORT>:<APP SERVER PORT> \
    cosmtrek/air
    -c <CONF>
```

To run the project with live reload you need to run:

```bash
air .
```

or

```bash
air -d
```

### ProtoBuf

```shell
# Linux
apt install -y protobuf-compiler

# Mac
brew install protobuf
```

To generate the golang code need to implement the protobuf files definition run:

```shell
./.scripts/build-protos.sh
```

#### Optional step:

Make sure you have the permisions set to run the script above with:

```shell
chmod u+rx .scripts/build-protos.sh
```
