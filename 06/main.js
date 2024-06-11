import { gsap } from "gsap";

const btn = document.querySelector('button')
const tl = gsap.timeline({defaults: {duration: 0.75}})

tl.fromTo('.cookie-container',{scale:0}, {scale: 1, direction:2, ease: "elastic.out(1,0.5)"} )
tl.fromTo('.text', {x: 45, opacity: 0}, {x: 0, opacity:1}, "<60%");
tl.fromTo('.cookie', {x: -45, opacity: 0, rotation: "-45deg"}, {x:  0, opacity: 1, rotation: "0deg"}, "<")
tl.fromTo('.cookie', {y:0, rotation:"0deg"}, {y:-20,rotation:"-20deg", yoyo: true, repeat: -1})//repeat always loop
tl.fromTo('#crumbs', {y:0}, {y:-10, yoyo: true, repeat: -1}, "<")//repeat always loop
tl.fromTo
btn.addEventListener('click', () => {
  gsap.to('.cookie-container', {scale:0, opacity:0, direction:2.5, ease: "elastic.in(1,0.5)"})
})