const imageIndex = (width, id) => {
    const pokeNum = (new Array(width).join('0') + id).substr(-width);
    return pokeNum;
}

export const fetchPokemonCard = async (searchItem) => {
    let loadPokemon = [];
    let url = "";
    const width = 3;
    
    

    if((typeof searchItem) === "number")
    {
        url = `https://pokeapi.co/api/v2/pokemon-species?offset=${searchItem}&limit=50`;
        const res = await fetch(url);
        const json = await res.json();
        loadPokemon = json.results.map((data, index) => {
        const id = searchItem + index + 1;
        
        return {
            name: data.name,
            id: id,
            image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageIndex(width, id)}.png`
        }
        })
    }
        
    else if((typeof searchItem) === "string")
    {
        url = `https://pokeapi.co/api/v2/pokemon/${searchItem}`;
        const res = await fetch(url);
        const json = await res.json();
        
        return {
            name: json.name,
            id: json.id,
            image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageIndex(width, json.id)}.png`
        }
    }
        
    return loadPokemon
}

export const fetchPokemonStats = async (id) => {
    const stats_url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const stats_response = await fetch(stats_url);
    const stats_json = await stats_response.json();
    
    return {
        types: [...stats_json.types],
        stats: [...stats_json.stats]
    };
}

export const fetchPokemonCount = async() => {
    const url = "https://pokeapi.co/api/v2/pokemon-species/"
    const res = await fetch(url)
    const json = await res.json();

    return json.count
}