import { ISolicitaEtiqueta, IError } from 'types';
import api from 'services/api';

export default async function solicitaEtiquetas(
  requestData: ISolicitaEtiqueta
): Promise<string[]> {
  const client = await api.clientSoap();

  return new Promise((resolve, reject: any) => {
    client.solicitaEtiquetas(
      requestData,
      (error: IError, result: { return: string }) => {
        if (error) {
          const _error = error.root.Envelope.Body.Fault.faultstring;
          reject(_error) ? error.root : error;
        } else {
          const response = result.return.split(',');
          resolve(response);
        }
      }
    );
  });
}
