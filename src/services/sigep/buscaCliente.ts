import { IError, IUser, ICliente } from './types';
import Api from './api';

export default async function buscaCliente(userData: IUser): Promise<ICliente> {
  const client = await Api.clientSoap();

  return new Promise((resolve, reject: any) => {
    client.buscaCliente(
      userData,
      (error: IError, result: { return: ICliente }) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.return);
        }
      }
    );
  });
}
