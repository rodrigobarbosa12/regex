const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const texto2 = 'There is a big fog in NYC';

/**
 * ? -> zero ou um (opcional)
 * A letra ao lado de '?' (neste caso a letra 'o') é o caractere que será opcional
*/
const regex = /fogo?/gi;
console.log(texto1.match(regex));
console.log(texto2.match(regex));
