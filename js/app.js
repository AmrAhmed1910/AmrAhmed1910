/**
 * Define Global Variables
 * variables for navbar and page sections
 */
const menu = document.querySelector('#navbar__list');
const sections = document.querySelectorAll("section");


// create navbar elements
function createElement() {
  for (section of sections) {
    const element = document.createElement("li");
    const sectionL = section.getAttribute('id');
    const sectionN = section.getAttribute('data-nav');
    element.innerHTML = `<a class="menu__link" href='#${sectionL}'>${sectionN}</a>`;
    menu.appendChild(element);

    // function for smooth scrolling
    const navLinks = document.querySelectorAll(".menu__link");
    navLinks.forEach((link) => {
      element.addEventListener('click', () => {
        const id = link.getAttribute('href');
        const section = document.querySelector(id);
        event.preventDefault();
        section.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      });
    });
  };
};

// Section Active State
function activeState() {
  let arrayActive = [];
  for (section of sections) {
    const rect = section.getBoundingClientRect();
    // add active state to section in view
    if (rect.top >= -100 && rect.top < 300 && !section.classList.contains("your-active-class")) {
      section.classList.add("your-active-class")
      arrayActive.push(section);
      console.log(arrayActive[0].getAttribute('data-nav'))
    }
    //  remove active state to section above view
    else if (rect.top < -100) {
      section.classList.remove("your-active-class")
    }
    //  remove active state to section below view
    else if (rect.top > 300) {
      section.classList.remove("your-active-class")
    }
  };
}

// function for making the navbar sticky
function fixNavbar() {
  var nav = document.querySelector('#navbar__list');
  var sticky = menu.offsetTop;
  if (window.pageYOffset >= sticky) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
}



// build the nav
createElement();
document.addEventListener('scroll', fixNavbar);
// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', activeState);