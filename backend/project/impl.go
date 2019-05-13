package project

import (
	context "context"
	"errors"
	"log"

	"github.com/gofrs/uuid"
	"github.com/jmoiron/sqlx"
	internalDB "github.com/sdamasceno/helloworld-grpc/db"

	_ "github.com/lib/pq"
)

type server struct {
	DB     *sqlx.DB
	delete *sqlx.Stmt
	getAll *sqlx.Stmt
	getOne *sqlx.Stmt
}

const insertStatment = `INSERT INTO project_project (id, name, description) VALUES ($1, $2, $3)`

func (s *server) Create(ctx context.Context, in *Project) (*ID, error) {

	u2, err := uuid.NewV4()
	if err != nil {
		log.Fatalf("failed to generate UUID: %v", err)
	}

	_, err = s.DB.Exec(insertStatment, u2.String(), in.GetName(), in.GetDescription())
	if err != nil {
		log.Println("err:", err)
		return nil, err
	}
	return &ID{ID: u2.String()}, nil

}

func (s *server) DeleteOne(ctx context.Context, id *ID) (*Empty, error) {

	result, err := s.delete.Exec(id.GetID())
	if err != nil {
		log.Println("err:", err)
		return nil, err
	}

	if c, _ := result.RowsAffected(); c < 1 {
		return nil, errors.New("project not found")
	}

	return &Empty{}, nil

}

func (s *server) GetOne(ctx context.Context, id *ID) (*Project, error) {

	p := Project{}
	err := s.getOne.Get(&p, id.GetID())
	if err != nil {
		log.Println("err:", err)
		return nil, err
	}

	return &p, nil

}

func (s *server) GetAll(ctx context.Context, v *Empty) (*ListResponse, error) {

	pList := []*Project{}
	rows, err := s.getAll.Queryx()
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
	return &ListResponse{Items: pList}, nil
}

func NewProject(db *sqlx.DB) ProjectServiceServer {

	var err error
	s := server{DB: db}

	if s.delete, err = db.Preparex(internalDB.DeleteStatement("project_project")); err != nil {
		log.Fatalf("prepare delete statment: %v", err)
		return nil
	}

	if s.getAll, err = db.Preparex(internalDB.GetAllStatement("project_project")); err != nil {
		log.Fatalf("prepare getall statment: %v", err)
		return nil
	}

	if s.getOne, err = db.Preparex(internalDB.GetOneStatement("project_project")); err != nil {
		log.Fatalf("prepare getone statment: %v", err)
		return nil
	}

	return &s
}
