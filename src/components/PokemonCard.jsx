import { Card, CardMedia, CardContent, Typography, Grid, CardActionArea } from "@mui/material";
import { styled } from "@mui/system";
import { Routes, Route, Link } from 'react-router-dom'

const PokeCard = styled(Card)({
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.4)',
    transition: 'box-shadow .25s ease-out',
    'div, h6': {
        marginLeft: 0,
        transition: 'margin-left .50s ease-out'
    },

    'img': {
        filter: 'saturate(1.5)'
    },

    '&:hover': {
        boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
    },

    '&:hover div, &:hover h6': {
        marginLeft: '8px'
    },

    '&:hover img': {
        transform: 'scale(1.1)'
    }
})


export const PokemonCard = (props) => {
    return (
        <Grid item>
            <PokeCard sx={{ width: 200 }}>
                <Link to={`/pokemon/${props.id}/${props.name}`} style={{ textDecoration: 'none'}}>
                <CardActionArea>
                <CardMedia
                    component='img'
                    image={props.image}
                    height='175'
                    title={"Pokemon #" + props.id}
                />
                <CardContent>
                    <Typography 
                    variant="h5" 
                    component='div'
                    color='textPrimary'
                    >
                        {[props.name[0].toUpperCase(), ...props.name.slice(1)]}
                    </Typography>
                    <Typography
                    variant="h6"
                    color='textSecondary'
                    >
                        {`Pokedex #${props.id}`}
                    </Typography>
                </CardContent>
                </CardActionArea>
                </Link>
            </PokeCard>
        </Grid>
    )
}