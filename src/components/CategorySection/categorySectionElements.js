import styled from "styled-components";
import {Link} from "react-router-dom";

export const CategoriesContainer = styled.div`
  width: 100vw;
  padding: 3rem calc((100vw - 1300px) / 2);
  background: #0d0909;
  color: #fff;
`

export const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`

export const CategoryCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 120px;
`

export const CategoryImg = styled.img`
  height: 120px;
  min-width: 120px;
  max-width: 100%;
  //box-shadow: 8px 8px #fdc500;
  border-radius: 50%;
`

export const CategoriesHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 2rem;
`

export const CategoryTitle = styled.h2`
  font-weight: 100;
  font-size: 1rem;
`

export const CategoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  text-align: center;
`

export const CategoriesLink = styled(Link)`
  display: flex;
  align-items: start;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  
  &:hover{
    color: #DDA0DD;
    opacity: 60%;
    transition: 0.2s ease-in-out;
  }
`;
