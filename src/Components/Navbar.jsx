import React , {   useEffect } from 'react';
import {MFNav ,MFContainer} from '../Myframe/components';
import { useSetRecoilState, useRecoilState , useRecoilValue } from 'recoil';
import { menuState, modeState , accentColor } from '../Store/atoms';
import { motion } from 'framer-motion';
import Logo from './Logo';
// import Logo from './Logo';

const variants = {
    left: { x: 0 },
    right: { x: "-35px" },    
}

const Navbar = () => {
    const [ mode , setMode ] = useRecoilState(modeState);
    const setMenuState =  useSetRecoilState(menuState)
    const menu = useRecoilValue(menuState)
    const accent = useRecoilValue(accentColor)
    
    useEffect(()=>{
        let stringBool = localStorage.getItem("lightmode")
        const x = stringBool === "false" ? false : true 
        setMode(x)
    },[setMode])
    useEffect(() => {
        localStorage.setItem("lightmode" , mode.toString())
        // changeSide(mode)
    }, [mode]);

    return (
        <MFNav mode={mode.toString()} shadow >
            <MFContainer className='nav'>
                 <div className="menu">
                     <div 
                      onClick={ ()=>setMenuState(!menu) }
                        className={ !menu ? "menu-btn menu-btn-active" : "menu-btn " }>
                            <span style={{ background : accent }} ></span>  
                            <span style={{ background : accent }}></span>  
                            <span style={{ background : accent }}></span>  
                     </div>
                 </div>
                    <Logo/>
                 <div className="nav-right">
                     <div  className="switch"  onClick={ ()=>setMode(!mode) }>
                         <motion.div
                            mode={mode.toString()} 
                            className="switch-circle"
                            variants={variants}
                            
                            animate={ mode === true ? 'left' : "right" }
                         >
                         </motion.div>
                         <svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/></svg>            
                         <svg viewBox="0 0 24 24" height="24"  width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M11.1,12.08C8.77,7.57,10.6,3.6,11.63,2.01C6.27,2.2,1.98,6.59,1.98,12c0,0.14,0.02,0.28,0.02,0.42 C2.62,12.15,3.29,12,4,12c1.66,0,3.18,0.83,4.1,2.15C9.77,14.63,11,16.17,11,18c0,1.52-0.87,2.83-2.12,3.51 c0.98,0.32,2.03,0.5,3.11,0.5c3.5,0,6.58-1.8,8.37-4.52C18,17.72,13.38,16.52,11.1,12.08z"/></g><path d="M7,16l-0.18,0C6.4,14.84,5.3,14,4,14c-1.66,0-3,1.34-3,3s1.34,3,3,3c0.62,0,2.49,0,3,0c1.1,0,2-0.9,2-2 C9,16.9,8.1,16,7,16z"/></g></g></svg>
                     </div>
                 </div>
            </MFContainer>
        </MFNav>        
    )
};

export default  Navbar