import React, { useState, useEffect } from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';
import Translate from './components/Translate';


const items = [
    {
        title: 'Title 1',
        content: 'Content 1'
    },
    {
        title: 'Title 2',
        content: 'Content 2'
    },
    {
        title: 'Title 3',
        content: 'Content 3'
    }
];

function App() {

    return (
        <div>
            <Translate />
        </div>
    )
}

export default App;
