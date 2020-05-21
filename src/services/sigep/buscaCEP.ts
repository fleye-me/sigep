import { IError, ICep } from 'types';
import api from 'services/api';

export default async function buscaCEP(cep: string): Promise<ICep> {
  const client = await api.clientSoap();

  return new Promise((resolve, reject: any) => {
    client.consultaCEP({ cep }, (error: IError, result: { return: ICep }) => {
      if (error) {
        const _error = error.root.Envelope.Body.Fault.faultstring;
        reject(_error) ? error.root : error;
      } else {
        resolve(result.return);
      }
    });
  });
}
