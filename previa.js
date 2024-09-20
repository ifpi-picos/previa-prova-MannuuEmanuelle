
export let lista = [1, 3, 5, 7, 2]

export function maiorNumero(lista) {
    if (!Array.isArray(lista) || lista.length === 0) {
        return null
    } else {
        return Math.max(...lista)
    }
}

export function verificarParOuImpar(numero) {
    if (isNaN(numero)) {
        return null
    }
    if (numero % 2 === 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
} 




export function contarCaracter(palavra, letra){

    if (isNaN(palavra) && isNaN(letra)){
        let contador = 0
        let percorrerLista = 0

        let palavraMinuscula = palavra.toLowerCase()
        let letraMinuscula = letra.toLowerCase()

        while (percorrerLista <= palavra.length){
            if(palavraMinuscula[percorrerLista] === letraMinuscula){
                contador += 1
                
            }  
            percorrerLista++      
        }
        return contador
    } else {
        return null
    }
    
}



export function atualizarPropriedade(objeto, palavra, valor){
    if (objeto[palavra] != null){
        objeto[palavra] = valor
        return objeto
    } else {
        return null
    }
}