const donateButtons = document.querySelectorAll('[data-donate]');

donateButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('Thank you for supporting Atelier Stolle. Donation details are coming soon.');
  });
});
