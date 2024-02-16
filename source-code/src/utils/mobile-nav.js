const mobileNav = () => {
    const headerBars = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link')

    // State
    let isOpen = false;

    headerBars.addEventListener('click', () => {
        isOpen = !isOpen
        if (isOpen) {
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        } else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    })

    // ForEach works on NodeLists --- removes the need to convert the NodeList to an array
    mobileLinks.forEach((link) => {
        link.addEventListener('click', ()=>{
            isOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        })
    });
};

export default mobileNav;
