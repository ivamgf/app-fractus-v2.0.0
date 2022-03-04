
const contentText = {
  content: {
    title: 'Textos',
    Image: '',
    description: '',
  },
  children: {
      routes: {
          route1: 'Início',
          route2: 'Textos',
          route3: '',
          routeUrl: '/favicon.ico',
      },
      buttons: {
        value: 'Voltar',
        color: '#249DD9'
      },
      texts: {
        text1: {
          title1: 'Conceitos Básicos',
          content1: {
            definition: 'Uma fração representa a razão entre dois números inteiros.',
            example1: 'Exemplos:',
            subTitle1: 'Tipos de Frações',
            description1: 'São quatro tipos de frações que iremos abordar em nossos estudos, as frações próprias, impróprias, aparentes e mistas.',
            item1: {
              titleItem1: 'Frações Próprias',
              textItem1: 'Frações em que o numerador é menor que o denominador.',
              imageUrl1: ''
            },
            item2: {
              titleItem2: 'Frações Impróprias',
              textItem2: 'Frações em que o numerador é maior que o denominador.',
              imageUrl2: ''
            },
            item3: {
              titleItem3: 'Fração Aparente',
              textItem3: 'Fração em que o numerador é múltiplo do denominador.',
              imageUrl3: ''
            },
            item4: {
              titleItem4: 'Frações Mista',
              textItem4: 'É constituída por uma parte inteira e uma parte fracionária representada por números mistos.',
              imageUrl4: ''
            }
          }
        },
        text2: {
          title2: 'Operações',
          content2: {
            definition: 'Operações com frações.',
            example1: '',
            subTitle1: '',
            description1: 'São quatro tipos de operações com frações.',
            item1: {
              titleItem1: 'Adição',
              textItem1: `Para realizar a operação de soma de duas ou mais frações é necessário deixar os denominadores das frações iguais.
                        Se isto já ocorre então basta somarmos os numeradores, repetirmos o denominador comum e teremos a resposta.
                        Veja nosso exemplo abaixo.`,
              imageUrl1: '',
              subItem1: {
                subItemText1: `Caso os denominadores sejam diferentes é necessário achar o mínimo múltiplo comum (MMC) dos denominadores.
                Veja um exemplo abaixo:
                Temos a seguinte fração,
                `,
                subItemImage1: '',
                subItemText2: 'agora temos que achar o MMC dos denominadores, então para isso faremos,',
                subItemImage2: '',
                subItemText3: `Para a subtração vale a mesma regra, bastando apenas trocar o sinal de adição pelo de subtração.`,
                subItemImage3: '',
                subItemText4: `como a fração resultante é uma fração aparente podemos fazer`,
                subItemImage4: ''
              }
            },
            item2: {
              titleItem2: 'Multiplicação',
              textItem2: 'Na multiplicação basta que multipliquemos numeradores por numeradores e denominadores por denominadores, como no exemplo a seguir:',
              imageUrl2: '',
              subItem2: {
                subItemText1: `neste caso podemos simplificar as frações, dividindo numeradores e denominadores por 2 até termos uma fração irredutível.`,
                subItemImage1: ''
              }
            },
            item3: {
              titleItem3: 'Multiplicação com Frações Mistas',
              textItem3: `Na multiplicação com frações mistas temos primeiro que convertê-las em frações impróprias e depois em mistas novamente,
                        assim temos o seguinte exemplo:`,
              imageUrl3: ''
            },
            item4: {
              titleItem4: 'Divisão',
              textItem4: `Na divisão de frações mistas temos primeiro que trocar o numerador pelo denominador e vice-e-versa
                        em uma das frações e depois basta multiplicar normalmente, assim temos o seguinte exemplo:`,
              imageUrl4: ''
            }
          }
        }
      }
  }
}

export default contentText;
