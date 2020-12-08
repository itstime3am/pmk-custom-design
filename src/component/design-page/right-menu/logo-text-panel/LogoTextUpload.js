import React from 'react'
import Styled from 'styled-components'

import LogoTextPosition from './Position'
import LogoTextScreenType from './ScreenType'

const LogoTextUploadStyle = Styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const LogoTextUploadWrapper = Styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;  

const ButtonUploadImgWrapper = Styled.div`
    display: flex; 
    background-color: lightgray;
    padding: 5px 0px 5px 0px;
    margin: 10px 0px 0px 0px;
    justify-content: center;
`;

const ButtonUploadImg = Styled.div`
    width: 90%;
    height: 55px;
    cursor: pointer;
    background-image: url(/pmk-custom-design/img/btn-upload-img.png);
    background-size: 100% 100%;
`;

export default function LogoTextUpload() {
    return (
        <LogoTextUploadStyle className="logo-text-upload">
            <LogoTextUploadWrapper className="logo-text-upload__wrapper">
                <LogoTextPosition></LogoTextPosition>
                <LogoTextScreenType></LogoTextScreenType>
                <ButtonUploadImgWrapper className="logo-text-upload__button-upload-wrapper">
                    <ButtonUploadImg className="logo-text-upload__button-upload-img"></ButtonUploadImg>
                    <input className="logo-text-upload__input-file" type="file" style={{display: 'none'}}></input>
                </ButtonUploadImgWrapper>
            </LogoTextUploadWrapper>
        </LogoTextUploadStyle>
    )
}
