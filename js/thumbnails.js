const templateElement = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = ({ comments, description, likes, url, id }) => {
  const thumbnail = templateElement.cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');
  image.src = url;
  image.alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.dataset.thumbnailId = id;

  return thumbnail;
};

const makeThumbnails = (pictures, picturesContainer) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  picturesContainer.append(fragment);
};

export { makeThumbnails };
