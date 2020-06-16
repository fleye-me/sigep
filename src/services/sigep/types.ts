export interface ICep {
  bairro: string;
  cep: string;
  cidade: string;
  complemento2: string;
  end: string;
  uf: string;
}

export interface IError {
  root: {
    Envelope: {
      Body: {
        Fault: {
          faultcode: string;
          faultstring: string;
          detail: { SigepClienteException: string };
        };
      };
    };
  };
}

interface ICartaoPostagem {
  codigoAdministrativo: string;
  servicos: any;
  //TODO: Mapear resto dos campos
}

interface IContrato {
  cartoesPostagem: Array<ICartaoPostagem>;
  //TODO: Mapear resto dos campos
}

export interface ICliente {
  cnpj: string;
  contratos: Array<IContrato>;
  //TODO: Mapear resto dos campos
}

export interface IUser {
  idContrato: string;
  idCartaoPostagem: string;
  usuario: string;
  senha: string;
}

export interface ISolicitaEtiqueta {
  tipoDestinatario: string;
  identificador: number;
  idServico: string;
  qtdEtiquetas: number;
  usuario: string;
  senha: string;
}

export interface IVerificaServico {
  codAdministrativo: string;
  numeroServico: string;
  cepOrigem: string;
  cepDestino: string;
  usuario: string;
  senha: string;
}

export interface IBuscaStatusCartaoPostagem {
  numeroCartaoPostagem: string;
  usuario: string;
  senha: string;
}

export interface IFechaPlpVariosServicos {
  idPlpCliente: number;
  cartaoPostagem: string;
  listaEtiquetas: Array<string>;
  usuario: string;
  senha: string;
}
export interface ISolicitaXmlPlp {
  idPlpMaster: number;
  usuario: string;
  senha: string;
}
