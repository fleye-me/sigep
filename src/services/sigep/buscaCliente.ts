import { IError, IUser, ICliente } from 'types';
import Api from 'services/api';

export default async function buscaCliente(userData: IUser): Promise<ICliente> {
  const client = await Api.clientSoap();

  return new Promise((resolve, reject: any) => {
    client.buscaCliente(
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
