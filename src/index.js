import getCurrentBackground from './modules/getCurrentBackground';
import getCurrentPosition from './modules/getCurrentPosition';
import setCurrentBackground from './modules/setCurrentBackgroud';
import showNowdate from './modules/showNowDate';

window.onload = () => {
  showNowdate();
  getCurrentPosition();
};

const pageWrapper = document.querySelector('.page__wrapper');
const pageControls = document.querySelectorAll('.form__toggler');

pageControls.forEach(control => {
  control.addEventListener('click', evt => {
    evt.preventDefault();
    const currentButton = evt.target;
    if (currentButton.dataset.action === 'update-bg') {
      getCurrentBackground('morning').then(data =>
        setCurrentBackground(pageWrapper, data)
      );
    }
  });
});
