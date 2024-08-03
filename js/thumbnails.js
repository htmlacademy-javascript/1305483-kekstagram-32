const templateElement = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const createThumbnail = (picture) => {
  const thumbnail = templateElement.cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');
  image.src = picture.url;
  image.alt = picture.description;
  thumbnail.querySelector('.picture__likes').textContent = picture.likes;
  thumbnail.querySelector('.picture__comments').textContent = picture.comments.length;
  thumbnail.dataset.thumbnailId = picture.id;

  return thumbnail;
};

const makeThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  picturesContainer.append(fragment);
};

export { makeThumbnails };
