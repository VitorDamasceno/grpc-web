/*
 *
 * Copyright 2015 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

//go:generate protoc -I ../helloworld --go_out=plugins=grpc:../helloworld ../helloworld/helloworld.proto

// Package main implements a server for Greeter service.
package main

import (
	"log"
	"net"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
	pb "github.com/sdamasceno/helloworld-grpc/project"
	"google.golang.org/grpc"
)

const (
	port = ":50051"
)

type server struct{}

var schema = `
CREATE TABLE project (
	id text,
	name text
);`

func main() {

	// // this Pings the database trying to connect, panics on error
	// // use sqlx.Open() for sql.Open() semantics
	db, err := sqlx.Connect("postgres", "host=database user=postgres password=postgres dbname=grpc sslmode=disable")
	if err != nil {
		log.Fatalln(err)
	}

	// // exec the schema or fail; multi-statement Exec behavior varies between
	// // database drivers;  pq will exec them all, sqlite3 won't, ymmv
	_, err = db.Exec(schema)
	if err != nil {
		log.Println("exe:", err)
	}

	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterProjectServiceServer(s, pb.NewProject(db))
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
