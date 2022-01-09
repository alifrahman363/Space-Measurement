import React from 'react';  
import FirstRow from '../FirstRow/FirstRow';
import SecondRow from '../SecondRow/SecondRow';
import LastRow from '../LastRow/LastRow';


export const Layout = () => {
    return (
        <div>
            <FirstRow/>
            <SecondRow/>
            <LastRow/>
         </div>
    )
}

export default Layout ; 