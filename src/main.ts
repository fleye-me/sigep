import SigepClient from 'sigep';

const main = async () => {
  const sigep = new SigepClient('apphom');
  try {
    const response = await sigep.buscaCep('90460110');
    console.log('main -> response', response);
    // const response = await sigep.buscaCliente({
    //   idContrato: '9992157880',
    //   idCartaoPostagem: '0067599079',
    //   usuario: 'sigep',
    //   senha: 'n5f9t8',
    // });
    // console.log('main -> response', response.contratos[0].cartoesPostagem);
  } catch (error) {
    console.log('main -> error', error);
  }
  // sigep.solicitaEtiquetas();
};

main();
