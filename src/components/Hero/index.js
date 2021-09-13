import React, {useState} from 'react';
import Navbar from "../Navbar";
import {HeroContainer, HeroContent, HeroH1, HeroP, HeroBtn, HeroItems, HeroIcon} from './HeroElements'
import Sidebar from "../Sidebar";

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>ARUMOSAM</HeroH1>
                    <HeroP>The Art of Colorful Life</HeroP>
                    <HeroBtn>Place Order<HeroIcon/></HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;