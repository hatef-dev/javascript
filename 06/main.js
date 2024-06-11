import { gsap } from "gsap";

gsap.fromTo(".text", {y:60, opacity: 0}, {y:0, opacity:1, direction:1.5})
// gsap.registerPlugin(MotionPathPlugin, ScrollToPlugin, TextPlugin);