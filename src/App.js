import React from 'react'
import Styled from 'styled-components'

import SingInPageView from './component/sing-in-page/SingInPageView'
import PatternPageView from './component/pattern-page/PatternPageView'
import DesignPageView from './component/design-page/DesignPageView'
import Dialog from './component/Dialog'

const DialogControl = Styled.div`
    display: ${({active})=> (active ? 'block' : 'none')} ;  
`;

export default function App() {
    return (
        <div>
            <SingInPageView /> 
            <PatternPageView /> 
            <DialogControl>
                <Dialog></Dialog>
            </DialogControl>
            <DesignPageView />
        </div>
    )
}
