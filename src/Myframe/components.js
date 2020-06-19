import styled from 'styled-components'
import { motion } from 'framer-motion'

const MyApp = styled.div`
`
const MFNav = styled.div`
    z-index : 20;
    height : 70px;
    display : flex;
    align-items : center;
    background : ${props=>props.mode === "false" ? '#3b3a36' : '#fff'};
    color : ${props=>props.mode === "false" ? '#fff' : '#3b3a36'};
    transition: all ease-in-out .3s;
    box-shadow: ${ props=>props.shadow ? '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)':'0' };
    line-height : 70px;
    position : fixed;
    top : 0;
    left : 0;
    width : 100vw;
`
const MFContainer = styled.section`
    margin-left : auto;
    margin-right : auto;
    width : 95vw;
    max-width : 1200px;
    background : ${ props=> props.mode === "false" ? '#3b3a36' : "#f0f0f0" }
    box-shadow: ${ props=>props.shadow ? '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)':'0' };
`

const MFGrid = styled.section`
    display : grid;
    grid-template;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    @media screen and (min-width : 600px){
        grid-template-columns: repeat(2,1fr);
        
    }
    gap : 20px
`

const MFSideNav = styled(motion.div)`
    z-index : 10;
    position: fixed;
    height : calc(100vh - 70px);
    top: 70px;
    left: 0;
    background: #fff;
    width: 300px;
    padding-left : 50px;
    box-shadow: ${ props=> props.shadow ? '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)':'0' };
    background : ${ props=>props.mode === "false" ? "#3B3A36" : "#fff" };
    transition : background .3s ease-in;
    `
const MFPage = styled(motion.section)`
    
    min-height : 100vh;
`
const MFBox = styled.article`
    background : white;
    box-shadow: ${ props=> props.shadow ? '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)':'0' };
`
const MFHero = styled(motion.section)`
    
`
export { MFHero , MFBox, MFPage , MFGrid , MFNav ,MFSideNav, MFContainer ,MyApp }


