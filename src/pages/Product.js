import React from "react"

import styled from "styled-components"
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive"

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({
        padding: "10px",
        flexDirection: "column"
    })}
`

const ImageContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({
        height: "40vh"
    })}
`

const InformationContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({
        padding: "10px"
    })}
`

const Title = styled.h1`
    font-weight: 200;
`

const Description = styled.p`
    margin: 20px 0;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    ${mobile({
        width: "100%"
    })}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FIlterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-item: center;
    justify-content: space-between;
    ${mobile({
        width: "100%"
    })}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: #f8f4f4;
    }
`

const Product = () => {
    return(
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImageContainer>
                <InformationContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, 
                        dolor in finibus malesuada, lectus ipsum porta nunc, 
                        at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, 
                        eget tristique tortor pretium ut. Curabitur elit justo, 
                        consequat id condimentum ac, volutpat ornare.
                    </Description>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FIlterSizeOption>XS</FIlterSizeOption>
                                <FIlterSizeOption>S</FIlterSizeOption>
                                <FIlterSizeOption>M</FIlterSizeOption>
                                <FIlterSizeOption>L</FIlterSizeOption>
                                <FIlterSizeOption>XL</FIlterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <AddIcon />
                            <Amount>1</Amount>
                            <RemoveIcon />
                        </AmountContainer>
                        <Button>ADD to CART</Button>
                    </AddContainer>
                </InformationContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
