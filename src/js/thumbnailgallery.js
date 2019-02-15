'use strict';

import BasicGallery from 'csc-adv-int-basic-gallery';

export class ThumbnailGallery extends BasicGallery {
    constructor(container) {
        super(container);
        document.getElementById('left-button').addEventListener('click', this.prev.bind(this), false);
        document.getElementById('right-button').addEventListener('click', this.next.bind(this), false);

        document.getElementById('1').addEventListener('click', this.slide.bind(this, 0), false);
        document.getElementById('2').addEventListener('click', this.slide.bind(this, 1), false);
        document.getElementById('3').addEventListener('click', this.slide.bind(this, 2), false);
        document.getElementById('4').addEventListener('click', this.slide.bind(this, 3), false);
        document.getElementById('5').addEventListener('click', this.slide.bind(this, 4), false);
    }    
}