import React from "react";
import ImageGallery from "react-image-gallery";

function MyGallery({ photoData }) {
  const gallery = photoData.map((value) => {
    const container = {};
    if (value.location === "gallery") {
      container["original"] = value.original;
      container["thumbnail"] = value.thumbnail;
    }
    return container;
  });

  return <ImageGallery items={gallery.slice(1)} />;
}

export default MyGallery;
