'use strict';

import BasicGallery from 'csc-adv-int-basic-gallery';

export class ThumbnailGallery extends BasicGallery {
    constructor(container, options) {

        document.getElementById('right-button').addEventListener("click", function() {
            document.getElementById('demo').innerHTML = "goodbye world";
        })
    }    
}