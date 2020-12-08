import Styled from 'styled-components'

const PageView = Styled.div`
    position: relative;
    background: linear-gradient(-160deg, rgba(255, 255, 255, 0.1).5%, rgba(89,98,105,0.4) 100%); 
    width: 100%; 
    height: auto; 
    min-height: 100vh;  
    position: relative;
`;
const Section = Styled.section`
    width: 100%;
    height: 100%;
    display: flex; 
    justify-content: center; 
    align-items: center;
`;
const SectionContainer = Styled.div`
    width: ${({width})=> (width ? width : '100%')};
    height: 100%;
    padding: ${({padding})=> (padding ? padding : '0')};
`
const DivImg = Styled.div`
    width: ${({width})=> (width ? width : '100%')}; 
    height:  ${({height})=> (height ? height : '100%')}; 
    margin: ${({margin})=> (margin ? margin : '0')};
    background-image: ${({url}) => (url? 'url(/pmk-custom-design'+url+')' : '')};
    background-size: 100% 100%;
`;
const Span = Styled.span`
    font-size: ${({fontSize})=> (fontSize ? fontSize : '16px')}; 
    margin: ${({margin})=> (margin ? margin : '0')};
    z-index: ${({zIndex})=> (zIndex ? zIndex : '0')};
`;
const PmkLogoTopLeft = Styled.div`
    width: 7%; 
    height: 45px; 
    background-image: url(/pmk-custom-design/img/pmk-logo.png);
    background-size: 100% 100%;
    left: 1.2%;
    top: 1%;
    position: absolute;
    margin: 10px 0px 0px 0px;
`;
const Hr = Styled.hr`
    margin: 0;
    border: none; 
    width: 100%px; 
    height: 1px; 
    background-color: ${({color})=> (color ? color : 'black')}; 
`;
const Button = Styled.div`
    width: ${({width})=> (width ? width : '')}; 
    height:  ${({height})=> (height ? height : '')}; 
    font-size: 32px;
    color: ${({color})=> (color ? color : '#FFF')}; ;
    background-color:  ${({bgColor})=> (bgColor ? bgColor : '#EC1C29')}; 
    border:  ${({border})=> (border ? '1px solid '+border : 'none')}; 
    text-align: center;
    cursor: pointer;
    outline: none;  
    padding: 5px; 
    border-radius: 3px; 

    &:hover {
        filter: brightness(92%);
    }
`;
const TextTitle = Styled.div`
    font-size: ${({fontSize})=> (fontSize ? fontSize : '24px')}; 
    color: ${({color})=> (color ? color : '#5A5A5C')};
    // height: ${({height})=> (height ? height : '0;')};
    margin: ${({margin})=> (margin ? margin : '0;')};
`;
const Flex = Styled.div`
    display: flex;
    justify-content: ${({content})=> (content ? content : 'center')};
    align-items: ${({align})=> (align ? align : '')};
    margin: ${({margin})=> (margin ? margin : '0;')};
    
    // Set Margin in Flex > :not(first-child) 
    ${({cMargin}) => (cMargin ? '& > :not(first-child) { margin: '+cMargin+'; }' : 'margin: 0;')};
    
`;

export { Section, SectionContainer, PageView, DivImg, PmkLogoTopLeft, Hr, Button, TextTitle, Span, Flex }
