import { isEscapeKey } from './util.js';
import { showComments } from './comments.js';

const makeBigPicture = (listPictures) => {
  const picturesContainerElement = document.querySelector('.pictures');
  const bigPictureElement = document.querySelector('.big-picture');
  const bigPictureCancelElement = document.querySelector('.big-picture__cancel');

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      // eslint-disable-next-line
      hideBigPicture();
    }
  };

  const showBigPicture = () => {
    bigPictureElement.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);
  };

  function hideBigPicture () {
    bigPictureElement.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
  }

  const renderBigPicture = (pictureId) => {
    const index = listPictures.findIndex((picture) => pictureId === picture.id.toString());
    const { url, likes, comments, description } = listPictures[index];
    bigPictureElement.querySelector('.big-picture__img img').src = url;
    bigPictureElement.querySelector('.likes-count').textContent = likes;
    bigPictureElement.querySelector('.social__caption').textContent = description;
    showComments(comments);
  };

  const onClickBigPicture = (evt) => {
    if (evt.target.closest('.picture')) {
      const currentPictureId = evt.target.dataset.pictureId;
      renderBigPicture(currentPictureId);
      showBigPicture();
    }
  };

  picturesContainerElement.addEventListener('click', onClickBigPicture);
  bigPictureCancelElement.addEventListener('click', () => {
    hideBigPicture();
  });
};

export { makeBigPicture };
