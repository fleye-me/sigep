import { correiosURL } from 'types';
import { createClientAsync } from 'soap';

export default class Api {
  static async clientSoap() {
    const url = correiosURL('apphom');
    return await createClientAsync(url);
  }
}
