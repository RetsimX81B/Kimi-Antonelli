document.getElementById('classement').addEventListener("click", function(){
    window.location.href = './classement.html';
    console.log("redirect");
})
document.getElementById('parcours').addEventListener("click", function(){
    window.location.href = './parcours.html';
    console.log("redirect");
})
    
document.getElementById('retours').addEventListener("click", function(){
    window.location.href = './index.html';
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

$('.btn').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
  });
    $('.feat-btn').click(function(){
      $('nav ul .feat-show').toggleClass("show");
      $('nav ul .first').toggleClass("rotate");
    });
    $('.serv-btn').click(function(){
      $('nav ul .serv-show').toggleClass("show1");
      $('nav ul .second').toggleClass("rotate");
    });
    $('nav ul li').click(function(){
      $(this).addClass("active").siblings().removeClass("active");
    });