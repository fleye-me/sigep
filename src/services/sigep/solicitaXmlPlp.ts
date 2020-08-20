import { IError, ISolicitaXmlPlp } from './types';
import Api from './api';

export default async function solicitaXmlPlp(
  requestData: ISolicitaXmlPlp
): Promise<string> {
  const client = await Api.clientSoap();

  return new Promise((resolve, reject: any) => {
    client.solicitaXmlPlp(requestData, (error: IError, result: any) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.return);
      }
    });
  });
}
