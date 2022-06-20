cursos = [
    {
      "id": 988888,
      "curso": "NOME-CURSO",
      "descricao": "DESCRIÇÃO-CURSO",
      "carreira": "NOME-CARREIRA",
      "duracao": 4,
      "topicos": ["topico 1 ", "topico 2 ", "topico 3 ", "topico 4 "]
    },
    {
        "id": 988888,
        "curso": "NOME-CURSO",
        "descricao": "DESCRIÇÃO-CURSO",
        "carreira": "NOME-CARREIRA",
        "duracao": 4,
        "topicos": ["topico 1 ", "topico 2 ", "topico 3 ", "topico 4 "]
      },
      {
        "id": 988888,
        "curso": "NOME-CURSO",
        "descricao": "DESCRIÇÃO-CURSO",
        "carreira": "NOME-CARREIRA",
        "duracao": 4,
        "topicos": ["topico 1 ", "topico 2 ", "topico 3 ", "topico 4 "]
      },
  ]


var conteudo = "";
    conteudo += "<h2>Cursos Cadastrados</h2>";
    conteudo += "<p></p>"
    conteudo += '<table class="table table-bordered">';
    conteudo += "<thead class=thead-light>";
    conteudo += "<tr>";
    conteudo += '<th scope="col">ID</th>';
    conteudo += '<th scope="col">Cursos</th>';
    conteudo += '<th scope="col">Descrição</th>';
    conteudo += '<th scope="col">Carreira</th>';
    conteudo += '<th scope="col">Duração</th>';
    conteudo += '<th scope="col">Tópicos</th>';
    conteudo += "</tr>";
    conteudo += "</thead>";

for (let i = 0; i < cursos.length; i++){
    conteudo += "<tbody>";
    conteudo += "<tr>";
    conteudo += "<td>"+ cursos[i].id + "</td>";
    conteudo += "<td>"+ cursos[i].curso + "</td>";
    conteudo += "<td>"+ cursos[i].descricao + "</td>";
    conteudo += "<td>"+ cursos[i].carreira + "</td>";
    conteudo += "<td>"+ cursos[i].duracao + "</td>";
    conteudo += "<td>"+ cursos[i]["topicos"] + "</td>";
    conteudo += "</tr>";
    conteudo += "</tbody>";
}

var elemento = document.getElementById('cursos');
elemento.innerHTML = conteudo;
