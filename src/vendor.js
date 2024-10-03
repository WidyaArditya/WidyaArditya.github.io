import * as bootstrap from 'bootstrap';
import VanillaTilt from 'vanilla-tilt';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);
gsap.to('.navbar .navbar-brand', { duration: 1, delay: 1.2, text: 'Ardit' });
gsap.to(' .jumbotron span:nth-child(3)', { duration: 1.2, delay: 1.7, text: 'Web developer' });
gsap.from('.jumbotron img', { duration: 1, y: -100, opacity: 0, ease: 'bounce' });
gsap.from('.navbar .nav-item', { duration: 1.3, translateX: 250, ease: 'power2' });
gsap.from('.navbar button', { duration: 1.3, translateX: 250, ease: 'power2' });
