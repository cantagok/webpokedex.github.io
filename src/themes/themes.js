import { createTheme } from "@mui/system";
import { styled } from "@mui/system";

/*
theme.palette.background.paper
theme.spacing(8, 0, 6)
*/

export const AppTheme = createTheme({
    palette: {
        primary: '#E54222',
        background: '#ffff'
    }
})


export const StyledDiv = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background,
    spacing: theme.spacing(8, 0, 6)
}))