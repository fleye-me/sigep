import SigepClient from 'sigep';

const main = async () => {
  const sigep = new SigepClient('apphom');
  try {
    const cep = await sigep.buscaCep('90460110');
    console.log('main -> cep', cep);

    const cliente = await sigep.buscaCliente({
      idContrato: '9992157880',
      idCartaoPostagem: '0067599079',
      usuario: 'sigep',
      senha: 'n5f9t8',
    });
    console.log('main -> cliente', cliente.contratos[0].cartoesPostagem);

    const SolicitaEtiquetaData = {
      tipoDestinatario: 'C',
      identificador: 34028316000103,
      idServico: '124849',
      qtdEtiquetas: 1,
    };

    const etiquetas = await sigep.solicitaEtiquetas(
      { usuario: 'sigep', senha: 'n5f9t8' },
      SolicitaEtiquetaData
    );
    console.log('main -> etiquetas', etiquetas);
  } catch (error) {
    console.log('main -> error', error);
  }
};

main();
