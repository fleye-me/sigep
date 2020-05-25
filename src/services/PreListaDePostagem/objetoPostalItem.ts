export interface IObjetoPostalItem {
  numero_etiqueta: string;
  /**
   * @desc É obrigatório o campo ficar vazio.
   */
  codigo_objeto_cliente: string | string;
  codigo_servico_postagem: string;
  /**
   * @desc em centímetros cúbicos
   */
  cubagem: number;
  /**
   * @desc Peso em gramas
   */
  peso: number;
  rt1: string;
  /**
   * @desc É obrigatório o campo ficar vazio.
   */
  rt2: string | string;
  destinatario: {
    nome_destinatario: string;
    telefone_destinatario: string;
    celular_destinatario: string;
    email_destinatario: string;
    logradouro_destinatario: string;
    complemento_destinatario: string;
    numero_end_destinatario: number;
    cpf_cnpj_destinatario?: string;
    restricao_anac?: string;
  };
  nacional: {
    bairro_destinatario: string;
    cidade_destinatario: string;
    uf_destinatario: string;
    cep_destinatario: string;
    codigo_usuario_postal: string;
    centro_custo_cliente: string;
    numero_nota_fiscal: string;
    serie_nota_fiscal: string;
    valor_nota_fiscal: string;
    /**
     * @desc É obrigatório o campo ficar vazio.
     */
    natureza_nota_fiscal: string | string;
    descricao_objeto: string;
    valor_a_cobrar: string;
  };
  servico_adicional: {
    codigo_servico_adicional: Array<string>;
    valor_declarado: string;
    endereco_vizinho?: string;
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
  numero_comprovante_postagem: number | string;
  /**
   * @desc É obrigatório o campo ficar vazio.
   */
  valor_cobrado: number | string;
}
