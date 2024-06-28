import React from 'react';

const TextItem = ({text}) => {
    let bold = 0
    let textArr = []

    if(text.split('<b>').length === 1){
        bold = 0
    } else {
        bold = 1
        textArr = text.split('<b>')
    }

    return (
        <div>
            {bold === 0 ? text :
                <div>
                    <span>{textArr[1]}</span>
                    {' ' + textArr[2]}
                </div>
            }
        </div>
    );
};

export default TextItem;