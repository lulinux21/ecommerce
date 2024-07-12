import React from 'react';

const Gallery = () => {
  return (
    <>
      <div className="container-fluid" id="gallery">
        <div className="row">
          <div className="col-6 col-md-2 image-container" id="insta1"></div>
          <div className="col-6 col-md-2 image-container" id="insta2"></div>
          <div className="col-6 col-md-2 image-container" id="insta3"></div>
          <div className="col-6 col-md-2 image-container" id="insta4"></div>
          <div className="col-6 col-md-2 image-container" id="insta5"></div>
          <div className="col-6 col-md-2 image-container" id="insta6"></div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
