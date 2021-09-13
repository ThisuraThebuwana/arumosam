import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIcons2, SocialIconsLink, WhatsappLogo, WhatsappContact, ContactArea} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza</SocialLogo>
                        <ContactArea>
                            <SocialIcons>
                                <SocialIconsLink to={{ pathname: "https://www.facebook.com/Arumosam.lk" }} target="_blank">
                                    <FaFacebook />
                                </SocialIconsLink>
                                <SocialIconsLink to={{ pathname: "https://www.instagram.com/arumosam.lk/" }} target="_blank">
                                    <FaInstagram />
                                </SocialIconsLink>
                                <SocialIconsLink href="/" target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                                    <FaYoutube />
                                </SocialIconsLink>
                            </SocialIcons>
                            <SocialIcons2>
                                <WhatsappLogo>
                                    <FaWhatsapp />
                                </WhatsappLogo>
                                <WhatsappContact>
                                    <p>0771199903</p>
                                </WhatsappContact>
                            </SocialIcons2>
                        </ContactArea>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;