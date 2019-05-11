package project

import (
	context "context"
	fmt "fmt"
	"log"
	"os"
	"testing"

	"github.com/sdamasceno/helloworld-grpc/db"
)

var (
	pService ProjectServiceServer
)

func TestMain(m *testing.M) {

	fmt.Println("before m.run()")
	db, err := db.NewDB(db.DBConfig{
		DBName:   "grpc",
		Username: "postgres",
		Password: "",
		Port:     "5432",
		Host:     "localhost",
	})

	if err != nil {
		log.Fatal(err)
	}

	pService = NewProject(db)

	fmt.Println("running m.run()")
	code := m.Run()

	fmt.Println("after m.run()")
	_, err = db.Exec("delete from project_project;")
	if err != nil {
		log.Fatalln(err)
	}
	os.Exit(code)
}

func TestProjectCRUD(t *testing.T) {

	testCases := []struct {
		in          *Project
		errExpected bool
		msg         string
	}{
		{&Project{Name: ""}, true, "expect error when missing name"},
		{&Project{Name: "test"}, false, "no error expected for valid error"},
		{&Project{Name: "test"}, true, "expect error when name already exists"},
	}

	ctx := context.Background()

	for _, tc := range testCases {
		_, err := pService.Create(ctx, tc.in)
		if err == nil && tc.errExpected {
			t.Fatal(tc.msg)
		}
	}

	// log.Print(persistedID)

	result, err := pService.GetAll(ctx, &Empty{})
	if err != nil || len(result.Items) < 1 {
		t.Fatal("fail to GetAll", err)
	}

	id := result.Items[0].GetID()

	project, err := pService.GetOne(ctx, &ID{ID: id})
	if err != nil || project == nil {
		t.Fatal("fail to GetOne", err)
	}

	_, err = pService.DeleteOne(ctx, &ID{ID: id})
	if err != nil {
		t.Fatal("fail to DeleteOne", err)
	}

	project, err = pService.GetOne(ctx, &ID{ID: id})
	if project != nil {
		t.Fatal("fail to delete, project still exists", err)
	}

	_, err = pService.DeleteOne(ctx, &ID{ID: id})
	if err == nil {
		t.Fatal("fail should return err when project does not exists on deletion", err)
	}

}
