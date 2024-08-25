const headerWholeElement = document.querySelector(".--builtin--header");

const burgerMenuElement = document.querySelector(".burger_menu");
const mainContentElement = document.querySelector(".main-content");
const menuItemsElement = document.querySelector(".menu_items");

const screenFaderElement = document.querySelector(".--builtin--screen_fader");

const footerWholeElement = document.querySelector(".--builtin--footer");

const backToTopElement = document.querySelector(".--builtin--back_to_top");

// array which holds all elements that get the "active" class
const headerAllActiveElements = [
  burgerMenuElement,
  menuItemsElement,
  headerWholeElement,
  footerWholeElement,
  mainContentElement,
  screenFaderElement,
  backToTopElement
];

burgerMenuElement.addEventListener("click", () => {
  headerAllActiveElements.forEach((element) => {
    element.classList.toggle("active");
  });
});

backToTopElement.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
})

const closeButtonElement = document.querySelector(".js_menu_close");

// array for the two elements that only remove the "active" class (X button on side menu and the black thing when you click off)
const headerMenuCloserElements = [closeButtonElement, screenFaderElement];

headerMenuCloserElements.forEach((element) => {
  element.addEventListener("click", () => {
    headerAllActiveElements.forEach((elementActive) => {
      elementActive.classList.remove("active");
    });
  });
});

// function to change icons and stop things breaking in desktop view for the menu items
funcDynamicMenuResets(window.innerWidth);

window.addEventListener('resize', () => {
  funcDynamicMenuResets(window.innerWidth);
});

window.addEventListener('scroll', () => {
  const headerNavElement = document.querySelector('.header_content');

  if (scrollY > 100) {
    headerNavElement.classList.add("popout");
    document.body.style.marginTop = headerNavElement.scrollHeight + "px";
    backToTopElement.classList.add("show");
  } else {
    headerNavElement.classList.remove("popout");
    document.body.style.marginTop = null;
    backToTopElement.classList.remove("show");
  }
})

function funcDynamicMenuResets(windowSize) {
  if (windowSize < 990) {
    const iconElements = document.querySelectorAll('.menu_show_more_icon');

    iconElements.forEach((icon) => {
      icon.classList.replace("fa-chevron-down", "fa-circle-plus");
    });
  } else {
    const iconElements = document.querySelectorAll(".menu_show_more_icon");
    const clickedElements = document.querySelectorAll('.clicked');

    iconElements.forEach((icon) => {
      icon.classList.replace("fa-circle-plus", "fa-chevron-down");
      icon.classList.replace("fa-circle-minus", "fa-chevron-down");
      headerAllActiveElements.forEach((element) => {
        element.classList.remove("active");
      });
    });

    clickedElements.forEach(clicked => {
      const dropDownContentElement = clicked.nextElementSibling;
      const dropDownTrueParentElement = clicked.parentElement.parentElement;

      clicked.classList.remove('clicked');

      dropDownContentElement.style.maxHeight = null;
      dropDownContentElement.style.borderColor = null;
      dropDownTrueParentElement.style.maxHeight = null;

      //remove transitions for seamless transition into desktop view
      dropDownContentElement.style.transition = "none";
      dropDownTrueParentElement.style.transition = "none";

      // reset transitions so that when you change it back to mobile it actually has transitions lol
      setTimeout(() => {
        dropDownContentElement.style.transition = null;
        dropDownTrueParentElement.style.transition = null;
      }, 100)
    })
  }
}

const dropDownElements = document.querySelectorAll('.js-drop-down');

dropDownElements.forEach(element => {
  const dropDownContentElement = element.nextElementSibling;

  element.addEventListener('click', () => {
    if (window.innerWidth < 990) {
      if (element.classList.contains('clicked')) {
        element.classList.remove('clicked');
        const dropDownIcon = element.lastChild;
  
        dropDownIcon.classList.replace("fa-circle-minus", "fa-circle-plus");
        dropDownContentElement.style.maxHeight = null;
        dropDownContentElement.style.borderColor = null;
      } else {
        element.classList.add('clicked');

        const dropDownIcon = element.lastChild;

        dropDownIcon.classList.replace("fa-circle-plus", "fa-circle-minus"); 
        dropDownContentElement.style.maxHeight = dropDownContentElement.scrollHeight + "px";
        dropDownContentElement.style.borderColor = "rgba(173, 181, 189, 0.3)";

        // this is literally just so that nested accordions can work
        const dropDownTrueParentElement = element.parentElement.parentElement;

        if (dropDownTrueParentElement.classList == "drop-down-content") {
          dropDownTrueParentElement.style.maxHeight = "unset";
          setTimeout(() => {dropDownTrueParentElement.style.maxHeight = dropDownTrueParentElement.scrollHeight + "px"}, 600)
        }
      }
    }
  })
})