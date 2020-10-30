import React from 'react';

function Page1(props) {
    const toggleVisibilityModal = e => {
        props.setModalVisibilityCreator(true);
    }

    const setModalText = text => {
        props.setModalTextCreator(text);
    }

    return (
        <>
            page1<br/>
            <button onClick={ () => { setModalText('text_1'); toggleVisibilityModal() } }>show modal 1</button>
            <button onClick={ () => { setModalText('text_2'); toggleVisibilityModal() } }>show modal 2</button>
        </>
    );
}

export default Page1;
