const accordionClosedElements = document.querySelectorAll(".accordion-top");

accordionClosedElements.forEach(accordionTop => {
  const accordionPanelElement = accordionTop.nextElementSibling;
  
  if (accordionTop.classList.contains('open')) {
    accordionPanelElement.style.maxHeight = accordionPanelElement.scrollHeight + "px";
  }
  
  accordionTop.addEventListener('click', () => {
    if (accordionTop.classList.contains('open')) {
      
      accordionTop.classList.remove('open');
      accordionPanelElement.style.maxHeight = null;
      
    } else {
      funcScopePanelCloser(accordionTop);

      accordionTop.classList.add('open');
      accordionPanelElement.style.maxHeight = accordionPanelElement.scrollHeight + "px";
    }
  })
})

function funcScopePanelCloser(topElement) {
  // i literally went on google and youtube and they were NO HELP so i came up with this ON MY OWN

  const allAccordionPanelElements = document.querySelectorAll(".accordion-panel");

  allAccordionPanelElements.forEach(panel => {

    // basically it selects the elements that share the same parent
    if ((panel.parentElement === topElement.parentElement) || ((panel.parentElement.parentElement === topElement.parentElement.parentElement) && (topElement.parentElement.classList == "accordion_pair_wrapper"))) {

      // if they do have the same parent, remove the open class and close the panel
      panel.previousElementSibling.classList.remove('open');
      panel.style.maxHeight = null;
    }

    // the reason why the if statement is so massive is because the 5-10 styles have another wrapper for the border styles,
    // and it wouldn't work because their "shared parent" is the wrapper
    // so it needs to go out of that wrapper, then check that it's not a false positive by 
    // seeing if the elements were actually in the "shared parent" wrapper
  })
}

window.addEventListener('resize', () => {
  accordionClosedElements.forEach(accordionTop => {
    const accordionPanelElement = accordionTop.nextElementSibling

    if (accordionTop.classList.contains('open')) {
      accordionPanelElement.style.maxHeight = accordionPanelElement.scrollHeight + "px";
    }
  })
})