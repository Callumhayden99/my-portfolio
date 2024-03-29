import {Box} from "@mui/material";

export default function Toggler({darkMode, handleClick}) {
    const transition = 'all 250ms ease'

   return (
      <Box  fontSize={{ xs: "0.8rem", sm: "1.2rem", md: "1.5rem" }}  sx={{cursor: 'pointer', ":hover": {transform: 'translateY(-3px)', transition: transition}}}>
         {
            darkMode ?
               <span onClick={handleClick} aria-label="Full Moon" role="img">🌕</span>
               :
               <span onClick={handleClick} aria-label="New Moon" role="img">🌑</span>
         }
      </Box>
   )
}