const texto = 'supermercado hipermercado minimercado mercado';

console.log(texto.match(/(super|hiper|mini)?mercado/g));
console.log(texto.match(/((su|hi)per|mini)?mercado/g));