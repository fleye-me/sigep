import Api from './api';
import { IError, IFechaPlpVariosServicos } from './types';
import { js2xml } from 'xml-js';
import { IPLP } from '../preListaDePostagem/plp';
import { parseXml } from 'libxmljs';
import { xml2string } from '../../utils/xmlValidator';

export default async function fechaPlpVariosServicos(
  xml: IPLP,
  requestData: IFechaPlpVariosServicos
) {
  const client = await Api.clientSoap();
  const objeto_postal_length = xml.correioslog.objeto_postal.length;

  if (objeto_postal_length > 1000) {
    return 'Só é permitido enviar 1000 encomendas por PLP';
  } else if (objeto_postal_length === 0) {
    return 'Adicione pelo menos 1 encomenda';
  }

  const JS2XML =
    '<?xml version="1.0" encoding="ISO-8859-1" ?>' +
    js2xml(xml, {
      compact: true,
      ignoreComment: true,
      spaces: 0,
    });

  const XMLValidator = parseXml(xml2string);
  const XMLDocValidator = parseXml(JS2XML);

  return new Promise((resolve, reject: any) => {
    if (XMLDocValidator.validate(XMLValidator)) {
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
    } else {
      reject(XMLDocValidator.validationErrors);
    }
  });
}
