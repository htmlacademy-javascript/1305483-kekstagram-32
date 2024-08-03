import { getPhotoArray } from './data.js';
import { makeThumbnails } from './thumbnails.js';
import { makeBigPicture } from './big-picture.js';

const data = getPhotoArray();
makeThumbnails(data);
makeBigPicture(data);
