const button = document.querySelector('.button-add-task' )
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []



function adicionarNovaTarefa(){
    minhaListaDeItens.push({
        tarefa:input.value,
        concluida: false
    })
    input.value = ''
    mostrarTarefas()
}
function mostrarTarefas(){

    let novaLi = ''

minhaListaDeItens.forEach((item, posicao) => {


    novaLi = novaLi + `
        <li class="task ${item.concluida &&"done"}">
            <i class="fa-solid fa-check" onclick=concluirTarefa(${posicao})></i>
                <p>${item.tarefa}</p>
            <i class="fa-solid fa-trash" onclick="deletarItem(${posicao})"></i>
        </li>
                    `
})
listaCompleta.innerHTML = novaLi   

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}
    

    function deletarItem(posicao){
        minhaListaDeItens.splice(posicao, 1)

            mostrarTarefas()
       
}
function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida
   
    mostrarTarefas()
}



function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    if(tarefasDoLocalStorage){
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    } 
    mostrarTarefas()
}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)
