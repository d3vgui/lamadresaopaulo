document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
      const accordionContent = button.nextElementSibling;

      button.classList.toggle('active');

      if (button.classList.contains('active')) {
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
          accordionContent.style.maxHeight = 0;
      }

      arrow.style.transform = button.classList.contains('active') ? 'rotate(90deg)' : 'rotate(0)';
  });
});