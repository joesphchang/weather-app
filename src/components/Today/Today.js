import React from 'react';

function Today({ london }) {

    return (
        <div>
            {london.current.temp_f}
        </div>
    );
}

export default Today;