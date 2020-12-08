import React from 'react'
import Styled from 'styled-components'

const SaveDesignGroupStyle = Styled.div`
    display: flex;
    flex-direction: column;
`;

const Span = Styled.span`
    font-size: 32px;
    text-align: center
`

const ButtonGroup = Styled.span`
    margin: 10px 0px 0px 0px;
    
    & > :not(first-child){
        margin: 10px;
    }
`;

const Button = Styled.button`
    width: ${({width})=> (width ? width : '150px')}; 
    height:  ${({height})=> (height ? height : '')}; 
    font-size: 24px;
    color: ${({color})=> (color ? color : '#FFF')}; ;
    background-color:  ${({bgColor})=> (bgColor ? bgColor : '#EC1C29')}; 
    border:  ${({border})=> (border ? '1px solid '+border : 'none')}; 
    text-align: center;
    cursor: pointer;
    outline: none;  
    padding: 5px; 
    border-radius: 10px; 

    &:hover {
        filter: brightness(92%);
    }
`;

export default function SaveDesignGroup() {
    return (
        <SaveDesignGroupStyle className="save-design">
            <Span className="save-design__text">คุณต้องการบันทึกไฟล์นี้ใช่ไหม ?</Span>
            <ButtonGroup  className="save-design__button-group">
                <Button  className="save-design__button-save">บันทึกซ้ำ</Button>
                <Button  className="save-design__button-save-as">บันทึกใหม่</Button>
                <Button  className="save-design__button-cancel" bgColor="#FFF" color="#000" border="#000">ยกเลิก</Button>
            </ButtonGroup>
        </SaveDesignGroupStyle>
    )
}
