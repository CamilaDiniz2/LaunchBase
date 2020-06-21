const modalOverlay  = document.querySelector(".modal-overlay")
const modal = document.querySelector(".modal")
const backgroundwhite = document.querySelector("body")
const cards = document.querySelectorAll(".card")

for (let card of cards){
  card.addEventListener("click", function(){

    const courseId = card.getAttribute("id")

    modalOverlay.classList.add("active")

    modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${courseId}`
  })
}

document.querySelector('.close-modal')
  .addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modal.classList.remove("maximize")
  })

document.querySelector('.maximize-modal')
  .addEventListener("click", function(){
    if (!modal.classList.contains("maximize")){
      modal.classList.add("maximize")
    } else{
      modal.classList.remove("maximize")
    }
  })

