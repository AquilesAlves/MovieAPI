const inputPesquisa = document.querySelector('#inputPesquisa')
let filmeLista = document.querySelector('.filmeLista')

const api_key = '7f4c27a86c1852558407558b1b0863f9'

async function exibe(URL_API) {
    
    const resposta = await fetch(`${URL_API}`)
    const dados = await resposta.json()
    console.log(dados.results)
    
    if (dados.results.length === 0) {
        filmeLista.innerHTML = '<h3 class="vazio">Nenhum filme encontrado :( </h3>'
        return
    }
    function renderFilme(filme) {
        
        if (!filme.poster_path) return
        const li = document.createElement('li')
        li.innerHTML = `
            <img src=" https://image.tmdb.org/t/p/w500${filme.poster_path} " class='capaFilme'>
            <div class="infos">
                <p class="nomeFilme">  ${filme.title}  </p>
                <p class="avaliacao">${estrelas(filme.vote_average)}</p>
                <p class="descricao">${filme.overview}</p>
            </div>
        `

        
        filmeLista.appendChild(li)
    }
    dados.results.forEach(renderFilme)
}

function estrelas(vote_average) {
    let nota = Math.round(vote_average/2)

    let resultado = ''
    for (let i = 1; i <= 5; i++) {
        if (i <= nota) {
            resultado += '★'
        } else {
            resultado += '☆'
        }
    }
    return resultado
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

// 7f4c27a86c1852558407558b1b0863f9 tmdb
// 38d482 omdb
// https://www.youtube.com/watch?v=1VjdxCTBfUI
// https://www.youtube.com/watch?v=ZxZy4LhXlE0