
type TypeCardText = {
  content: {
    title: string
  },
  text2: string,
  texts: {
    text1: {
      title1: string;
      content1: {
          definition: string,
          example1: string,
          subTitle1: string,
          description1: string,
          item1: {
              titleItem1: string,
              textItem1: string
          },
          item2: {
              titleItem2: string,
              textItem2: string
          },
          item3: {
            titleItem3: string,
            textItem3: string
          },
          item4: {
            titleItem4: string,
            textItem4: string
          },
      },
    },
    text2: {
      title2: string,
      content2: {
        definition: string,
        example2: string,
        subTitle2: string,
        description1: string,
        item1: {
          titleItem1: string,
          textItem1: string,
          subItem1: {
            subItemText1: string,
            subItemText2: string,
            subItemText3: string,
            subItemText4: string,
          }
        },
        item2: {
          titleItem2: string,
          textItem2: string,
          subItem2: {
            subItemText1: string
          }
        },
        item3: {
            titleItem3: string,
            textItem3: string
        },
        item4: {
            titleItem4: string,
            textItem4: string
        }
      }
    }
  }
}
