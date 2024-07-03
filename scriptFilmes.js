const filmesLocalStorage = localStorage.getItem('filmes')
let filmes = []

function enviarFormFilme(evento){
    evento.preventDefault()
    const formulario = document.querySelector('#filminho')
    const dadosForm = new FormData(formulario)

    const url = dadosForm.get('url')
    const titulo = dadosForm.get('nomeFilme')
    const anoLancamento = dadosForm.get('anoLançamento')
    const genero = dadosForm.get('genero')
    const duracao = dadosForm.get('duracao')
    const descricao = dadosForm.get('descricao')

    let filme = []

    filme.push(url,titulo,anoLancamento,genero,duracao,descricao)
    filmes.push(filme)

    localStorage.setItem('filmes',JSON.stringify(filmes))

}

let main = document.querySelector('#listaFilme')
if(filmesLocalStorage){
    
    filmes = JSON.parse(filmesLocalStorage)
    for(let i=0;i<filmes.length;i++){
        
    main.innerHTML +=
        `<div class="campo-filmes">
            <img src="${filmes[i][0]}" alt="Foto do ${filmes[i][3]}">
            <p>Título: ${filmes[i][1]}</p>
            <p>Ano de Lançamento: ${filmes[i][2]}</p>
            <p>Gênero: ${filmes[i][3]}</p>
            <p>Duração: ${filmes[i][4]}</p>
            <p>Sinopse: ${filmes[i][5]}</p>
            <button class="botao-excluir" onclick="excluirLista(${i})">Excluir</button>
        </div>`
    }
}

main.innerHTML +=
`<div class="campo-cadastrar">
            <a class="botao-adicionar" href="cadastro-filme.html">+</a>
</div>`

function excluirLista(indice){
    filmes.splice(indice,1)
    main.innerHTML = ''
    if(filmes){
        for(let i=0;i<filmes.length;i++){
            main.innerHTML += 
            `<div class="campo-filmes">
            <img src="${filmes[i][0]}" alt="Foto do ${filmes[i][3]}">
            <p>Título: ${filmes[i][1]}</p>
            <p>Ano de Lançamento: ${filmes[i][2]}</p>
            <p>Gênero: ${filmes[i][3]}</p>
            <p>Duração: ${filmes[i][4]}</p>
            <p>Sinopse: ${filmes[i][5]}</p>
            <button class="botao-excluir" onclick="excluirLista(${i})">Excluir</button>
        </div>`
        }
    }
    localStorage.setItem('filmes',JSON.stringify(filmes))
    main.innerHTML +=
`<div class="campo-cadastrar">
            <a class="botao-adicionar" href="cadastro-filme.html">+</a>
</div>`
}