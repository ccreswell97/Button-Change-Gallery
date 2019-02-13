'use strict';
import {ThumbnailGallery} from './thumbnailgallery.js'

const BasicGallery = require('csc-adv-int-basic-gallery');

document.addEventListener('DOMContentLoaded', () => {
  const base = document.getElementsByClassName('gallery')[0];
  const containerWidth = base.getBoundingClientRect().width;
  // 500 / 375 = containerWidth / X
  const displayHeight = Math.round((containerWidth * 375) / 500);
  base.style.height = "" + displayHeight + "px";
  //const gallery = new BasicGallery(base.getElementsByClassName('full-images')[0]);
  const newgallery = new ThumbnailGallery(base.getElementsByClassName('small-images')[0]);
}, false);

