import { IVerificaServico, IError } from './types';
import Api from './api';

export default async function verificaDisponibilidadeServico(
  requestData: IVerificaServico
): Promise<string> {
  const client = await Api.clientSoap();

  return new Promise((resolve, reject: any) => {
    client.verificaDisponibilidadeServico(
      requestData,
      (error: IError, result: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.return);
        }
      }
    );
  });
}
