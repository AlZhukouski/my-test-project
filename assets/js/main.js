import customSelect from 'custom-select';

const cstSel = customSelect('select')[0];

const slider = document.getElementById('rangeSlider');
const valueInput = document.getElementById('rangeSliderValue');

slider.addEventListener('input', function () {
    valueInput.textContent = this.value + ' %';
});
valueInput.value = slider.value;

document.getElementById('attachment').addEventListener('change', function (e) {
    const fileName = e.target.files[0] ? e.target.files[0].name : 'Файл не выбран';
    document.getElementById('fileName').textContent = fileName;
});

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.header__burger');
  const body = document.body;

  burger.addEventListener('click', () => {
    const isExpanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', !isExpanded);
    body.classList.toggle('menu-open');
  });

  // Закрытие меню при клике на ссылку
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      burger.setAttribute('aria-expanded', 'false');
      body.classList.remove('menu-open');
    });
  });
});