import React from "react";


const card = ({name, email, img}) => {

    return (
        <div className='tc bg-light-green dib w-20 br3 pa2 ma2 grow bw2 shadow-5 '>
            <img alt='robots' src={img} />
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default card;

