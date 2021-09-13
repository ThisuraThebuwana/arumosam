import styled from "styled-components";
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #0d0909;
`

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;
  
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`

export const ContactArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //align-items: center;
  height: 100px;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
`

export const SocialIcons2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 180px;
`

export const SocialIconsLink = styled(Link)`
  color: #fff;
  font-size: 24px;
`

export const WhatsappLogo = styled.div`
  color: #fff;
  font-size: 24px;
`

export const WhatsappContact = styled.div`
  color: #fff;
  font-size: 24px;
`