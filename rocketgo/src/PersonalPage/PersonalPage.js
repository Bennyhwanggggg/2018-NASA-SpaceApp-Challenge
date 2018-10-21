import React from 'react';
import Iframe from 'react-iframe'
import Header from "../layout/Header";

const PersonalPage = ({history}) => (
    <div>
        <Header history={history}/>
        <Iframe url='https://ppesjk.cfapps.io/#/demo'
                id="if1" style={{visibility:"visible"}}
                width='100%'
                height='100%'/>
    </div>
);

export default PersonalPage;