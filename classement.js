document.getElementById('retours').addEventListener("click", function(){
    window.location.href = './index.html';
    console.log("redirect");
})
document.getElementById('parcours').addEventListener("click", function(){
    window.location.href = './parcours.html';
    console.log("redirect");
})
    
document.getElementById('resultats').addEventListener("click", function(){
    window.location.href = './resultats.html';
    console.log("redirect");
})

const bouton = document.querySelector('.bouton')

bouton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left:0,
        behavior: "smooth"
    })
})
const main = document.getElementById('main')
const content = main.innerHTML
const input = document.getElementById('search')

let uptade = function(){
    text = input.value
    texteARechercher = new RegExp(text, 'g')
    main.innerHTML = content.replace(texteARechercher, '<mark class="surbrillance">'+text+'</mark>')
}
