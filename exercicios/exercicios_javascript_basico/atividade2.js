// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function triangle(a, b, c) {
    if(a === b && b === c) {
        console.log("The triangle is Equilateral")
    } else if(a === b && b !== c || a === c && b !== a || b === c && c !== a) {
        console.log("The triangle is Isosceles")
    } else {
        console.log("The triangle is Scalene")
    }
}

triangle(7, 7, 7);
triangle(13, 13, 13);
triangle(7, 7, 16);
triangle(7, 16, 16);
triangle(7, 3, 16);
triangle(2, 4, 5);
