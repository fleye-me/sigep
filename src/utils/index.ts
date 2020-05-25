import { digitoVerificador } from './digitoVerificador';

/**
 * @desc Na montagem do PLP no campo <numero_etiqueta> é necessário o envio das
 * etiquetas com o Digito
 */
export function EtiquetasComDigito(etiquetas: Array<string>) {
  return etiquetas.map((etiqueta) => digitoVerificador(etiqueta));
}

/**
 * @desc Na montagem do PLP no campo <listaEtiquetas> é necessário o envio das
 * etiquetas sem DIGITO e sem ESPAÇO
 */
export function EtiquetasSemEspaco(etiquetas: Array<string>) {
  return etiquetas.map((etiqueta) => etiqueta.replace(' ', ''));
}
