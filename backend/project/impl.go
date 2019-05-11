package project

import (
	context "context"
	"log"

	"github.com/gofrs/uuid"
	"github.com/jmoiron/sqlx"

	_ "github.com/lib/pq"
)

type server struct {
	DB *sqlx.DB
}

func (s *server) Create(ctx context.Context, in *Project) (*ProjectCreateResponse, error) {

	u2, err := uuid.NewV4()
	if err != nil {
		log.Fatalf("failed to generate UUID: %v", err)
	}

	tx := s.DB.MustBegin()
	tx.MustExec("INSERT INTO project (id, name) VALUES ($1, $2)", u2.String(), in.GetName())
	err = tx.Commit()
	if err != nil {
		log.Println("err:", err)
		return nil, err
	}

	return &ProjectCreateResponse{ID: u2.String()}, nil
}

func (s *server) GetAll(ctx context.Context, v *Empty) (*ProjectListResponse, error) {

	pList := []*Project{}
	rows, err := s.DB.Queryx("SELECT * FROM project")
	if err != nil {
		log.Fatalln(err)
	}

	for rows.Next() {
		p := Project{}
		err := rows.StructScan(&p)
		if err != nil {
			log.Println(err)
		}
		pList = append(pList, &p)
	}
	return &ProjectListResponse{Items: pList}, nil
}

func NewProject(db *sqlx.DB) ProjectServiceServer {
	return &server{
		DB: db,
	}
}
