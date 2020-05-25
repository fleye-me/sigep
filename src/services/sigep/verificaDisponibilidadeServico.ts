import { IVerificaServico, IError } from 'types';
import Api from 'services/api';

export default async function verificaDisponibilidadeServico(
  requestData: IVerificaServico
): Promise<string> {
  const client = await Api.clientSoap();

  return new Promise((resolve, reject: any) => {
    client.verificaDisponibilidadeServico(
      requestData,
      (error: IError, result: any) => {
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
