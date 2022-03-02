import React from "react";
import ImagePizza from "../src/data/jsons/imagePizza"

export default function Image() {
  const img = ImagePizza.path
  const alt = ImagePizza.alt
  const urlBase = "http://app-fractus.orkneytech.com.br/assets/images/"
  const pathImage = `${urlBase}${img}`
  const text = `${alt}`

  return (
    <div>
      <img src={pathImage} alt={text} />
    </div>
  );
}
