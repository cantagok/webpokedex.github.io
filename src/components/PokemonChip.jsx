import { Chip, styled } from '@mui/material';

const typeColor = (type) => {
    switch(type) {
        case "grass":
            return {bgcolor: "rgba(122, 199, 76, 0.7)", color: "rgb(51, 90, 28)"}
        case "poison":
            return {bgcolor: "rgba(163, 62, 161, 0.7)", color: "rgb(92, 35, 91)"}
        case "fire":
            return {bgcolor: "rgba(238, 129, 48, 0.7)", color: "rgb(119, 56, 10)"}
        case "water":
            return {bgcolor: "rgb(99, 144, 240, 0.7)", color: "rgb(11, 43, 112)"}
        case "normal":
            return {bgcolor: "rgba(168, 167, 122, 0.7)", color: "rgb(80, 80, 53)"}
        case "electric":
            return {bgcolor: "rgba(247, 208, 44, 0.7)", color: "rgb(129, 105, 5)"}
        case "ice":
            return {bgcolor: "rgba(150, 217, 214, 0.7)", color: "rgb(35, 97, 94)"}
        case "fighting":
            return {bgcolor: "rgba(210, 50, 43, 0.7)", color: "rgb(113, 27, 23)"}
        case "ground":
            return {bgcolor: "rgba(226, 191, 101, 0.7)", color: "rgb(110, 85, 21)"}
        case "flying":
            return {bgcolor: "rgba(169, 143, 243, 0.7)", color: "rgb(40, 13, 118)"}
        case "psychic":
            return {bgcolor: "rgba(249, 85, 135, 0.7)", color: "rgb(114, 4, 38)"}
        case "bug":
            return {bgcolor: "rgba(166, 185, 26, 0.7)", color: "rgb(73, 82, 11)"}
        case "rock":
            return {bgcolor: "rgba(182, 161, 54, 0.7)", color: "rgb(91, 81, 27)"}
        case "ghost":
            return {bgcolor: "rgba(115, 87, 151, 0.7)", color: "rgb(39, 30, 51)"}
        case "dragon":
            return {bgcolor: "rgba(111, 53, 252, 0.7)", color: "rgb(38, 2, 127)"}
        case "dark":
            return {bgcolor: "rgba(112, 87, 70, 0.7)", color: "rgb(76, 59, 47)"}
        case "steel":
            return {bgcolor: "rgba(183, 183, 206, 0.7)", color: "rgb(54,54,80)"}
        case "fairy":
            return {bgcolor: "rgba(214, 133, 173, 0.7)", color: "rgb(98, 33, 65)"}
        default:
            return "rgba(255, 255, 255)"
    }
}

function PokemonChip(props) {
    const { type } = props
    const { bgcolor, color } = typeColor(type)
    return (
        <Chip label={type} sx={{ bgcolor: bgcolor, color: color, fontWeight: 'bold' }}/>
    )
}

export default PokemonChip