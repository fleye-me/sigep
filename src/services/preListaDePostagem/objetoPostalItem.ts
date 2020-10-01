export interface IObjetoPostalItem {
  numero_etiqueta: { _cdata: string } | string;
  /**
   * @desc É obrigatório o campo ficar vazio.
   */
  codigo_objeto_cliente: { _cdata: string } | string;
  codigo_servico_postagem: { _cdata: string } | string;
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
  rt2: string;
  restricao_anac?: { _cdata: string } | string;
  destinatario: {
    nome_destinatario: { _cdata: string } | string;
    telefone_destinatario: { _cdata: string } | string;
    celular_destinatario: { _cdata: string } | string;
    email_destinatario: { _cdata: string } | string;
    logradouro_destinatario: { _cdata: string } | string;
    complemento_destinatario: { _cdata: string } | string;
    numero_end_destinatario: { _cdata: string } | number;
    cpf_cnpj_destinatario?: { _cdata: string } | string;
  };
  nacional: {
    bairro_destinatario: { _cdata: string } | string;
    cidade_destinatario: { _cdata: string } | string;
    uf_destinatario: { _cdata: string } | string;
    cep_destinatario: { _cdata: string } | string;
    codigo_usuario_postal: { _cdata: string } | string;
    centro_custo_cliente: { _cdata: string } | string;
    numero_nota_fiscal: { _cdata: string } | string;
    serie_nota_fiscal: { _cdata: string } | string;
    valor_nota_fiscal: { _cdata: string } | string;
    /**
     * @desc É obrigatório o campo ficar vazio.
     */
    natureza_nota_fiscal: { _cdata: string } | string;
    descricao_objeto: { _cdata: string } | string;
    valor_a_cobrar: { _cdata: string } | string;
  };
  servico_adicional: {
    //TODO: Criar interface a parte pois não é passado em um array e sim na repetição de tag
    codigo_servico_adicional: { _cdata: string } | string;
    valor_declarado?: { _cdata: string } | string;
    endereco_vizinho?: { _cdata: string } | string;
  };
  dimensao_objeto: {
    /**
     * @desc Para 001 (Envelope) – Não prencher as tags de dimensões
     * @desc Para 002 (Pacote / Caixa) – Preencher as tags: altura, largura e comprimento
     * @desc Para 003 (Rolo / Cilindro / Esférico) – Preencher as tags: comprimento e diâmetro
     */
    tipo_objeto: { _cdata: string } | string;

    /**
     * @desc Para 001 (Envelope) – preencher com “0”
     * @desc Para 002 (Pacote / Caixa) – obrigatório
     * @desc Para 003 (Rolo / Cilindro / Esférico) – preencher com “0”
     */
    dimensao_altura: { _cdata: string } | string;
    dimensao_largura: { _cdata: string } | string;
    /**
     * @desc Para 001 (Envelope) – preencher com “0”
     * @desc Para 002 (Pacote / Caixa) – obrigatório
     * @desc Para 003 (Rolo / Cilindro / Esférico) – obrigatório
     */
    dimensao_comprimento: { _cdata: string } | string;
    /**
     * @desc Para 001 (Envelope) – preencher com “0”
     * @desc Para 002 (Pacote / Caixa) – preencher com “0”
     * @desc Para 003 (Rolo / Cilindro / Esférico) – obrigatório
     */
    dimensao_diametro: { _cdata: string } | string;
  };
  /**
   * @desc É obrigatório o campo ficar vazio.
   */
  data_postagem_sara?: { _cdata: string } | string;
  status_processamento?: { _cdata: string } | string;
  /**
   * @desc É obrigatório o campo ficar vazio.
   */
  numero_comprovante_postagem?: { _cdata: string } | string;
  /**
   * @desc É obrigatório o campo ficar vazio.
   */
  valor_cobrado?: { _cdata: string } | string;
}
