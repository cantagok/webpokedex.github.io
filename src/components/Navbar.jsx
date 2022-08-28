import { AppBar, Toolbar, Grid } from "@mui/material";
import { PokedexLogo } from "../Images/Pokedex-Img";

function Navbar() {
    return (
        <AppBar position='static' style={{ background: '#E54222' }}>
            <Toolbar>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <PokedexLogo />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;