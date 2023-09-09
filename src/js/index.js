const listaSelecionarPokemon = document.querySelectorAll('.pokemon');
const cardsPokemon = document.querySelectorAll('.cartao-pokemon');

listaSelecionarPokemon.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado

        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const removePokemonAtivoDalistagem = document.querySelector('.ativo')
        removePokemonAtivoDalistagem.classList.remove('ativo')

        const addPokemonAtivoNalistagem = document.getElementById(idPokemonSelecionado)
        addPokemonAtivoNalistagem.classList.add('ativo')
    })
})

