import { makeThumbnails } from './thumbnails.js';
import { showBigPicture } from './big-picture.js';

const picturesContainer = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  picturesContainer.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }

    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    showBigPicture(picture);
  });

  makeThumbnails(pictures, picturesContainer);
};

export { renderGallery };
