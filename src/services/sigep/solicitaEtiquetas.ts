import { ISolicitaEtiqueta, IError } from './types';
import Api from './api';

export default async function solicitaEtiquetas(
  requestData: ISolicitaEtiqueta
): Promise<string[]> {
  const client = await Api.clientSoap();

  return new Promise((resolve, reject: any) => {
    client.solicitaEtiquetas(
      requestData,
      (error: IError, result: { return: string }) => {
        if (error) {
          reject(error);
        } else {
          const response = result.return.split(',');
          resolve(response);
        }
      }
    );
  });
}
