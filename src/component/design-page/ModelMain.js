import React from 'react'
import Styled from 'styled-components'

import ModelMainGroup from './ModelMainGroup'

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Flex } from '../../dist/styled/Master'

const ModelMainWrapper = Styled.div`
    border: 1px solid green;
    margin: 25px 0px 0px 0px;
    width: 400px;
    height: 400px;
`;
 
export default function ModelMain() {
    return (
        <Flex className="model-main">
                <ModelMainWrapper className="model-main__wrapper">
                    <TransformWrapper>
                        <TransformComponent>
                            <ModelMainGroup></ModelMainGroup>
                        </TransformComponent>
                    </TransformWrapper>
                </ModelMainWrapper>
        </Flex>
    )
}
