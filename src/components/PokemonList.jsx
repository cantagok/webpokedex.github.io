
import { Container, Grid, CircularProgress, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard.jsx";
import { fetchPokemonCard } from "../fetch/fetch.js";
import FadeIn from './FadeIn.jsx';
import { Box } from "@mui/system";


const PokemonList = (props) => {
    const [data, setData] = useState([]);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        fetchPokemonCard(props.searchItem).then(setData)
    }, [props.searchItem])

    useEffect(() => {     
        setFade(false)
        let timeout = setInterval(() => {
            setFade(true)
        }, 50)

        return () => clearTimeout(timeout)

    }, [props.searchItem])

    return ( 
        <div>
        { fade ? (
        <FadeIn delay={300} duration={2100}>
            <Grid container spacing={4} justifyContent='center'>
                {
                    data.map((pokemon) => {
                        return (
                            <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name} image={pokemon.image} />
                        )
                    }) 
                }
            </Grid>
        </FadeIn>
        )
        :
        <Container fixed maxWidth="lg">
            <Box sx={{ bgcolor: '#ffff', height: '100vh' }} />
        </Container>
    }
        </div>
    )
}

export default PokemonList