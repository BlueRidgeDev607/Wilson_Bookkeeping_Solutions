const questions = document.querySelectorAll('.faq-question');

  questions.forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const toggle = question.querySelector('.faq-toggle');
      const isOpen = answer.style.display === 'block';

      // Close all others
      document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
      document.querySelectorAll('.faq-toggle').forEach(t => t.textContent = '+');

      // Toggle current
      if (!isOpen) {
        answer.style.display = 'block';
        toggle.textContent = '−';
      }
    });
  });