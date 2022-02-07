
const dataModels = {
  header: {
      title: 'Model',
      subTitle: '',
      description: '',
      meta: '',
      image: '../../assets/logos/logo-fractus-cor.svg'
  },
  children: {
      content: {
          title: '',
          description: '',
          imageUrl: '',
          credits: '',

      },
      contentText: {
          title1: '',
          text1: ''
      },
      routes: {
          route1: 'Início',
          route2: '',
          route3: '',
          routeUrl: '/favicon.ico',
      },
      buttons: {
          buttonPrev: {
              value: 'Voltar',
              variant: 'contained',
              color: 'primary',
              disabled: true
          },
          buttonNext: {
              value: 'Próximo',
              variant: 'contained',
              color: 'primary',
              disabled: true
          },
          buttonSend: {
              value: 'Enviar',
              variant: 'contained',
              color: 'primary',
              disabled: true,
          },
          buttonAdvance: {
            value: 'Avançar',
            variant: 'contained',
            color: 'primary',
            disabled: true
          },
          buttonLink: {
            value: 'Termos',
            variant: 'text',
            color: 'primary',
            disabled: true
          }
      },
  }
}

export default dataModels;
