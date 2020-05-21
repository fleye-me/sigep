export interface IObjetoPostalItem {
  numero_etiqueta: string;
  /**
   * @desc É obrigatório o campo ficar vazio.
   */
  codigo_objeto_cliente: string;
  codigo_servico_postagem: string;
  cubagem: number;
  peso: number;
  rt1?: string;
  /**
   * @desc É obrigatório o campo ficar vazio.
   */
  rt2: string;
  destinatario: {
    nome_destinatario: string;
    telefone_destinatario?: number;
    celular_destinatario?: number;
    email_destinatario?: string;
    logradouro_destinatario: string;
    complemento_destinatario?: string;
    numero_end_destinatario: number;
    cpf_cnpj_destinatario?: number;
    restricao_anac: string;
  };
  nacional: {
    bairro_destinatario: string;
    cidade_destinatario: string;
    uf_destinatario: string;
    cep_destinatario: string;
    codigo_usuario_postal?: string;
    centro_custo_cliente?: string;
    numero_nota_fiscal?: number;
    serie_nota_fiscal?: string;
    valor_nota_fiscal?: number;
    /**
     * @desc É obrigatório o campo ficar vazio.
     */
    natureza_nota_fiscal: string;
    descricao_objeto?: string;
    valor_a_cobrar: string;
  };
  servico_adicional: {
    codigo_servico_adicional: Array<string>;
    valor_declarado: number;
    endereco_vizinho: string;
  };
  dimensao_objeto: {
    /**
     * @desc Para 001 (Envelope) – Não prencher as tags de dimensões
     * @desc Para 002 (Pacote / Caixa) – Preencher as tags: altura, largura e comprimento
     * @desc Para 003 (Rolo / Cilindro / Esférico) – Preencher as tags: comprimento e diâmetro
     */
    tipo_objeto: string;

    /**
     * @desc Para 001 (Envelope) – preencher com “0”
     * @desc Para 002 (Pacote / Caixa) – obrigatório
     * @desc Para 003 (Rolo / Cilindro / Esférico) – preencher com “0”
     */
    dimensao_altura: string;
    dimensao_largura: string;
    /**
     * @desc Para 001 (Envelope) – preencher com “0”
     * @desc Para 002 (Pacote / Caixa) – obrigatório
     * @desc Para 003 (Rolo / Cilindro / Esférico) – obrigatório
     */
    dimensao_comprimento: string;
    /**
     * @desc Para 001 (Envelope) – preencher com “0”
     * @desc Para 002 (Pacote / Caixa) – preencher com “0”
     * @desc Para 003 (Rolo / Cilindro / Esférico) – obrigatório
     */
    dimensao_diametro: string;
  };
  /**
   * @desc É obrigatório o campo ficar vazio.
   */
  data_postagem_sara: string;
  status_processamento: string;
  /**
   * @desc É obrigatório o campo ficar vazio.
   */
  numero_comprovante_postagem: number;
  /**
   * @desc É obrigatório o campo ficar vazio.
   */
  valor_cobrado: number;
}
