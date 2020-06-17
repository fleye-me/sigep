import { js2xml } from 'xml-js';
import { IPLP } from '../preListaDePostagem/plp';
import { parseXml } from 'libxmljs';
import { xml2string } from '../../utils/xmlValidator';
import { IObjetoPostalItem } from '../preListaDePostagem';

export default async function exportXml(
  plp: IPLP,
  objeto_postal: IObjetoPostalItem[]
) {
  const objeto_postal_length = objeto_postal.length;

  if (objeto_postal_length > 1000) {
    return 'Só é permitido enviar 1000 encomendas por PLP';
  } else if (objeto_postal_length === 0) {
    return 'Adicione pelo menos 1 encomenda';
  }

  const JS2XML =
    '<?xml version="1.0" encoding="ISO-8859-1" ?>' +
    js2xml(
      {
        correioslog: {
          ...plp,
          objeto_postal,
        },
      },
      {
        compact: true,
        ignoreComment: true,
        spaces: 0,
      }
    );

  const XMLValidator = parseXml(xml2string);
  const XMLDocValidator = parseXml(JS2XML);

  if (XMLDocValidator.validate(XMLValidator)) {
    return JS2XML;
  } else {
    return XMLDocValidator.validationErrors;
  }
}
