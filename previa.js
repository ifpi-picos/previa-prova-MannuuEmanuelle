
export let lista = [1, 3, 5, 7, 2]

export function maiorNumero(lista) {
    if (lista.length === 0) {
        console.log('Lista inválida!')
    } else {
        lista.Math.max(...lista)
    }
}

// export function verificarParOuImpar(numero){
//     if (numero % 2 === 0){
//         console.log('Par')
//     } else {
//         console.log('Ímpar')
//     }
// }


// let contador = 0

// export function contarCaracter(palavra){
//     let percorrerLista = 0

//     while (percorrerLista < palavra.length){
//         if(palavra[percorrerLista] === 'a' || palavra[percorrerLista] === 'A'){
//             contador = 1
//             percorrerLista++
//         }        
//     }
//     console.log(contador)
// }

// for (let i = 0; i < palavra.length; i++){
//     if (i === 'a' || i === 'A'){
//         contador = 1
//     }
// }

// contarCaracter('casa')
maiorNumero()