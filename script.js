let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =()=>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// remove once clicked
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

var typed = new Typed("#multi",{
    strings: [,  "Student !","Problem Solver !","Web Developer !"] ,
    typeSpeed: 50,
    backSpeed: 100,
    loop: true

    })
    


  