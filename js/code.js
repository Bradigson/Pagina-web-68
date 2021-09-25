let menuIcon = document.querySelector(".hamburger-menu");
let navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click", ()=>{
    navbar.classList.toggle("change");
});


//scrollreveal
window.sr = ScrollReveal();
sr.reveal('.h1',{
    duration: 5000,
    origin: 'bottom',
    distancce: '100px'
});

//scroll remove
let paticle = document.querySelector("#particles-js");
let h1 = document.querySelector(".h1")
window.addEventListener("scroll",()=>{
    let value = window.scrollY;
    paticle.style.marginLeft = - value + "px";
    h1.style.marginLeft = value + "px";
});




//scroll mostrar
let animado = document.querySelectorAll(".animado");
function mostrarScroll(){
    let srcollTop = document.documentElement.scrollTop;
    for(var i = 0; i < animado.length; i++){
        let alturaScroll = animado[i].offsetTop;
        if(alturaScroll - 300 < srcollTop){
            animado[i].style.opacity = 1;
            animado[i].style.transition = "all 2s";
            animado[i].classList.add("down");
        }
    }
}
window.addEventListener("scroll", mostrarScroll);


//revearl article two
window.st = ScrollReveal();
st.reveal('.articulo2',{
    duration: 3000,
    origin: 'bottom',
    distance: '200px'
});




//article four reveal
window.et = ScrollReveal();
et.reveal('.ani1',{
    duration: 3000,
    origin: 'left',
    distancce: '-200px'
})