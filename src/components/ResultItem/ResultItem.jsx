import React from 'react';

const ResultItem = ({result}) => {
    return ( <div>
        {result.attributes.canonicalTitle}
    </div> );
}
 
export default ResultItem;