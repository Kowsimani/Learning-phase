import React from 'react';
const Demo=({test })=>{
    console.log(test)
    return(
        <>
        <h1>DEMO</h1>
        <h2>{test.name}</h2>
        </>
    )
}
export default Demo