import React from "react";

export default function ClassImage(props: TypeImage) {
  const pathImage = `${props.src}`
  const text = `${props.alt}`
  const width = `${props.width}`

  return (
    <img src={pathImage} alt={text} width={width} />
  );
}
