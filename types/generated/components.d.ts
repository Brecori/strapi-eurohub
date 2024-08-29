import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentesConteudosTags extends Schema.Component {
  collectionName: 'components_treinamentos_tags';
  info: {
    displayName: 'Tags';
    icon: 'priceTag';
    description: '';
  };
  attributes: {
    Tags: Attribute.Enumeration<
      ['Cultura', 'ESG', 'Diversidade', 'Onboarding', 'News']
    > &
      Attribute.Required;
  };
}

export interface ComponentesConteudosComponenteTeste extends Schema.Component {
  collectionName: 'components_quiz_teste_componente_testes';
  info: {
    displayName: 'ComponenteQuiz';
    icon: 'check';
    description: '';
  };
  attributes: {
    Questao: Attribute.String;
    Respostas: Attribute.Blocks;
    NumeroResposta: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 4;
        },
        number
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'componentes-conteudos.tags': ComponentesConteudosTags;
      'componentes-conteudos.componente-teste': ComponentesConteudosComponenteTeste;
    }
  }
}
