const ALERT_SHOW_TIME = 5000;
const dataErrorTemplateElement = document.querySelector('#data-error').content.querySelector('.data-error');
const showAlert = () => {
  const dataErrorElement = dataErrorTemplateElement.cloneNode(true);
  document.body.append(dataErrorElement);
  setTimeout(() => {
    dataErrorElement.remove();
  }, ALERT_SHOW_TIME);
};

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutID;
  return (...rest) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { showAlert, isEscapeKey, isEnterKey, debounce };
