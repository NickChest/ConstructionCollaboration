const accordionClosedElements = document.querySelectorAll(".accordion-top");

accordionClosedElements.forEach(accordionTop => {
  accordionTop.addEventListener('click', () => {
    const accordionPanel = accordionTop.nextElementSibling;

    if (accordionTop.classList.contains('open')) {
      accordionTop.classList.remove('open');
      accordionPanel.style.maxHeight = null;
    } else {
      accordionTop.classList.add('open');
      accordionPanel.style.maxHeight = accordionPanel.scrollHeight + "px";
    }
  })
})