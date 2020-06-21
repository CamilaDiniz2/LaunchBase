const express = require('express')
const nunjucks = require('nunjucks')

// cria o servidor e o executa
const server = express()

// configura para receber arquivos estáticos
server.use(express.static('public'))

// configura a template engine
server.set("view engine", "njk")

//configura o nunjucks
nunjucks.configure("views", {
  express:server
})


// criando as rotas
server.get("/", function (req, res){
  return res.render("about")
})

server.get("/conteudos", function (req, res){
  return res.render("conteudos")
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});


// inicializa o servidor
server.listen(5000, function(){
  console.log("server is running")
})