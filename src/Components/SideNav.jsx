import React from 'react'
import {useRecoilValue} from 'recoil'
import { menuState } from '../Store/atoms'
import { AnimatePresence  } from 'framer-motion'
import { MFSideNav } from '../Myframe/components'
export default function SideNav() {
    const menu  = useRecoilValue(menuState)
    
    return (
        <AnimatePresence>
            {
                !menu && (
                    <MFSideNav
                        shadow 
                        initial={{ x : -300 }}
                        animate={{x : -50 }}
                        exit={{ x : -350 }}
                        transition={{  type : "spring", stiffness : 100,  duration : 0.3 }}
                    >
                    </MFSideNav>
                )
            }
        </AnimatePresence>
    )
}
