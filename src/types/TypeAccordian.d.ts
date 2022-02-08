

// Type Accordian

type TypeAccordian = {
  header: {
    title: string,
    subTitle: string,
    description: string,
    meta: string,
    image: string
  },
  content?: {
    title: string,
    description: string,
    imageUrl: string,
    credits: string
  },
  contentText: {
    title1: string,
    text1: string,
    title2: string,
    text2: string,
    title3: string,
    text3: string,
    title4: string,
    text4: string,
    title5: string,
    text5: string,
    title6: string,
    text6: string,
    title7: string,
    text7: string,
    title8: string,
    text8: string,
    title9: string,
    text9: string
  },
  buttons: {
    buttonPrev: {
      value: string,
      variant: string,
      color: string,
      disabled?: boolean,
      onClick?: React.MouseEventHandler<HTMLButtonElement>
    }
  }
}
