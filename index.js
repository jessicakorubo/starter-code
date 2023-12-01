const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const mobile_nav = document.querySelector('.mobile-nav');


hamburger.addEventListener('click', ()=> {
    mobile_nav.style.right="0%";
    console.log('Clicked on the hamburger!');
});

close.addEventListener('click', () => {
    mobile_nav.style.right = "100%";
})