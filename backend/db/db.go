package db

import (
	"fmt"
	"log"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

var schema = `
CREATE TABLE IF NOT EXISTS project_estimate (
    id text PRIMARY KEY,
    title text UNIQUE NOT NULL CHECK (title <> ''),
	description text,
	customer text NOT NULL CHECK (customer <> ''),
	customer_id text NOT NULL CHECK (customer_id <> '')
);

CREATE TABLE IF NOT EXISTS project_project (
    id text PRIMARY KEY,
	name text UNIQUE NOT NULL CHECK (name <> ''),
    description text
);

CREATE TABLE IF NOT EXISTS project_order (
    id text PRIMARY KEY,
    title text UNIQUE NOT NULL CHECK (title <> ''),
	description text,
	project_id text REFERENCES project_project (id),
	estimate_id text NOT NULL REFERENCES project_estimate (id)
)`

type DBConfig struct {
	DBName   string
	Username string
	Password string
	Host     string
	Port     string
}

func NewDB(config DBConfig) (*sqlx.DB, error) {

	conn := fmt.Sprintf("user=%s dbname=%s password=%s port=%s host=%s sslmode=disable",
		config.Username,
		config.DBName,
		config.Password,
		config.Port,
		config.Host)

	db, err := sqlx.Connect("postgres", conn)

	if err != nil {
		log.Fatalln("not able to open connect", err)
	}

	result, err := db.Exec(schema)
	if err != nil {
		log.Fatalln("not able to run schema", err)
	}

	log.Println("schema creation result")
	log.Println(result.RowsAffected())

	return db, err
}
