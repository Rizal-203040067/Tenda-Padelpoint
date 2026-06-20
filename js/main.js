// Mobile nav toggle
const burger = document.getElementById('burger');
const navMobile = document.getElementById('navMobile');

if (burger && navMobile) {
  burger.addEventListener('click', () => {
    navMobile.classList.toggle('open');
  });

  // close mobile nav on link click
  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navMobile.classList.remove('open'));
  });
}
