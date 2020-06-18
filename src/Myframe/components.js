import styled from 'styled-components'
import { motion } from 'framer-motion'
const MyApp = styled.div`
background : ${ props => props.mode ? '#3b3b3b' :'#f0f0f0' }
`

const MFNav = styled.div`
    z-index : 20;
    height : 70px;
    display : flex;
    align-items : center;
    background : ${props=>props.mode === "false" ? '#3b3a36' : '#fff'};
    color : ${props=>props.mode ? '#fff' : '#3b3a36'};
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
    grid-template-columns: repeat(4,1fr);
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

    `
export { MFGrid , MFNav ,MFSideNav, MFContainer ,MyApp }


