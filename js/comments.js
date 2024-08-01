const commentListElement = document.querySelector('.social__comments');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');
const commentShownCountElement = document.querySelector('.social__comment-shown-count');
const commentTotalCountElement = document.querySelector('.social__comment-total-count');
const commentsLoaderElement = document.querySelector('.comments-loader');
const COMMENTS_PER_PORTION = 5;

let commentsShown = 0;
let comments = [];

const createComment = ({ avatar, name, message }) => {
  const comment = commentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = () => {
  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= comments.length) {
    commentsLoaderElement.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }

  commentListElement.innerHTML = '';
  commentListElement.append(fragment);
  commentShownCountElement.textContent = commentsShown;
  commentTotalCountElement.textContent = comments.length;
};

const onCommentsLoaderClick = () => renderComments();

commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);

export { renderComments };
