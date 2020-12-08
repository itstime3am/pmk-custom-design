import React from 'react'
import Styled from 'styled-components'
// import { InputGroupStyle, InputItem, IconInput  } from '../../dist/styled/sing-in-styled/InputGroup'

const InputGroupStyle = Styled.div`

    & > :not(first-child) {
        margin-top: 15px;
    }
`;
const InputItem = Styled.div`
    width: 100%; 
    height: 30px;
    margin: 0px;
    padding: 7px 3px 7px 0px;
    display: flex; 
    border-radius: 7px;
    justify-content: space-between; 
    background-color: white; 
`;
const IconInput = Styled.div`
width: 30px; 
margin: 0px 10px 0px 10px;
background-image: ${({url}) => (url? 'url('+url+')' : '')};
background-size: 100% 100%;
`;
const InputUsername = Styled.input.attrs({type: 'text'})``
const InputPassword = Styled.input.attrs({type: 'password'})``
export default function InputGroup() {
    return (
        <InputGroupStyle className="input-group">
            <InputItem className="input-group__item" >
                <IconInput className="input-group__icon-user" url="/img/icon/icon-input-user.png"></IconInput>
                <InputUsername className="input-group__input-text" placeholder="Username"></InputUsername>
            </InputItem>
            <InputItem>
                <IconInput className="input-group__icon-password" url="/img/icon/icon-input-password.png"></IconInput>
                <InputPassword className="input-group__input-password" placeholder="Password"></InputPassword>
            </InputItem> 
        </InputGroupStyle>
    )
}
