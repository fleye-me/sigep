import {
  correiosURL,
  ICep,
  IError,
  ICliente,
  IUser,
  ISolicitaEtiqueta,
  IEtiqueta,
} from 'types';
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

  async buscaCliente(userData: IUser): Promise<ICliente> {
    const response = await this.clientSoap();
    return new Promise((resolve, reject: any) => {
      response.buscaCliente(
        userData,
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

  async solicitaEtiquetas(
    crendentials: Partial<IUser>,
    request: ISolicitaEtiqueta
  ): Promise<IEtiqueta> {
    const response = await this.clientSoap();

    const requestData = {
      ...request,
      usuario: crendentials.usuario,
      senha: crendentials.senha,
    };

    return new Promise((resolve, reject: any) => {
      response.solicitaEtiquetas(
        requestData,
        (error: any, result: { return: IEtiqueta }) => {
          if (error) {
            const _error = error.root.Envelope.Body.Fault.faultstring;
            reject(_error) ? error.root : error;
          } else {
            // geraEtiquetaComDigitoVerificador(result.return);
            //TODO: colocar o retorno em modo lista ?
            resolve(result.return);
          }
        }
      );
    });
  }
}
