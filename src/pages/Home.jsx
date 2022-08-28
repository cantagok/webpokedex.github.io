
import { Typography, Container, TextField, Pagination, Skeleton } from '@mui/material';
import  PokemonList  from '../components/PokemonList';
import  FadeIn  from '../components/FadeIn';
import { StyledDiv } from '../themes/themes';
import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../AppContext';
import { fetchPokemonCount, fetchPokemonCard } from "../fetch/fetch";
import { useNavigate } from 'react-router-dom';


function Home() {
  const { dispatch, page, offset, count } = useContext(AppContext);
  const [paginationCount, setCount] = useState(count);
  const [searchState, setSearchState] = useState([false, "Name or Pokedex Number of a Pokemon"]);
  const navigate = useNavigate();
  

  const searchKeyDown = (e) => {
    if(e.key === "Enter" ) {
      if( /^[A-Za-z0-9]*$/.test(e.target.value) )
        {
        fetchPokemonCard(e.target.value.toLowerCase()).then((pokemon) => navigate(`/pokemon/${pokemon.id}/${pokemon.name}`)).catch(()=>{
          setSearchState([true, "Incorrect Entry: Pokemon Not Found"])
            }
          )
          return;
        }

        setSearchState([true, "Incorrect Entry: Pokemon Not Found"])
      }
    
  }

  const searchBlur = () => {
    setSearchState([false, "Name or Pokedex Number of a Pokemon"])
  }
  

  const offsetChange = (e, value) => {
      e.preventDefault()

      dispatch({
        type: "Change_Page",
        payload: value
      })
  }
  

  useEffect(() => {
    fetchPokemonCount().then((value) => setCount(Math.ceil(value/50)))
  }, [])

  return (
    <main>
      <StyledDiv>
        <FadeIn delay={200} duration={1900}>
        <Container maxWidth='sm' style={{ marginTop: '30px' }}>
          <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
            Web Pokedex
          </Typography>
          <Typography variant='h5' align='center' color='textSecondary' paragraph>
            Unofficial Pokedex to see each pokemon and their stats. Please click on any card to view the pokemon!
          </Typography>
          <TextField fullWidth error={searchState[0]} id="outlined-search" label={searchState[1]} onKeyDown={searchKeyDown} onBlur={searchBlur}/>
        </Container>
        </FadeIn>
      </StyledDiv>
      <Container sx={{ padding: '20px 0' }} maxWidth="lg">
        <FadeIn delay={200} duration={2000}>
          <Pagination count={paginationCount} page={page} onClick={window.scrollTo({ top: 0, behavior: 'smooth' })} onChange={offsetChange} sx={{ marginBottom: '15px'}} color='error'/>
            <PokemonList searchItem={offset}/>
          <Pagination count={paginationCount} page={page} onClick={window.scrollTo({ top: 0, behavior: 'smooth' })} onChange={offsetChange} sx={{ marginTop: '15px'}} color='error'/>
        </FadeIn>
      </Container>
      
    </main>
  )
}

export default Home;