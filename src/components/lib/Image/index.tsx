import React from "react";

export default function Image(props: TypeImage) {
  const urlBase = "https://storage.googleapis.com/fractus-bucket/"
  const pathImage = `${urlBase}${props.src}`
  const text = `${props.alt}`
  const width = `${props.width}`

  return (
    <img src={pathImage} alt={text} width={width} />
  );
}
