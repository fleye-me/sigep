import { correiosURL, ICep, IError, ICliente, IUser } from 'types';
import { createClientAsync } from 'soap';
import { geraEtiquetaComDigitoVerificador } from 'utils';

export default class SigepClient {
  constructor(private env: string) {}

  private clientSoap = async () => {
    const url = correiosURL(this.env === 'prod' ? 'apps' : 'apphom');
    return await createClientAsync(url);
  };

  async buscaCep(cep: string): Promise<ICep> {
    const response = await this.clientSoap();

    return new Promise((resolve, reject: any) => {
      response.consultaCEP(
        { cep },
        (error: IError, result: { return: ICep }) => {
          if (error) {
            const _error = error.root.Envelope.Body.Fault.faultstring;
            reject(_error) ? error.root : error;
          } else {
            resolve(result.return);
          }
        }
      );
    });
  }

  async buscaCliente(data: IUser): Promise<ICliente> {
    const response = await this.clientSoap();
    return new Promise((resolve, reject: any) => {
      response.buscaCliente(
        data,
        (error: IError, result: { return: ICliente }) => {
          if (error) {
            const _error = error.root.Envelope.Body.Fault.faultstring;
            reject(_error) ? error.root : error;
          } else {
            resolve(result.return);
          }
        }
      );
    });
  }

  async solicitaEtiquetas() {
    const response = await this.clientSoap();
    const credentials = {
      usuario: 'sigep',
      senha: 'n5f9t8',
    };

    // if (newCredentials) {
    //   credentials.usuario = newCredentials.usuario;
    //   credentials.senha = newCredentials.senha;
    // }

    const requestData = {
      tipoDestinatario: 'C',
      identificador: 34028316000103,
      idServico: '124849',
      qtdEtiquetas: 1,
      usuario: credentials.usuario,
      senha: credentials.senha,
    };
    response.solicitaEtiquetas(requestData, (error: any, result: any) => {
      if (error) {
        console.log('getEtiquetas -> error', error.root);
      } else {
        console.log('getEtiquetas -> result', result.return);
        const tags = result.return.split(',');
        console.log('getEtiquetas -> tags', tags);
        geraEtiquetaComDigitoVerificador(result.return);
      }
    });
  }
}
