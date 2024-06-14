import { gsap } from "gsap";

const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.in" } });

tl.fromTo(
  ".hero-img",
  { scale: 1.3, borderRadius: "0rem" },
  {
    scale: 1,
    borderRadius: "2rem",
    delay: 0.25,
    duration: 2.5,
    ease: "elastic.out(1.5,1)",
  }
);

tl.fromTo(".cta1", { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, "<10%");
tl.fromTo(".cta3", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<10%");
tl.fromTo(".cta2", { y: "-100%", opacity: 0 }, { y: 0, opacity: 1 }, "<10%");
tl.fromTo(".cta4", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<10%");
tl.fromTo(".cta6", { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, "<10%");
tl.fromTo(".cta5", { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<10%");
tl.fromTo(".cta-btn", { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<");

const logo = document.querySelector(".logo");
const letters = logo.textContent.split("");

logo.textContent = ""
for(const index of letters){
  logo.innerHTML+= '<span class="letter">'+ index + '</span>'
}
gsap.set('.letter', {display: 'inline-block'})
gsap.fromTo('.letter', {y: "100%",},{y: 0, stagger:0.1, delay: 1, duration:0.75, ease: "back.inOut"})