

async function carregaFilme(pesquisa) {
    const URL_API = `http://www.omdbapi.com/?s=${pesquisa}&page=1&apikey=`
    const resposta = await fetch(`${URL_API}`)
    const dados = await resposta.json()
    console.log(dados.Search)
}

carregaFilme('harry potter')

// 38d482
// https://www.youtube.com/watch?v=1VjdxCTBfUI
// https://www.youtube.com/watch?v=ZxZy4LhXlE0