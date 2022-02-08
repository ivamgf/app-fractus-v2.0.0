
// Type model full for data model

type TypeAccept = {
  header: {
    title: string,
    subTitle: string,
    description: string,
    meta: string,
    image: string
  },
  checkBox: {
    value: string,
    label: string,
    checkedState: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
  },
  buttons: {
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
