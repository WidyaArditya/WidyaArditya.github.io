gsap.registerPlugin(TextPlugin);
gsap.to('.navbar .navbar-brand', { duration: 1, delay: 1.2, text: 'Ardit' });
gsap.from('.jumbotron img', { duration: 1, y: -100, opacity: 0, ease: 'bounce' });
gsap.from('.navbar .nav-item', { duration: 1.3, translateX: 250, ease: 'power2' });
gsap.from('.navbar button', { duration: 1.3, translateX: 250, ease: 'power2' });
