const picturesContainer = document.querySelector('.pictures');
const templateElement = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = (picture) => {
  const element = templateElement.cloneNode(true);
  const image = element.querySelector('.picture__img');
  image.src = picture.url;
  image.alt = picture.description;
  element.querySelector('.picture__likes').textContent = picture.likes;
  element.querySelector('.picture__comments').textContent = picture.comments.length;
  return element;
};

const makeThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const element = createThumbnail(picture);
    fragment.append(element);
  });
  picturesContainer.append(fragment);
};


export {makeThumbnails};
