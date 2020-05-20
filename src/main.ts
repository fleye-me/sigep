import {
  buscaCEP,
  buscaCliente,
  verificaDisponibilidadeServico,
  solicitaEtiquetas,
  buscaStatusCartaoPostagem,
} from 'services/sigep';
import { ISolicitaEtiqueta, IVerificaServico } from 'types';

const main = async () => {
  try {
    const CEP = await buscaCEP('45602520');
    console.log('main -> CEP', CEP);

    const clienteObject = {
      idContrato: '9992157880',
      idCartaoPostagem: '0067599079',
      usuario: 'sigep',
      senha: 'n5f9t8',
    };
    const CLIENTE = await buscaCliente(clienteObject);
    console.log('main -> CLIENTE', CLIENTE);

    const verificaObject: IVerificaServico = {
      codAdministrativo: '17000190',
      numeroServico: '04162',
      cepOrigem: '05311900',
      cepDestino: '05311900',
      usuario: 'sigep',
      senha: 'n5f9t8',
    };
    const verifica = await verificaDisponibilidadeServico(verificaObject);
    console.log('main -> verifica', verifica);

    const solicita: ISolicitaEtiqueta = {
      idServico: '124849',
      identificador: 34028316000103,
      qtdEtiquetas: 1,
      tipoDestinatario: 'C',
      usuario: 'sigep',
      senha: 'n5f9t8',
    };

    const solicitacoes = await solicitaEtiquetas(solicita);
    console.log('main -> solicitacoes', solicitacoes);

    const buscaCardObject = {
      numeroCartaoPostagem: '0067599079',
      usuario: 'sigep',
      senha: 'n5f9t8',
    };
    const buscaCard = await buscaStatusCartaoPostagem(buscaCardObject);
    console.log('main -> buscaCard', buscaCard);
  } catch (error) {
    console.log('main -> error', error);
  }
};

main();
