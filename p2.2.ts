function maiorR(array: number []): number {
    if (array.length === 1){
        return array[0];
    }


    const maiorRestante = maiorR(array.slice(1));

    if (array[0] >= maiorRestante) {
        return array[0]; 
    } else {
        return maiorRestante;
    }
}

const array = [3, -10, 7, -8, 4];
const resultado = maiorR(array);
console.log(`O maior elemento é: ${resultado}`);



