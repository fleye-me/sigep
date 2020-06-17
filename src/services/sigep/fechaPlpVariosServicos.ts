import Api from './api';
import { IError, IFechaPlpVariosServicos } from './types';
import { js2xml } from 'xml-js';
import { IPLP } from '../preListaDePostagem/plp';
import { parseXml } from 'libxmljs';
import { xml2string } from '../../utils/xmlValidator';
import { IObjetoPostalItem } from '../preListaDePostagem';
import exportXml from './exportXml';

export default async function fechaPlpVariosServicos(
  plp: IPLP,
  objeto_postal: IObjetoPostalItem[],
  requestData: IFechaPlpVariosServicos
) {
  const client = await Api.clientSoap();

  const JS2XML = exportXml(plp, objeto_postal);

  return new Promise((resolve, reject: any) => {
    client.fechaPlpVariosServicos(
      { xml: JS2XML, ...requestData },
      (error: IError, result: { return: string }) => {
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
