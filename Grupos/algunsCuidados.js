const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABCabc!';

console.log(texto.match(/[(abc)]/gi));// Não é um grupo
console.log(texto.match(/([abc])/gi));
console.log(texto.match(/(abc)/gi));// Não utilizar grupo onde não é necessário