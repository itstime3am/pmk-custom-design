import React from 'react'
import Styled from 'styled-components'
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import SubMenuList from './SubMenuList'

const Accordion = Styled(MuiAccordion)`
    width: 100%;
    margin: 0px !important;
    background-color: red;
`;
const AccordionSummary = Styled(MuiAccordionSummary)`
    min-height: 40px !important;
    margin: 5px 0px 5px 0px;
    background-color: ${({active})=> (active ? '#f7f7f7' : '')} !important;
    & .MuiAccordionSummary-content{
        margin: 0px !important;
    }
`;
const AccordionDetails = Styled(MuiAccordionDetails)`
    padding: 0px 15px 15px 15px;
    background-color: ${({active})=> (active ? '#f7f7f7' : '')} !important;
`
const MenuItemStyle = Styled.div`
    background-color: ${({active})=> (active ? '#f7f7f7' : '')}; 
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    & > *:not(first-child){
        margin-top: 10px;
    }
`;
const Header = Styled.div`
    width: 100%;
    height: 45px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const TitleHeader = Styled.span`
    margin: 5px 10px 0px 10px;
    font-size: 24px;
`;
const IconHeader = Styled.div`
    width: ${({width})=> (width ? width : '15%')}; 
    height:  ${({height})=> (height ? height : '80%')}; 
    margin: ${({margin})=> (margin ? margin : '0')};
    margin: 0px 10px 0px 10px;
    background-image: ${({url}) => (url? 'url('+url+')' : '')};
    background-size: 100% 100%;
`
const Arrow = Styled.div`
    display: ${({active})=> (active ? 'block' : 'none')}; 
    position: absolute;
    margin-top: 5px;
    right: -10px;
    border-style: solid;
    border-width: 17px 0 17px 12px;
    border-color: transparent transparent transparent #FFF; 
`;

export default function MenuItem() {
    const [active, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <MenuItemStyle className="menu-item">
            <Accordion className="menu-item__acc" expanded={active === 'body'} onChange={handleChange('body')}>
                <AccordionSummary className="menu-item__acc-header">
                <Arrow className="menu-item__arrow-right" active></Arrow>
                <Header className="menu-item__header">
                    <TitleHeader className="menu-item__header-name">ตัวเสื้อ</TitleHeader>
                    <IconHeader className="menu-item__header-icon" url="/img/img-pattern.jpg"></IconHeader>
                </Header>
                </AccordionSummary>
                <AccordionDetails className="menu-item__acc-content">
                    <SubMenuList></SubMenuList>
                </AccordionDetails>
            </Accordion>
        </MenuItemStyle>
    )
}
