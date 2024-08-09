const templateElement = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainerElement = document.querySelector('.pictures');

const createThumbnail = (picture) => {
  const thumbnailElement = templateElement.cloneNode(true);
  const imageElement = thumbnailElement.querySelector('.picture__img');
  imageElement.src = picture.url;
  imageElement.alt = picture.description;
  thumbnailElement.querySelector('.picture__likes').textContent = picture.likes;
  thumbnailElement.querySelector('.picture__comments').textContent = picture.comments.length;
  imageElement.dataset.pictureId = picture.id;

  return thumbnailElement;
};

const makeThumbnailElements = (pictures) => {
  picturesContainerElement.querySelectorAll('.picture').forEach((element) => element.remove());
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnailElement = createThumbnail(picture);
    fragment.append(thumbnailElement);
  });
  picturesContainerElement.append(fragment);
};

export { makeThumbnailElements };
