'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenMadals = document.querySelectorAll('.show-modal')
const openModals = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
}

const closeModals = function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for (let index = 0; index < btnsOpenMadals.length; index++) {
    btnsOpenMadals[index].addEventListener('click', openModals)  
}

btnCloseModal.addEventListener('click', closeModals)
overlay.addEventListener('click', closeModals)
document.addEventListener('keydown', (e) => {
    if (e.key == "Escape"){
        if(!modal.classList.contains("hidden")){
            closeModals()
        }
    }
})