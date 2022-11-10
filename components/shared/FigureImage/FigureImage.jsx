import React from 'react';

/**
 * How to use:
 * 
 * Fellow Developer Use This Component
 * By Placing an jsx <image.. /> tag
 * between the FigureImage tags then
 * place the desired caption as a 
 * caption prop on the figure Image
 * 
 * Why was it built:
 * 
 * To provide a reusable container
 * that quickly marks up an image.
 */

function FigureImage({children, caption}) {
    return (
        <figure className="image--figure">
            { children }
            <figcaption className="image__caption--figure">{ caption }</figcaption>
        </figure>
    );
}

export default FigureImage;