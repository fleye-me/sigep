export const digitoVerificador = (numeroEtiqueta: string) => {
  let prefixo = numeroEtiqueta.substring(0, 2);
  let numero = numeroEtiqueta.substring(2, 10);
  let sufixo = numeroEtiqueta.substring(10).trim();
  let retorno = numero;
  let dv;
  let multiplicadores = [8, 6, 4, 2, 3, 5, 9, 7];
  let soma = 0;

  // Preenche número com 0 à esquerda
  if (numeroEtiqueta.length < 12) {
    retorno = 'Erro, etiqueta inválida';
  } else if (numero.length < 8 && numeroEtiqueta.length == 12) {
    let zeros = '';
    let diferenca = 8 - numero.length;
    for (let i = 0; i < diferenca; i++) {
      zeros += '0';
    }
    retorno = zeros + numero;
  } else {
    retorno = numero.substring(0, 8);
  }

  for (let i = 0; i < 8; i++) {
    soma += parseInt(retorno.substring(i, i + 1)) * multiplicadores[i];
  }

  let resto = soma % 11;
  if (resto == 0) {
    dv = '5';
  } else if (resto == 1) {
    dv = '0';
  } else {
    dv = String(11 - resto);
  }
  retorno += dv;
  retorno = prefixo + retorno + sufixo;

  return retorno;
};
