export const correiosURL = (type: string) =>
  `https://${type}.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl`;

export interface ICep {
  bairro: string;
  cep: string;
  cidade: string;
  complemento2: string;
  end: string;
  uf: string;
}

export interface ICepError {
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

//<!-- Código do serviço, será utilizado no XML da PLP -->

//<!-- ID do serviço, será utilizado no método solicitaEtiquetas() -->

interface IContrato {
  cartoesPostagem: Array<any>;
  // codigoCliente: string;
  // codigoDiretoria: string;
  // contratoPK: {
  //   diretoria: string;
  //   numero: string;
  // };
  // dataAtualizacao: Date;
  // dataAtualizacaoDDMMYYYY: string;
  // dataVigenciaFim: Date;
  // dataVigenciaFimDDMMYYYY: string;
  // dataVigenciaInicio: Date;
  // dataVigenciaInicioDDMMYYYY: string;
  // datajAtualizacao: number;
  // datajVigenciaFim: number;
  // datajVigenciaInicio: number;
  // descricaoDiretoriaRegional: string;
  // horajAtualizacao: number;
  // statusCodigo: string;
}

export interface ICliente {
  cnpj: string;
  contratos: Array<IContrato>;
  // dataAtualizacao: Date;
  // datajAtualizacao: number;
  // descricaoStatusCliente: string;
  // horajAtualizacao: string;
  // id: string;
  // inscricaoEstadual: string;
  // nome: string;
  // statusCodigo: string;
}

export interface IUser {
  idContrato: string;
  idCartaoPostagem: string;
  usuario: string;
  senha: string;
}
