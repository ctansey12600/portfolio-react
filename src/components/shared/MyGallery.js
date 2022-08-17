import React from "react";
import ImageGallery from "react-image-gallery";

function MyGallery({ photoData }) {
  return <ImageGallery items={photoData} />;
}

export default MyGallery;
