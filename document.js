const team = document.querySelector(".times")
const link = document.querySelector(".link-times")
const tudo = document.querySelector("body")
const header = document.querySelector("header")
const links = document.querySelector(".links")
const dois = document.querySelector(".dois")
const tres = document.querySelector(".tres")

function mudarLake() {
    team.src = "./img/lakerslogo.png"
    link.href = "./lakers.html"
    tudo.style.backgroundColor = "#380E73"
    header.style.backgroundColor = "#F2AC29"
    links.style.color = "#380E73"
    dois.style.color = "#380E73"
    tres.style.color = "#380E73"


}

function mudarCelt() {
    team.src = "img/celticslogo.png"
    link.href = "./celtics.html"
    tudo.style.backgroundColor = "#047c44"
    header.style.backgroundColor = "#000000"
    links.style.color = "#F2AA80"
    dois.style.color = "#F2AA80"
    tres.style.color = "#F2AA80"
    links.hover.color = "#038C4C"
}