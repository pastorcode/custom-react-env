import React from 'react';
import { render } from 'react-dom';


const Hi = () => {
    return ( 
        <p>Hello I am saying Hi</p>
     );
}
 
render(<Hi />, document.getElementById('app'))