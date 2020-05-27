import { IObjetoPostalItem } from './objetoPostalItem';
import { Forma_pagamento } from './types';

export interface IPLP {
  correioslog: {
    tipo_arquivo: string;
    versao_arquivo: number;
    plp: {
      /**
       * @desc É obrigatório o campo ficar vazio,
       * pois será preenchido pelo retorno deste método
       * @desc Apenas o campo cartão_postagem é preenchido pelo usuário
       */
      id_plp: number | string;
      valor_global: number | string;
      mcu_unidade_postagem: string | string;
      nome_unidade_postagem: string | string;
      cartao_postagem: string;
    };
    remetente: {
      numero_contrato: string;
      numero_diretoria: number;
      codigo_administrativo: string;
      nome_remetente: string;
      logradouro_remetente: string;
      numero_remetente: string;
      complemento_remetente: string;
      bairro_remetente: string;
      cep_remetente: string;
      cidade_remetente: string;
      uf_remetente: string;
      telefone_remetente: number;
      fax_remetente: string;
      email_remetente: string;
      celular_remetente: string;
      cpf_cnpj_remetente?: string;
      ciencia_conteudo_proibido?: string;
    };
    forma_pagamento: Forma_pagamento;
    objeto_postal: Array<IObjetoPostalItem>;
  };
}
