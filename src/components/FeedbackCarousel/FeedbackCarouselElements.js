import styled from "styled-components";

export const FeedbackContainer = styled.div`
  width: 100vw;
  min-height: 50vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`
export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 100%;
  background-color: #fff;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
`
export const FeedbackImg = styled.img`
  height: 350px;
  width: auto;
`

export const FeedbackHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`