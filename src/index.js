/* import getCurrentDate from './modules/getCurrentDate'; */
import setCurrentBackground from './modules/setCurrentBackgroud';
import getCurrentBackground from './modules/getCurrentBackground';
/*
const dateList = {
  now: new Date(new Date() - 1),
};
 */
const pageWrapper = document.querySelector('.page__wrapper');
const pageControls = document.querySelectorAll('.form__toggler');

pageControls.forEach(control => {
  control.addEventListener('click', evt => {
    const currentButton = evt.target;
    console.log(currentButton);
    if (currentButton.dataset.action === 'update-bg') {
      getCurrentBackground('morning').then(data =>
        setCurrentBackground(pageWrapper, data)
      );
    }
  });
});
