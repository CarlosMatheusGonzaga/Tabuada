
function clicar() {
    
    

var início = document.querySelector('input#passosinicio')
var lista = document.getElementById('meuSelect')

var número = Number(início.value) 

    lista.innerHTML = '' // Para que os resultados (options) que aparecem na lista sejam limpados toda vez que o botão for clicado


    lista.innerHTML = '';



    if (número == 0) {
        alert('Por favor, insira um valor válido')

    }

    else {

for (var i = 1; i <= 10; i++) {

    var option = document.createElement('option')        // É como se aqui eu estivesse criando um elemento no HTML "option)"
    option.innerHTML = `${número} x ${i} = ${número * i}`    
    lista.appendChild(option) // É como se aqui eu estivesse inserindo este elemento "option" dentro da minha lista, que no HTML seria "meuSelect")"

}

}




}

/*
var número = 1


for (início1; início1 <= início1 * 10; início = número + 1 * início1) {
console.log()
    


} */
