import { makeThumbnailElements } from './thumbnails.js';
import { makeBigPicture } from './big-picture.js';
import { getData, sendData } from './api.js';
import { debounce, showAlert } from './util.js';
import { setOnFormSubmit, hideModal } from './form.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { init as initFilter, getFilteredPictures } from './filter.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  const debounceMakeThumbnailElements = debounce(makeThumbnailElements);
  initFilter(data, debounceMakeThumbnailElements);
  makeThumbnailElements(getFilteredPictures());
  makeThumbnailElements(data);
  makeBigPicture(data);
} catch {
  showAlert();
}
