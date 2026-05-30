const inputPesquisa = document.querySelector('#inputPesquisa')
const btnPesquisa = document.querySelector('.btnPesquisa')
let filmeLista = document.querySelector('.filmeLista')


async function carregaFilme(pesquisa) {
    const URL_API = `http://www.omdbapi.com/?s=${pesquisa}&page=1&apikey=38d482`
    const resposta = await fetch(`${URL_API}`)
    const dados = await resposta.json()
    //console.log(dados.Search)


    
    dados.Search.forEach(function(filme){
        
        const li = document.createElement('li')
        li.innerHTML = `
            <img src=" ${filme.Poster} " class='capaFilme'>
            <p class="nomeFilme">  ${filme.Title}  </p>
        `
        filmeLista.appendChild(li)
        

    });
}


function enviaPesquisa(evento) {
    if (evento.key && evento.key !== 'Enter') return

    filmeLista.innerHTML = ''

    const pesquisa = inputPesquisa.value
    carregaFilme(pesquisa)
    //console.log(pesquisa)        
    
}

carregaFilme('star')
carregaFilme('harry')


inputPesquisa.addEventListener('keydown', enviaPesquisa)
btnPesquisa.addEventListener('click', enviaPesquisa)


// 7f4c27a86c1852558407558b1b0863f9 tmdb
// 38d482 omdb
// https://www.youtube.com/watch?v=1VjdxCTBfUI
// https://www.youtube.com/watch?v=ZxZy4LhXlE0