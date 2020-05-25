import { IError, ISolicitaXmlPlp } from 'types';
import Api from 'services/api';

export default async function SolicitaXmlPlp(
  requestData: ISolicitaXmlPlp
): Promise<string> {
  const client = await Api.clientSoap();

  return new Promise((resolve, reject: any) => {
    client.solicitaXmlPlp(requestData, (error: IError, result: any) => {
      if (error) {
        const _error = error.root.Envelope.Body.Fault.faultstring;
        reject(_error) ? error.root : error;
      } else {
        resolve(result.return);
      }
    });
  });
}
