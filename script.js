const inputPesquisa = document.querySelector('#inputPesquisa')
const btnPesquisa = document.querySelector('.btnPesquisa')
let filmeLista = document.querySelector('.filmeLista')

const api_key = '7f4c27a86c1852558407558b1b0863f9'

async function exibe(URL_API) {
    
    const resposta = await fetch(`${URL_API}`)
    const dados = await resposta.json()
    console.log(dados.results)

    function renderFilme(filme) {
        
        const li = document.createElement('li')
        li.innerHTML = `
            <img src=" https://image.tmdb.org/t/p/w500${filme.poster_path} " class='capaFilme'>
            <p class="nomeFilme">  ${filme.title}  </p>
        `
        filmeLista.appendChild(li)
    }
    dados.results.forEach(renderFilme)
}

async function carregaFilme() {
    const URL_API = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`  
    exibe(URL_API)
}
carregaFilme()



async function buscaFilme(pesquisa) {
    const URL_API = `https://api.themoviedb.org/3/search/movie?query=${pesquisa}&api_key=${api_key}`
    exibe(URL_API)
}

let timer
let pesquisa
function enviaPesquisa(evento) {
    clearTimeout(timer)
    
    timer = setTimeout(() => {
        filmeLista.innerHTML = ''
        pesquisa = inputPesquisa.value

        if (pesquisa == '') {
            carregaFilme()
            return
        }

        buscaFilme(pesquisa)
    }, 500);
}


inputPesquisa.addEventListener('keydown', enviaPesquisa)
btnPesquisa.addEventListener('click', enviaPesquisa)

// 7f4c27a86c1852558407558b1b0863f9 tmdb
// 38d482 omdb
// https://www.youtube.com/watch?v=1VjdxCTBfUI
// https://www.youtube.com/watch?v=ZxZy4LhXlE0