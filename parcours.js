document.getElementById('classement').addEventListener("click", function(){
    window.location.href = './classement.html';
    console.log("redirect");
})
document.getElementById('retours').addEventListener("click", function(){
    window.location.href = './index.html';
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
      