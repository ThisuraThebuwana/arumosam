import React from 'react';
import img1 from "../../images/feedback1.jpg";
import img2 from "../../images/feedback2.png";
import img3 from "../../images/feedback3.jpg";
import Carousel from "react-elastic-carousel";
import {Item, FeedbackImg, FeedbackContainer, FeedbackHeading} from "./FeedbackCarouselElements";

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
];

const FeedbackCarousel = ({heading}) => {
    return (
        <FeedbackContainer>
            <FeedbackHeading>{heading}</FeedbackHeading>
            <Carousel breakPoints={breakPoints} autoPlay={true}>
                <Item><FeedbackImg src={img1} alt="feedback-img"/></Item>
                <Item><FeedbackImg src={img2} alt="feedback-img"/></Item>
                <Item><FeedbackImg src={img3} alt="feedback-img"/></Item>
                <Item><FeedbackImg src={img1} alt="feedback-img"/></Item>
                <Item><FeedbackImg src={img2} alt="feedback-img"/></Item>
                <Item><FeedbackImg src={img3} alt="feedback-img"/></Item>
                <Item><FeedbackImg src={img1} alt="feedback-img"/></Item>
            </Carousel>
        </FeedbackContainer>
    );
};

export default FeedbackCarousel;