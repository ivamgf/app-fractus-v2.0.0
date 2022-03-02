import React from "react";

export default function Image(props: any) {
  const urlBase = "http://app-fractus.orkneytech.com.br/assets/images/"
  const pathImage = `${urlBase}${props.src}`
  const text = `${props.alt}`

  return (
    <div>
      <img src={pathImage} alt={text} />
    </div>
  );
}
