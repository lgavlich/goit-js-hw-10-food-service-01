import menu from './menu.json';
import menuTemlate from '../templates/menu-card.hbs';

const menuGallery = document.querySelector('.js-menu');
menuGallery.insertAdjacentHTML('afterbegin', menuTemlate(menu));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchTheme = document.querySelector('#theme-switch-toggle');
const body = document.body;

if (localStorage.getItem('theme') === Theme.DARK) {
  switchTheme.checked = true;
  changeTheme({ target: { checked: true } });
} else {
  switchTheme.checked = false;
  changeTheme({ target: { checked: false } });
}

switchTheme.addEventListener('change', changeTheme);
function changeTheme(evt) {
  if (evt.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    body.classList.remove(...body.classList);
    body.classList.add(Theme.LIGHT);
  }
}
