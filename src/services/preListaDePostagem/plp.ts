import { Forma_pagamento } from './types';

export interface IPLP {
  tipo_arquivo: string;
  versao_arquivo: number;
  plp: {
    /**
     * @desc É obrigatório o campo ficar vazio,
     * pois será preenchido pelo retorno deste método
     * @desc Apenas o campo cartão_postagem é preenchido pelo usuário
     */
    id_plp: string;
    valor_global: string;
    mcu_unidade_postagem: string;
    nome_unidade_postagem: string;
    cartao_postagem: string;
  };
  remetente: {
    numero_contrato: { _cdata: string } | string;
    numero_diretoria?: { _cdata: string } | string;
    codigo_administrativo: { _cdata: string } | string;
    nome_remetente: { _cdata: string } | string;
    logradouro_remetente: { _cdata: string } | string;
    numero_remetente: { _cdata: string } | string;
    complemento_remetente: { _cdata: string } | string;
    bairro_remetente: { _cdata: string } | string;
    cep_remetente: { _cdata: string } | string;
    cidade_remetente: { _cdata: string } | string;
    uf_remetente: { _cdata: string } | string;
    telefone_remetente: { _cdata: string } | string;
    fax_remetente: { _cdata: string } | string;
    email_remetente: { _cdata: string } | string;
    celular_remetente: { _cdata: string } | string;
    cpf_cnpj_remetente?: { _cdata: string } | string;
    ciencia_conteudo_proibido?: { _cdata: string } | string;
  };
  forma_pagamento: Forma_pagamento | string;
}
