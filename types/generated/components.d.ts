import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentesConteudosComponenteTeste extends Schema.Component {
  collectionName: 'components_quiz_teste_componente_testes';
  info: {
    displayName: 'ComponenteQuiz';
    icon: 'check';
    description: '';
  };
  attributes: {
    Questao: Attribute.String & Attribute.Required;
    Respostas: Attribute.Blocks & Attribute.Required;
    NumeroResposta: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 5;
        },
        number
      > &
      Attribute.DefaultTo<1>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'componentes-conteudos.componente-teste': ComponentesConteudosComponenteTeste;
    }
  }
}
