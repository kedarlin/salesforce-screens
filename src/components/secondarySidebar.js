import React from 'react'
import SecondarySidebar1 from './secondarySidebars/secondarySidebar1'

const SecondarySidebar = ({selectedIndex}) => {
    console.log(selectedIndex);
    switch(selectedIndex){
        case 1:
            return <SecondarySidebar1 />
        default:
            return <SecondarySidebar1 />
    }
}

export default SecondarySidebar