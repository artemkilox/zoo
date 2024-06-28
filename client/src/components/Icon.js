import React, {useEffect} from 'react';

const Icon = ({svg}) => {

    useEffect(() => {
        const svgWrapper = document.getElementById('svgWrapper')
        svgWrapper.innerHTML = svg
    }, [])

    return (
        <div id="svgWrapper" style={{height: '523px', width: '1254px'}}></div>
    );
};

export default Icon;