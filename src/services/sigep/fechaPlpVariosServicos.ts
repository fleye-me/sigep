import Api from 'services/api';
import { IError, IFechaPlpVariosServicos } from 'types';
import { js2xml } from 'xml-js';
import { IPLP } from 'services/PreListaDePostagem/plp';
import { parseXml } from 'libxmljs';
import { xml2string } from 'utils/xmlValidator';

export default async function fechaPlpVariosServicos(
  xml: IPLP,
  requestData: IFechaPlpVariosServicos
) {
  const client = await Api.clientSoap();
  const objeto_postal_length = xml.correioslog.objeto_postal.length;
  console.log('requestData', requestData);

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
  console.log('XMLValidator', XMLValidator);
  const XMLDocValid = parseXml(JS2XML);
  console.log('XMLDocValid', XMLDocValid);

  return new Promise((resolve, reject: any) => {
    if (XMLDocValid.validate(XMLValidator)) {
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
      console.log(
        '============================XMLDocValidError============================'
      );
      console.log(XMLDocValid.validationErrors);
      console.log(
        '============================XMLDocValidError============================'
      );
    }
  });
}