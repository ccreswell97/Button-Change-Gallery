'use strict';
'use strict';
import {ThumbnailGallery} from './thumbnailgallery.js'

document.addEventListener('DOMContentLoaded', () => {
  const base = document.getElementsByClassName('gallery')[0];
  const base2 = document.getElementsByClassName('thumbnail')[0];
  const containerWidth = base.getBoundingClientRect().width;
  // 500 / 375 = containerWidth / X
  const displayHeight = Math.round((containerWidth * 375) / 500);
  base.style.height = "" + displayHeight + "px";
  const gallery = new ThumbnailGallery(base.getElementsByClassName('full-images')[0]);
}, false);

