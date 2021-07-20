import { digitoVerificador } from './digitoVerificador';

/**
 * @desc Na montagem do PLP no campo <numero_etiqueta> é necessário o envio das
 * etiquetas com o Digito
 */
export function etiquetasComDigito(etiquetas: Array<string>) {
  return etiquetas.map((etiqueta) => digitoVerificador(etiqueta));
}

/**
 * @desc Na montagem do PLP no campo <listaEtiquetas> é necessário o envio das
 * etiquetas sem DIGITO e sem ESPAÇO
 */
export function etiquetasSemEspaco(etiquetas: Array<string>) {
  return etiquetas.map((etiqueta) => etiqueta.replace(' ', ''));
}

/**@desc Função que retorna todas as etiquetas de acordo com o range passado.
 * Na montagem do PLP no campo <numero_etiqueta> é necessário o envio das
 * etiquetas com o Digito
 */
export function etiquetasRangeComDigito(etiquetas: Array<string>) {
  return etiquetasRange(etiquetas, true);
}

/**@desc Função que retorna todas as etiquetas de acordo com o range passado.
 * Na montagem do PLP no campo <listaEtiquetas> é necessário o envio das
 * etiquetas sem DIGITO e sem ESPAÇO
 */
export function etiquetasRangeSemEspaco(etiquetas: Array<string>) {
  return etiquetasRange(etiquetas, false);
}

const etiquetasRange = (etiquetas: Array<string>, isDigit: boolean) => {
  const inicio = parseInt(etiquetas[0].substring(2, 10));
  const fim = parseInt(etiquetas[1].substring(2, 10));
  const prefix = etiquetas[0].substring(0, 2);
  const sufix = etiquetas[0].substring(10).trim();

  const etiquetasList = [];
  if (isDigit) {
    for (let etiqueta = inicio; etiqueta <= fim; etiqueta++) {
      etiquetasList.push(digitoVerificador(`${prefix}${etiqueta.toString().padStart(8, '0')} ${sufix}`));
    }
  } else {
    for (let etiqueta = inicio; etiqueta <= fim; etiqueta++) {
      etiquetasList.push(`${prefix}${etiqueta.toString().padStart(8, '0')}${sufix}`);
    }
  }
  return etiquetasList;
};
