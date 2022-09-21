let pessoas = [
  {
    altura: 1.80,
    sexo: 'M'
  },
  {
    altura: 1.75,
    sexo: 'F'
  },
  {
    altura: 1.65,
    sexo: 'F'
  },
  {
    altura: 1.55,
    sexo: 'M'
  },
  {
    altura: 1.85,
    sexo: 'F'
  },
  {
    altura: 1.87,
    sexo: 'M'
  },
  {
    altura: 1.75,
    sexo: 'M'
  },
  {
    altura: 1.90,
    sexo: 'F'
  },
  {
    altura: 1.95,
    sexo: 'M'
  },
  {
    altura: 1.65,
    sexo: 'M'
  },
  {
    altura: 1.67,
    sexo: 'F'
  },
  {
    altura: 1.95,
    sexo: 'F'
  },
  {
    altura: 1.57,
    sexo: 'F'
  },
  {
    altura: 2.05,
    sexo: 'M'
  },
  {
    altura: 1.98,
    sexo: 'F'
  }
];


const maiorMenorAltura = array => {
  let maior = 0;
  let menor = array[0].altura;

  for (let i = 0; i < array.length; i++) {
    let auxAlt = array[i];
    if (auxAlt.altura < menor) {
      menor = auxAlt.altura
    } else if (auxAlt.altura > maior) {
      maior = auxAlt.altura
    }
  };
  console.log('o maior ser humano tem a altura: ' + maior);
  console.log('o menor ser humano tem a altura: ' + menor);
};

maiorMenorAltura(pessoas)

const qtdHomens = array => {
  let qtd = 0;
  for (i = 0; i < array.length; i++) {
    var sexAux = array[i];
    if (sexAux.sexo === 'M') {
      qtd++
    }
  }
  return qtd;
};
console.log('quantidade de homens é: ' + qtdHomens(pessoas))

const mediaAltura = array => {
  let media = 0;
  let qtdSex = 0;
  let altSoma = 0;

  for (i = 0; i < array.length; i++) {
    var sexAux = array[i];
    if (sexAux.sexo === 'F') {
      qtdSex++;
      altSoma += sexAux.altura;
    }
  }
  media = altSoma / qtdSex;
  return media
};

console.log('media de altura das mulheres é: ' + mediaAltura(pessoas));
