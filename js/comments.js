const previewElement = document.querySelector('.big-picture__preview');
const commentListElement = previewElement.querySelector('.social__comments');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');
const commentShownCountElement = previewElement.querySelector('.social__comment-shown-count');
const commentTotalCountElement = previewElement.querySelector('.social__comment-total-count');
const commentsLoaderElement = previewElement.querySelector('.comments-loader');
const COMMENTS_PER_PORTION = 5;
let commentsArray = [];
let commentsShown = 0;

const createComments = () => {
  const comments = commentsArray.slice(commentsShown, commentsShown + COMMENTS_PER_PORTION);
  const commentsLength = comments.length + commentsShown;
  comments.forEach(({avatar, name, message}) => {
    const commentItemElement = commentElement.cloneNode(true);
    const socialPictureElement = commentItemElement.querySelector('.social__picture');
    socialPictureElement.src = avatar;
    socialPictureElement.alt = name;
    commentItemElement.querySelector('.social__text').textContent = message;
    commentListElement.append(commentItemElement);
  });
  commentShownCountElement.textContent = commentsLength;
  commentTotalCountElement.textContent = `${commentsArray.length}`;
  if (commentsArray.length <= commentsLength) {
    commentsLoaderElement.classList.add('hidden');
  }
  commentsShown += COMMENTS_PER_PORTION;
};

const clearComments = () => {
  while (commentListElement.firstChild) {
    commentListElement.removeChild(commentListElement.firstChild);
  }
  commentsShown = 0;
  commentsLoaderElement.classList.remove('hidden');
};

const showComments = (сomments) => {
  commentsArray = сomments;
  clearComments();
  createComments();
  commentsLoaderElement.addEventListener('click', createComments);
};

export { showComments };
