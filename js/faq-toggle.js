document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        item.classList.toggle('active');
        const icon = item.querySelector('.faq-toggle');
        icon.textContent = item.classList.contains('active') ? '-' : '+';
      });
    });
  });