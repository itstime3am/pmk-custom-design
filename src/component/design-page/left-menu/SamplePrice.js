import React from 'react'
import Styled from 'styled-components'

const SamplePriceStyle = Styled.div`
    margin: 30px 0px 0px 0px;
`;

const Price = Styled.div`
    font-size: ${({fontSize})=> (fontSize ? fontSize : '62px')}; 
    color: #ca2931;
    display: flex; 
    justify-content: center; 
    height: 56px;

    & > :not(first-child){
        margin: 0px 0px 0px 5px;
    }
`;

const Note = Styled.span`
    color: gray;
`

export default function SamplePrice() {
    return (
        <div>
            <SamplePriceStyle className="sample-price">
                <Price className="sample-price__price"><strong>฿</strong><strong>123.00</strong></Price>
                <Note className="sample-price__note">
                    <span>*ราคานี้เฉพาะเสื้อตามแบบยกเว้นงานปัก-สกรีน</span><span>ติดต่อพนักงานขายเพิ่มเติม</span>
                </Note>
            </SamplePriceStyle>
        </div>
    )
}
