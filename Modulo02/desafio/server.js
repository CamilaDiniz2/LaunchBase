const express = require('express')
const nunjucks = require('nunjucks')

const courses = require("./database/course-data")
const tecnologies = require("./database/tecnologies-data")
const socialMedias = require("./database/social-media")

// cria o servidor e o executa
const server = express()

// configura para receber arquivos estáticos
server.use(express.static('public'))

// configura a template engine
server.set("view engine", "njk")

//configura o nunjucks
nunjucks.configure("views", {
  express:server,
  autoescape: false
})


// criando as rotas
server.get("/", function (req, res){
  const about = {
    imageRocketseat: "https://rocketseat.com.br/static/images/logo-rocketseat.svg",
    title          : "Rocketseat",
    description1   : "A Rocketseat é uma empresa que leva educação para todos os lugares do Brasil.",
    description2   : "Produrando direcionar seu foco para as ferramentas mais utiizadas nas melhores empresas",
    description3   : " Venha fazer parte do nosso time !!!"
  }

  return res.render("about", {
    items  : tecnologies,
    medias : socialMedias,
    about   : about
  })
})

server.get("/conteudos", function (req, res){
  return res.render("conteudos", { 
    items: courses, 
    medias : socialMedias
  })
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});


// inicializa o servidor
server.listen(5000, function(){
  console.log("server is running")
})