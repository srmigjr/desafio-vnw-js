

// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'

 let dia = true
if (dia) {
     console.log("Claro!");
   } else {
     console.log("De noite!");
   }

//   02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()

for(let n = 0;n <= 20;n++){
    if(n%2===0){
        console.log(`numero ${n} e par`)

    }// else{
    //     console.log(`numero ${n} nao e par`)
    // }
}
// 03 - crie uma função que exiba uma mensagem no console
function mensagem(){
    console.log("carta")
}
mensagem()


// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function mostrarnome(nome){
console.log(`meu nome e ${nome}`)
}
mostrarnome("miguel")

// 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function meugosto(nome,idade,musica){
    console.log(`meu nome e ${nome}, minha idade e ${idade}, meu gosto musical e ${musica}`)
}
meugosto("miguel",32,"indie")

// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function gosto(filme,musica){
    console.log(`filme ${filme},musica ${musica}`)
}
gosto("a casa de cera","quando o segundo sol chegar")

// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(multiplicacao){
    let resultado = multiplicacao*3
    console.log(`o resultado e ${resultado}`)
}
triplo(5)
// 08 - crie uma função que  verifique se uma  variável é true ou false

function verdade(valor){
    if(valor){
        console.log("verdadeiro");}
    else{
        console.log("falso");}
}
verdade(true)

// 09 - Crie um array que receba 5 itens e exiba no console.

let array = ["casa", "caixa", "cama", "cadeira", "computador"];
 console.log(array); 

//  10 - Utilize um método para adicionar um nome ao inicio do array.

array.unshift("miguel");
 console.log(array);

//  11 - Utilize um método para remover o último nome do array

array.pop();
 console.log(array);

//  12 - Utilize um método para adicionar dois nomes ao fim do array.

array.push("Maria", "João");
 console.log(array);

 // 13 - Utilize um método para remover o primeiro nome do array.

 array.shift();
 console.log(array);

 // 14 - Utilize um método para adicionar no meio deste array.
let nome = ["João", "Maria", "Jose", "Pedro"];
nome.splice(2, 0, "miguel");
console.log(nome);

// 15 - Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
numbers.sort();
console.log(numbers);
