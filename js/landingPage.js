
const navbar = document.querySelector("#nav-list");
const sections = Array.from(document.querySelectorAll("section"));
function addElement(){
    for(sec of sections){const navElement = document.createElement("li");
    navElement.innerHTML = `<li><a href="#${sec.id}" data-nav="${sec.id}" class="menu-link">${sec.dataset.nav}</a>`;
    navbar.appendChild(navElement);
 }
}
addElement();
//getting access to anchor points by using -> querySelectorAll() then we will 
//store them inside an array so we can add eventlistener to all of them at the same time
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //adding eventlistener works by click
    anchor.addEventListener("click", function(e){
        /*prevent the default to basically take scroll
        smoothly to the section, not jumping over the
        section*/
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});
//active class
window.onscroll = function(){
    document.querySelectorAll("section").forEach(function(active){
        if(
            active.getBoundingClientRect().top >= -300 &&
            active.getBoundingClientRect().top <= 150
        ){
            active.classList.add("your-active-class");
        }else{
            active.classList.remove("your-active-class");
        }
    });
};