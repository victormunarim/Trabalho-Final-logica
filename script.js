let pessoas = []
let pessoasLocalStorage = localStorage.getItem('pessoas')

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

let divTexto = (a,b) => {
return `<div class="campo-protagonistas">
<img src="${a[0]}" alt="Foto do ${a[3]}">
<p>Nome: ${a[1]}</p>
<p>Filme: ${a[2]}</p>
<p>Ator/Atriz: ${a[3]}</p>
<p>Descrição: ${a[4]}</p>
<p>Habilidades: ${a[5]}</p>
<button class="botao-excluir" onclick="excluirLista(${b})">Excluir</button>
</div>`
}

let main = document.querySelector('#lista')
if(pessoasLocalStorage){
    pessoas = JSON.parse(pessoasLocalStorage)
    for(let i=0;i<pessoas.length;i++){
        main.innerHTML += 
        divTexto(pessoas[i],i)
    }
}

main.innerHTML +=
`<div class="campo-cadastrar">
            <a class="botao-adicionar" href="index.html">+</a>
</div>`

function excluirLista(indice){
    pessoas.splice(indice,1)
    main.innerHTML = ''
    if(pessoas){
        for(let i=0;i<pessoas.length;i++){
            main.innerHTML += 
            divTexto(pessoas[i],i)
        }
    }
    localStorage.setItem('pessoas',JSON.stringify(pessoas))
    main.innerHTML +=
`<div class="campo-cadastrar">
            <a class="botao-adicionar" href="index.html">+</a>
</div>`
}