import { IError, ICep } from './types';
import Api from './api';

export default async function buscaCEP(cep: string): Promise<ICep> {
  const client = await Api.clientSoap();

  return new Promise((resolve, reject: any) => {
    client.consultaCEP({ cep }, (error: IError, result: { return: ICep }) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.return);
      }
    });
  });
}
