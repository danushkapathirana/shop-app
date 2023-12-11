import React from "react"

import styled from "styled-components"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import YouTubeIcon from '@mui/icons-material/YouTube'
import PlaceIcon from '@mui/icons-material/Place'
import PhoneIcon from '@mui/icons-material/Phone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``

const Description = styled.p`
    margin: 20px 0;
`

const SocialIconContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return(
        <Container>
            <Left>
                <Logo>Shop_X</Logo>
                <Description>
                    There are many variations of passages of Lorem Ipsum available, 
                    but the majority have suffered alteration in some form, by injected humour, 
                    or randomised words which don’t look even slightly believable.
                </Description>
                <SocialIconContainer>
                    <SocialIcon color="3b5999">
                        <FacebookOutlinedIcon />
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <PinterestIcon />
                    </SocialIcon>
                    <SocialIcon color="e60023">
                        <YouTubeIcon />
                    </SocialIcon>
                </SocialIconContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><PlaceIcon style={{marginRight: "10px"}} /> Sri Lanka</ContactItem>
                <ContactItem><PhoneIcon style={{marginRight: "10px"}} /> +94 xx xxx xxxx</ContactItem>
                <ContactItem><MailOutlineIcon style={{marginRight: "10px"}} /> contact@shop_x@gmail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
