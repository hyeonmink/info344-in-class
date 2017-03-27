package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

//parameter: response writer and pointer
//pass variable by reference -> pointer;
//pass variable by value -> working on copy;
//in Go, any type can be passed by reference, by using '*';
func helloHandler(w http.ResponseWriter, r *http.Request) {
	name := r.URL.Query().Get("name")
	w.Header().Add("Content-Type", "text/plain")
	w.Write([]byte("hello " + name + "!"))

}

//where program first starts
func main() {
	addr := os.Getenv("ADDR") //var addr string = os.Getenv("ADDR")
	if len(addr) == 0 {       //len = length
		log.Fatal("please set ADDR environment variable") //log.Fatal -> write on console
	}

	http.HandleFunc("/hello", helloHandler)

	fmt.Printf("server is listening at %s...\n", addr)
	log.Fatal(http.ListenAndServe(addr, nil)) //nil = null

}
