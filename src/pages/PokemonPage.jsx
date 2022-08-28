import { Container, Grid, Button, Typography, ImageListItem, Stack, Box, styled, Skeleton } from "@mui/material";
import { useParams, Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect, useState } from 'react';
import { fetchPokemonStats } from '../fetch/fetch.js';
import PokemonChip from '../components/PokemonChip.js'
import PokemonProgressBar from "../components/PokemonProgressBar.jsx";
import PokemonProgressLabel from "../components/PokemonProgressLabel.jsx";
import FadeIn from "../components/FadeIn.jsx";


function PokemonPage(){
    const { id, name } = useParams();
    const [info, setInfo] = useState();
    const width = 3;
    const image_id = (new Array(width).join('0') + id).substr(-width)
    const imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${image_id}.png`;

    useEffect(() => {
        fetchPokemonStats(id).then(setInfo)
    }, [])

    return (
        <main>
            <Container sx={{ padding: '20px 0', marginTop: '25px', marginLeft: 'auto' }} maxWidth="lg">
                <Link to={'/'} style={{ textDecoration: 'none'}}>
                    <Button startIcon={<ArrowBackIosIcon/>} color='error' size='large' sx={{ ml: '145px'}}> Home </Button>
                </Link>
            </Container>
            <Container maxWidth='md' sx={{ padding: '20px 0', marginTop: '30px', marginLeft: 'auto' }}>
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={8}>
                        <FadeIn delay={100} duration={1000}>
                        <ImageListItem>
                        <img
                        src={imgSrc}
                        alt={name}
                        style={{ filter: 'saturate(1.5)'}}
                        loading='lazy'
                        />
                        </ImageListItem>
                        </FadeIn>
                    </Grid>
                    
                    
                    <Grid item xs={8}>
                    <FadeIn delay={200} duration={1000}>
                        <Grid container spacing={1} direction='column'>
                            <Grid item xs={2}>
                                <Typography variant='h4' color='textPrimary'>{[name[0].toUpperCase(), ...name.slice(1)]}</Typography>
                                <Typography variant='h5' color='textSecondary'>{`Pokedex #${id}`}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Stack direction='row' spacing={2}>
                                    
                                    {
                                    
                                    (info) ? info.types.map(type => {
                                        return <PokemonChip key={type.slot} type={type.type.name}/>
                                    }) : <Box sx={{ height: '32px'}}/>
                                    
                                    }
                                    
                                </Stack>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant='h5' >Base Stats</Typography>
                                <Stack direction='column' spacing={1} width='50%'>

                                    <div>
                                    <PokemonProgressLabel name="Health" stat={info?.stats[0].base_stat} />
                                    {
                                        (info) ?
                                        <PokemonProgressBar name="Health" stats={info.stats[0].base_stat} color="#5ea534" /> : 
                                        <Skeleton variant='text' sx={{ fontSize: '1rem' }}/>
                                    }
                                    </div>
                                    <div>
                                    <PokemonProgressLabel name="Attack" stat={info?.stats[1].base_stat} />
                                    {
                                        (info) ?
                                        <PokemonProgressBar name="Attack" stats={info.stats[1].base_stat} color="#d2322b" /> : 
                                        <Skeleton variant='text' sx={{ fontSize: '1rem' }}/>
                                    }
                                    </div>
                                    <div>
                                    <PokemonProgressLabel name="Defense" stat={info?.stats[2].base_stat} />
                                    {
                                        (info) ?
                                        <PokemonProgressBar name="Defense" stats={info.stats[2].base_stat} color="#346fec" /> : 
                                        <Skeleton variant='text' sx={{ fontSize: '1rem' }}/>
                                    }
                                    </div>
                                    <div>
                                    <PokemonProgressLabel name="Special Attack" stat={info?.stats[3].base_stat} />
                                    {
                                        (info) ?
                                        <PokemonProgressBar name="Special Attack" stats={info.stats[3].base_stat} color="#ec7318" /> : 
                                        <Skeleton variant='text' sx={{ fontSize: '1rem' }}/>
                                    }
                                    </div>
                                    <div>
                                    <PokemonProgressLabel name="Special Defense" stat={info?.stats[4].base_stat} />
                                    {
                                        (info) ?
                                        <PokemonProgressBar name="Special Defense" stats={info.stats[4].base_stat} color="#2d7d7a" /> : 
                                        <Skeleton variant='text' sx={{ fontSize: '1rem' }}/>
                                    }
                                    </div>
                                    <div>
                                    <PokemonProgressLabel name="Speed" stat={info?.stats[5].base_stat} />
                                    {
                                        (info) ?
                                        <PokemonProgressBar name="Speed" stats={info.stats[5].base_stat} color="#5725e8" /> : 
                                        <Skeleton variant='text' sx={{ fontSize: '1rem' }}/>
                                    }
                                    </div>
                                    
                                </Stack>
                            </Grid>
                        </Grid>
                        </FadeIn>
                    </Grid>
                    
                    
                </Grid>
            </Container>
        </main>
    )
}

export default PokemonPage;