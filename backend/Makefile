IMAGE_NAME=grpcweb/hellogrpc

build:
	CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -o app .
	docker build . -t $(IMAGE_NAME)
	rm app
