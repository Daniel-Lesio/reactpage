import React from 'react'
import {useRecoilValue , useRecoilState} from 'recoil'
import { menuState , modeState } from '../Store/atoms'
import { AnimatePresence  } from 'framer-motion'
import { MFSideNav } from '../Myframe/components'
import { Link } from 'react-router-dom'
export default function SideNav() {
    const [menu ,closeMenu ]=useRecoilState(menuState)
    const mode  = useRecoilValue(modeState);
    return (
        <AnimatePresence>
            {
                !menu && (
                    <MFSideNav
                        shadow
                        mode={mode.toString()} 
                        initial={{ x : -300 }}
                        animate={{x : -50 }}
                        exit={{ x : -350 }}
                        transition={{  type : "spring", stiffness : 100,  duration : 0.3 }}
                    >
                        <ul className="side-nav-list">
                            <Link onClick={()=>closeMenu(true)} to='/' >Home</Link>
                            <Link onClick={()=>closeMenu(true)} toA='/about' >About</Link>
                            <Link onClick={()=>closeMenu(true)} to='/gallery' >Gallery</Link>
                            <Link onClick={()=>closeMenu(true)} to='/contact' >Contact</Link>
                        </ul>
                    </MFSideNav>
                )
            }
        </AnimatePresence>
    )
}
