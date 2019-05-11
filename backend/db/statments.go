package db

import "fmt"

func DeleteStatement(tableName string) string {
	return fmt.Sprintf("DELETE FROM %s WHERE id = $1", tableName)
}

func GetOneStatement(tableName string) string {
	return fmt.Sprintf("SELECT * FROM %s WHERE id=$1", tableName)
}

func GetAllStatement(tableName string) string {
	return fmt.Sprintf("SELECT * FROM %s", tableName)
}
