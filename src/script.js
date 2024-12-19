// script.js
export function setupScrollAnimation() {
    const revealPoint = 300;
    const windowHeight = window.innerHeight;
    const aboutsection = document.querySelector('.about');
    const myedu =document.querySelector('.myedu');
    const skills=document.querySelector('.skills-wrap')
    const projects=document.querySelector('.projects');
    const card_1=document.querySelector('.card-1');
    const card_2=document.querySelector('.card-2');
    const card_3=document.querySelector('.card-3');
    const card_4=document.querySelector('.card-4');
    const contact=document.querySelector('.contact-text');
    const contact_form=document.querySelector('.contact-form');
    const navlinks=document.getElementsByClassName('.navlink')
    const head_1=document.querySelector('.intro-1'); 
    const head_2=document.querySelector('.intro-2');
    const para=document.querySelector('.intro-3');

    window.addEventListener('scroll', function () {
        const revealTop = aboutsection.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            console.log("reached");
            aboutsection.classList.add('animate-slideleft');
            myedu.classList.add('animate-slideIn') 
            skills.classList.add('animate-slideleft')
           

        } else {
            aboutsection.classList.remove('animate-slideleft');
            myedu.classList.remove('animate-slideIn') 
            skills.classList.remove('animate-slideleft')
        }
    });
    window.addEventListener('scroll', function () {
        const revealTop = projects.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            console.log("reached");
            projects.classList.add('animate-slideleft');
            card_1.classList.add('animate-slidetopDelay1');
            card_2.classList.add('animate-slidetopDelay2');
            card_3.classList.add('animate-slidetopDelay3');
            card_4.classList.add('animate-slidetopDelay4');

            
        } else {
            projects.classList.remove('animate-slideleft');
            card_1.classList.remove('animate-slidetopDelay1');
            card_2.classList.remove('animate-slidetopDelay2');
            card_3.classList.remove('animate-slidetopDelay3');
            card_4.classList.remove('animate-slidetopDelay4');

            
        }
    });
    window.addEventListener('scroll', function () {
        const revealTop = contact.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            console.log("reached");
            contact.classList.add('animate-slideleft');
           contact_form.classList.add('animate-slidetop') 
        } else {
            contact.classList.remove('animate-slideleft');
            contact_form.classList.remove('animate-slidetop') ;
        }
    });
}



