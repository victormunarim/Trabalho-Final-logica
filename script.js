let pessoas = []

function enviarForm(evento){
    evento.preventDefault()
    const formulario = document.querySelector('form')
    const dadosForm = new FormData(formulario)

    const url = dadosForm.get('url')
    const nome = dadosForm.get('nome')
    const filme = dadosForm.get('filme')
    const ator = dadosForm.get('ator')
    const descricao = dadosForm.get('descricao')
    const habilidades = dadosForm.get('habilidades')

    let pessoa = []
    pessoa = []

    pessoa.push(url,nome,filme,ator,descricao,habilidades)
    pessoas.push(pessoa)

    localStorage.setItem('pessoas',JSON.stringify(pessoas))

}

let main = document.querySelector('#lista')
const pessoasLocalStorage = localStorage.getItem('pessoas')
if(pessoasLocalStorage){
    pessoas = JSON.parse(pessoasLocalStorage)
    for(let i=0;i<pessoas.length;i++){
        
        main.innerHTML += 
        `<div class="campo-protagonistas">
            <img src="${pessoas[i][0]}" alt="Foto do ${pessoas[i][3]}">
            <p>Nome: ${pessoas[i][1]}</p>
            <p>Filme: ${pessoas[i][2]}</p>
            <p>Ator/Atriz: ${pessoas[i][3]}</p>
            <p>Descrição: ${pessoas[i][4]}</p>
            <p>Habilidades: ${pessoas[i][5]}</p>
        </div>`
    }
}

main.innerHTML +=
`<div class="campo-cadastrar">
            <a class="botao-adicionar" href="cadastro-protagonista.html">+</a>
        </div>`