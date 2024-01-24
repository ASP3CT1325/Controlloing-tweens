let play = document.querySelector('.play')
let pause = document.querySelector('.pause')
let restart = document.querySelector('.restart')

let tween = gsap.to(".box", {
y: -200,
duration: 5,
backgroundColor: "teal"})