import {
  buscaCEP,
  buscaCliente,
  verificaDisponibilidadeServico,
  solicitaEtiquetas,
  buscaStatusCartaoPostagem,
  fechaPlpVariosServicos,
} from 'services/sigep';
import {
  ISolicitaEtiqueta,
  IVerificaServico,
  IFechaPlpVariosServicos,
} from 'types';
import { forma_pagamento, IPLP } from 'services/PreListaDePostagem/plp';

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

    const xml: IPLP = {
      correioslog: {
        tipo_arquivo: 'Postagem',
        versao_arquivo: 2.3,
        plp: {
          id_plp: '',
          valor_global: '',
          mcu_unidade_postagem: '',
          nome_unidade_postagem: '',
          cartao_postagem: '0067599079',
        },
        remetente: {
          numero_contrato: '9992157880',
          numero_diretoria: 10,
          codigo_administrativo: '17000190',
          nome_remetente: 'Empresa Teste',
          logradouro_remetente: 'Avenida Central',
          numero_remetente: '2370',
          complemento_remetente: 'Sala 1205, 12°andar',
          bairro_remetente: 'Centro',
          cep_remetente: '80002900',
          cidade_remetente: 'Curitiba',
          uf_remetente: 'PR',
          telefone_remetente: 4130795008,
          fax_remetente: '',
          email_remetente: '',
          celular_remetente: '',
        },
        forma_pagamento: forma_pagamento.Outros,
        objeto_postal: [
          {
            numero_etiqueta: 'SZ806005334BR',
            codigo_objeto_cliente: '',
            codigo_servico_postagem: '04162',
            cubagem: 0.0,
            peso: 2,
            rt1: '',
            rt2: '',
            destinatario: {
              nome_destinatario: 'Diorgeles Dias Lima',
              telefone_destinatario: '',
              celular_destinatario: '',
              email_destinatario: '',
              logradouro_destinatario: 'Av lageado',
              complemento_destinatario: '',
              numero_end_destinatario: 1360,
            },
            nacional: {
              bairro_destinatario: 'Petropolis',
              cidade_destinatario: 'Porto Alegre',
              uf_destinatario: 'RS',
              cep_destinatario: '90460110',
              codigo_usuario_postal: '',
              centro_custo_cliente: '',
              numero_nota_fiscal: '',
              serie_nota_fiscal: '',
              valor_nota_fiscal: '',
              natureza_nota_fiscal: '',
              descricao_objeto: '',
              valor_a_cobrar: '',
            },
            servico_adicional: {
              codigo_servico_adicional: ['025'],
              valor_declarado: '',
            },
            dimensao_objeto: {
              tipo_objeto: '002',
              dimensao_altura: '2',
              dimensao_largura: '11',
              dimensao_comprimento: '16',
              dimensao_diametro: '5',
            },
            data_postagem_sara: '',
            status_processamento: '0',
            numero_comprovante_postagem: '',
            valor_cobrado: '',
          },
        ],
      },
    };

    const plp: IFechaPlpVariosServicos = {
      cartaoPostagem: '0067599079',
      idPlpCliente: 123456,
      listaEtiquetas: ['SZ80600533BR'],
      usuario: 'sigep',
      senha: 'n5f9t8',
    };

    const fechaPlp = await fechaPlpVariosServicos(xml, plp);
    console.log('main -> fechaPlp', fechaPlp);
  } catch (error) {
    console.log('main -> error', error);
  }
};

main();
