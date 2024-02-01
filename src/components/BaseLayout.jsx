import {useEffect, useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaSass } from "react-icons/fa";

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode
      console.log(oppositeOfCurrentDarkMode)
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
      setDarkMode(oppositeOfCurrentDarkMode)
   }

   useEffect(() => {
      let detectedDarkMode = eval(localStorage.getItem('darkMode'));

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode)
      } else {
         localStorage.setItem('darkMode', 'false')
      }
   }, [])

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode}/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/about'} element={<About/>}/>
                  <Route exact path={'/portfolio'} element={<Portfolio/>}/>
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={5} 
                    py={'1.7rem'} sx={{opacity: 0.7}} width={'100%'} fontSize={50}>
                  
                 <p><FaHtml5/></p>
                 <p><FaCss3Alt/></p>
                 <p><SiJavascript/></p>
                 <p><FaReact/></p>
                 <p><FaGitAlt/></p>
                 <p><SiMongodb/></p>
                 <p><SiPostgresql/></p>
                 <p><FaNodeJs/></p>
                 <p><SiExpress/></p>
                 <p><SiTailwindcss/></p>
                 <p><FaSass/></p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}