import { IBuscaStatusCartaoPostagem, IError } from './types';
import Api from './api';

export default async function buscaStatusCartaoPostagem(
  requestData: IBuscaStatusCartaoPostagem
): Promise<string> {
  const client = await Api.clientSoap();

  return new Promise((resolve, reject: any) => {
    client.getStatusCartaoPostagem(
      requestData,
      (error: IError, result: { return: string }) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.return);
        }
      }
    );
  });
}
