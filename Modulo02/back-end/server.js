const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

// configuração para usar arquivos estáticos
server.use(express.static('public'))

// setar as configurações
server.set("view engine", "html")

// configurando o nunjucks
nunjucks.configure("views", {
  express:server
})

server.get("/", function(req, res){
  return res.render("index")
})

server.get("/tecnologias", function(req, res){
  return res.render("tecnologias")
})

server.listen(5000, function(){
  console.log("Server is running")
})