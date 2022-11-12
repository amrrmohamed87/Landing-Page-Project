const navbar = document.querySelector('.nav-list');
const sections = Array.from(document.querySelectorAll('section'));
function addElement() {
  for (sec of sections) {
    let navElement = document.createElement('li');
    navElement.innerHTML = `<li><a href="#${sec.id}" data-nav="${sec.id}" class="menu-link">${sec.dataset.nav}</a>`;
    navbar.appendChild(navElement);
  }
}
addElement();
//getting access to anchor points by using -> querySelectorAll() then we will
//store them inside an array so we can add eventlistener to all of them at the same time
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  //adding eventlistener works by click
  anchor.addEventListener('click', function (e) {
    /*prevent the default to basically take scroll
        smoothly to the section, not jumping over the
        section*/
    e.preventDefault();
    // const sec1 = document.querySelector('#sec1')
    if (this.getAttribute('href') === '#sec1') {
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
      //   return;
    } else {
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});
//active class
window.onscroll = () => {
  document.querySelectorAll('section').forEach((target) => {
    if (
      target.getBoundingClientRect().top >= -300 &&
      target.getBoundingClientRect().top <= 150
    ) {
      return target.classList.add('active-class');
    }
    target.classList.remove('active-class');
  });
};
