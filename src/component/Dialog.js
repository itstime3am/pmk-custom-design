import React from 'react'
import Styled from 'styled-components'

import SaveDesignGroup from './SaveDesignGroup'

import SingInForm from './sing-in-page/SingInForm'

const DialogStyle = Styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(0, 0, 0, 0.3);
    z-index: 99;
`;

const DialogBoxWrapper = Styled.div`
    background-color: #FFF;
    border-radius: 10px;
    position: relative;
`;

const DialogBox = Styled.div`
    width: auto;
    height: auto;
    background: linear-gradient(-160deg, rgba(255, 255, 255, 0.1).5%, rgba(89, 98, 105, 0.4) 100%); 
    padding 20px;
    border-radius: 10px;
`;

const BtnClose = Styled.div`
    width: 30px;
    background-color: #EC1C29;
    color: #FFF;
    position: absolute;
    display: ${({display}) => (display? display : 'block')};
    top: 0;
    right: 0;
    border-top-right-radius: 10px;
    cursor: pointer;
    z-index: 1;
    text-align: center;
    padding: 3px 0px 3px 0px;

    &:hover {
        filter: brightness(92%);
    }
`;

export default function Dialog() {
    return (
        <DialogStyle className="dialog__bg-full">
            <DialogBoxWrapper className="dialog__wrapper">
                <BtnClose className="dialog__btn-close">x</BtnClose>
                <DialogBox className="dialog">
                    <SingInForm></SingInForm>
                    <SaveDesignGroup></SaveDesignGroup>
                </DialogBox>
            </DialogBoxWrapper>
        </DialogStyle>
    )
}
