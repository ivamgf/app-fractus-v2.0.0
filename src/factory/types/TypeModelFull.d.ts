// Type model full for data model

type TypeModelFull = {
  header: {
    title: string,
    subTitle: string,
    description: string,
    meta: string,
    image: string
  },
  content: {
    title: string,
    description: string,
    imageUrl: string,
    credits: string
  },
  contentText: {
    title1: string,
    text1: string
  },
  routes: {
    route1: string,
    route2: string,
    route3: string
  },
  buttons: {
    buttonPrev: {
    value: string,
    variant: string,
    color: string,
    disabled?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    },
    buttonNext: {
      value: string,
      variant: string,
      color: string,
      disabled?: boolean,
      onClick?: React.MouseEventHandler<HTMLButtonElement>
    },
    buttonSend: {
        value: string,
        variant: string,
        color: string,
        disabled?: boolean,
        onClick?: React.MouseEventHandler<HTMLButtonElement>
    },
    buttonAdvance: {
      value: string,
      variant: string,
      color: string,
      disabled?: boolean,
      onClick?: React.MouseEventHandler<HTMLButtonElement>
    },
    buttonLink: {
      value: string,
      variant: string,
      color: string,
      disabled?: boolean,
      onClick?: React.MouseEventHandler<HTMLButtonElement>
    }
  }
}
