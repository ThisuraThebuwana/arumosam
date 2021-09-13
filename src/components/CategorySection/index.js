import React from 'react';
import {
    CategoriesContainer,
    CategoriesHeading, CategoriesLink, CategoryCard,
    CategoryImg,
    CategoryInfo,
    CategoryTitle, CategoryWrapper
} from "./categorySectionElements";

const CategorySection = ({heading, data}) => {
    return (
        <CategoriesContainer>
            <CategoriesHeading>{heading}</CategoriesHeading>
            <CategoryWrapper>
                {data.map((category, index) => {
                    return (
                        <CategoriesLink to={category.path}>
                            <CategoryCard key={index}>
                                <CategoryImg src={category.img} alt={category.alt}/>
                                <CategoryInfo>
                                    <CategoryTitle>{category.name}</CategoryTitle>
                                </CategoryInfo>
                            </CategoryCard>
                        </CategoriesLink>
                    )
                })}
            </CategoryWrapper>
        </CategoriesContainer>
    );
};

export default CategorySection;