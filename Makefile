#!/bin/bash

protoc:
	protoc -I proto/ proto/project.proto --go_out=plugins=grpc:./backend/project
	protoc -I proto/ proto/project.proto --js_out=import_style=commonjs:./frontend/src/proto \
	--grpc-web_out=import_style=commonjs,mode=grpcwebtext:./frontend/src/proto; \
	# disable eslint
	for file in frontend/src/proto/*.js; do printf "/* eslint-disable */\n$$(cat $$file)" > $$file; done	

