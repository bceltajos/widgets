import React, { useState, useEffect } from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';


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

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Shade of Blue',
        value: 'blue'
    },
];

function App() {

    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Dropdown 
                selected={selected}
                onSelectedChange={setSelected}
                options={options} />
        </div>
    )
}

export default App;
