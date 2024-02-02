import { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss';
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import { Route, Routes } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaNodeJs, FaSass } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiPostgresql, SiExpress, SiTailwindcss } from "react-icons/si";

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode;
      console.log(oppositeOfCurrentDarkMode);
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`);
      setDarkMode(oppositeOfCurrentDarkMode);
   }

   useEffect(() => {
      let detectedDarkMode = eval(localStorage.getItem('darkMode'));

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode);
      } else {
         localStorage.setItem('darkMode', 'false');
      }
   }, []);

   return (
      <Box  className={darkMode ? Style.dark : Style.light} >
         <Container maxWidth="xl" minwidth="xs"> {}
            <Grid container flexDirection="column" minHeight="100vh" justifyContent="space-between">
               <Grid item>
                  <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode}/>
               </Grid>
               <Grid item flexGrow={1}>
                  <Routes>
                     <Route exact path="/" element={<Home/>}/>
                     <Route exact path="/about" element={<About/>}/>
                     <Route exact path="/portfolio" element={<Portfolio/>}/>
                  </Routes>
               </Grid>
               <Grid item>
                  <Box component="footer" display="flex" flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center" gap={2}
                       py={1.7} sx={{ opacity: 0.7, fontSize: { xs: '1.3rem', md: '2.5rem' }}} width="100%">
                     <FaHtml5 />
                     <FaCss3Alt />
                     <SiJavascript />
                     <FaReact />
                     <FaGitAlt />
                     <SiMongodb />
                     <SiPostgresql />
                     <FaNodeJs />
                     <SiExpress />
                     <SiTailwindcss />
                     <FaSass />
                  </Box>
               </Grid>
            </Grid>
         </Container>
      </Box>
   );
}
