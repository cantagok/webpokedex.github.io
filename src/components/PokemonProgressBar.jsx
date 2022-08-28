import { LinearProgress, styled } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    
    '& .MuiLinearProgress-bar': {
        borderRadius: 5,
        maxValue: 300,
    },
    '&.MuiLinearProgress-colorPrimary': {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 400 : 800],
    },
  
  }));

function PokemonProgressBar(props) {
    const { stats, name, color} = props;

    const value = Math.round(stats / 2)
    
    return (
        <BorderLinearProgress id={name} 
        variant="determinate"
        value={value}
        sx={{ '& .MuiLinearProgress-bar1Determinate': { 
            bgcolor: color
        }}}
        />
    )
}

export default PokemonProgressBar;