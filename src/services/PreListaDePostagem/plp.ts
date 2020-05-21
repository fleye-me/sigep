import { IObjetoPostalItem } from './objetoPostalItem';

export interface IPLP {
  correioslog: {
    tipo_arquivo: string;
    versao_arquivo: number;
    plp: {
      id_plp: number;
      valor_global: number;
      mcu_unidade_postagem: string;
      nome_unidade_postagem: string;
      cartao_postagem: string;
    };
    remetente: {
      numero_contrato: string;
      numero_diretoria: number;
      codigo_administrativo: string;
      nome_remetente: string;
      logradouro_remetente: string;
      numero_remetente: string;
      complemento_remetente?: string;
      bairro_remetente: string;
      cep_remetente: string;
      cidade_remetente: string;
      uf_remetente: string;
      telefone_remetente?: number;
      fax_remetente?: number;
      email_remetente?: string;
      celular_remetente?: number;
      cpf_cnpj_remetente?: number;
      ciencia_conteudo_proibido: string;
    };
    forma_pagamento: string;
    objeto_postal: Array<IObjetoPostalItem>;
  };
}
