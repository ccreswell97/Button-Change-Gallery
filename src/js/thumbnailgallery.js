'use strict';

import BasicGallery from 'csc-adv-int-basic-gallery';

export class ThumbnailGallery extends BasicGallery {
    constructor(container) {
        super(container);
        document.getElementById('left-button').addEventListener('click', this.prev.bind(this), false);
        document.getElementById('right-button').addEventListener('click', this.next.bind(this), false);
    }    
}