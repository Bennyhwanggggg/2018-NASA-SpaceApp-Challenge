import React from 'react';
import Iframe from 'react-iframe'

const PersonalPage = () => (
    <div>
        <Iframe url='https://talia-etdb.github.io/index/'
                id="if1" style={{visibility:"visible"}}
                width='100%'
                height='100%'/>
    </div>
);

export default PersonalPage;