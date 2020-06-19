import React from 'react';
import { MFContainer ,MFBox,MFPage , MFGrid  } from '../Myframe/components'
import { useRecoilValue } from 'recoil'
import { modeState } from "../Store/atoms"

const Home = () => {
    const mode = useRecoilValue(modeState)
    return (
        <MFPage mode={mode} >
            <section 
                className="hero"      
            >             
            </section>
            <MFContainer>
                <MFGrid>
                    <MFBox shadow className='py-3 px-2'>
                        <h2>Lorem, ipsum.</h2>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quisquam? Et aliquam quas saepe, a doloremque numquam facere consectetur quisquam?</p>
                    </MFBox>
                    <MFBox shadow className='py-3 px-2'>
                        <h2>Lorem, ipsum.</h2>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quisquam? Et aliquam quas saepe, a doloremque numquam facere consectetur quisquam?</p>
                    </MFBox>
                </MFGrid>
            </MFContainer>
            
        </MFPage>
    );
}

export default Home;