package StandByMe_BE

import (
	"github.com/urfave/negroni"
	"net/http"
)

type Student struct {
}

func MakeWebHandler() {

}

func main() {
	m := MakeWebHandler()
	n := negroni.Classic()
	n.UseHandler(m)

	err := http.ListenAndServe(":8080", n)
}
