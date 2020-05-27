# Lib de integração com o Sigep - Gerenciador de Postagens dos Correios

Biblioteca criada com o intuito de facilitar a integração com o SIGEP

### Instalação (npm ou yarn)

```
yarn add @sthima/sigep
```

```
npm i @sthima/sigep
```

## Funções disponíveis

- Busca CEP
- Busca Cliente
- Verifica disponibilidade de servico de entrega
- Solicita etiquetas
- Busca status de cartão postagem
- Fecha PLP com varios serviços
- Solicita Xml PLP
- Etiquetas com Digito
- Etiquetas sem Espaço

## Funcionamento

- As funções podem ser chamadas com async/await caso queiram.
- O Correios dispoe de duas URL sendo elas, homologação e produção, para usar a lib em modo homologação basta colocar uma env `APPHOM` no projeto.

Exemplo de um arquivo package.json

```
"scripts": {
    "start": "env APPHOM=true ..."
}
```

Exemplo de um arquivo .env

```
...
APPHOM=true
...
```

#### Busca CEP

```
import { Sigep } from "@sthima/sigep";

Sigep.buscaCEP('45602520').then(cep => console.log(cep));
```

#### Busca Cliente

```
import { Sigep } from "@sthima/sigep";

// Dados fake que vem na documentação do correios
const clienteObject = {
  idContrato: "9992157880",
  idCartaoPostagem: "0067599079",
  usuario: "sigep",
  senha: "n5f9t8",
};

Sigep.buscaCliente(clienteObject).then((cliente) => console.log(cliente));
```

#### Verifica disponibilidade de servico de entrega

```
// Para facilitar a criação do objeto tem disponivel a interface dele
import { Sigep, IVerificaServico } from "@sthima/sigep";

// Dados fake que vem na documentação do correios
const verificaObject: IVerificaServico = {
  codAdministrativo: "17000190",
  numeroServico: TipoDePostagem.Pac["41068"].numeroServico,
  cepOrigem: "05311900",
  cepDestino: "05311900",
  usuario: "sigep",
  senha: "n5f9t8",
};

Sigep.verificaDisponibilidadeServico(verificaObject).then((verifica) =>
  console.log(verifica)
);
```

#### Solicitar etiquetas

```
// Para facilitar a criação do objeto tem disponivel a interface dele
import { Sigep, ISolicitaEtiqueta } from "@sthima/sigep";

// Dados fake que vem na documentação do correios
const solicita: ISolicitaEtiqueta = {
  idServico: "124849",
  identificador: 34028316000103,
  qtdEtiquetas: 1,
  tipoDestinatario: "C",
  usuario: "sigep",
  senha: "n5f9t8",
};

Sigep.solicitaEtiquetas(solicita).then(solicitacao => console.log(solicitacao));
```

#### Busca status de cartão postagem

```
import { Sigep } from "@sthima/sigep";

// Dados fake que vem na documentação do correios
const buscaCardObject = {
  numeroCartaoPostagem: "0067599079",
  usuario: "sigep",
  senha: "n5f9t8",
};

Sigep.buscaStatusCartaoPostagem(buscaCardObject).then((buscaCard) =>
  console.log(buscaCard)
);
```

#### Fecha PLP com varios serviços

```
// Para facilitar a criação do objeto tem disponivel a interface dele
import { Sigep, IPLP } from "@sthima/sigep";

// A interface vai auxiliar na montagem do objeto, mas recomendo ler a documentação do
// correios para que tenha um entendimento melhor da funcionalidade
const xml: IPLP = {}

// Dados fake que vem na documentação do correios
const plp: IFechaPlpVariosServicos = {
  cartaoPostagem: "0067599079",
  idPlpCliente: 123456,
  listaEtiquetas: ["SZ82702873BR"],
  usuario: "sigep",
  senha: "n5f9t8",
};

Sigep.fechaPlpVariosServicos(xml, plp).then((fechaPlp) =>
  console.log(fechaPlp)
);
```

#### Solicita Xml PLP

```
// Para facilitar a criação do objeto tem disponivel a interface dele
import { Sigep, ISolicitaXmlPlp } from "@sthima/sigep";

// Dados fake que vem na documentação do correios
const xmlplp: ISolicitaXmlPlp = {
  idPlpMaster: 50517263, //Id da PLP gerada na função anterior
  usuario: "sigep",
  senha: "n5f9t8",
};

Sigep.solicitaXmlPlp(xmlplp).then((solicitaXMLPLP) =>
  console.log(solicitaXMLPLP)
);
```

#### Etiquetas com Digito verificador (função auxiliar)

```
import { etiquetasComDigito } from "@sthima/sigep";

// Na montagem do PLP no campo <numero_etiqueta> é necessário colocar o numero das etiquetas com o Dígito
const responseEtiquetasComDigito = etiquetasComDigito([
  "SZ82702873 BR",
  "SZ82702873 BR",
  "SZ82702873 BR",
  "SZ82702873 BR",
  "SZ82702873 BR",
]);
console.log(responseEtiquetasComDigito);
```

#### Etiquetas sem Espaço (função auxiliar)

```
import { etiquetasSemEspaco } from "@sthima/sigep";

// Na montagem do PLP no campo <listaEtiquetas> é necessário colocar o número das etiquetas sem DIGITO e sem ESPAÇO
const responseEtiquetasComDigito = etiquetasSemEspaco([
  "SZ82702873 BR",
  "SZ82702873 BR",
  "SZ82702873 BR",
  "SZ82702873 BR",
  "SZ82702873 BR",
]);
console.log(responseEtiquetasComDigito);
```
