import { Grid, Typography } from "@mui/material";

function PokemonProgressLabel(props) {
    const { name, stat } = props;
    return (
        <Grid container columns={16}>
            <Grid item xs={10}>
                <label htmlFor={ name }>{ name }</label>
            </Grid>
            <Grid item  container xs={6} justifyContent='right'>
                <Typography component='div'>{ stat }</Typography>
            </Grid>
        </Grid>
    )
}

export default PokemonProgressLabel;