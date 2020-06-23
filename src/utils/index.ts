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

export function etiquetasRangeComDigito(etiquetas: Array<string>) {
  const tags = etiquetas;
  const inicial = parseInt(tags[0].substring(2, 10));
  const final = parseInt(tags[1].substring(2, 10));
  const prefix = tags[0].substring(0, 2);
  const sufix = tags[0].substring(10).trim();

  const returnTags = [];
  for (let i = inicial; i <= final; i++) {
    returnTags.push(digitoVerificador(`${prefix}${i} ${sufix}`));
  }
  return returnTags;
}
