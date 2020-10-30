import React from 'react';

function Page2(props) {
    const toggleVisibilityModal = e => {
        props.setModalVisibilityCreator(true);
    }

    const setModalText = text => {
        props.setModalTextCreator(text);
    }

    return (
        <>
            page2<br/>
            <button onClick={ () => { setModalText('text_1111'); toggleVisibilityModal() } }>show modal 11111</button>
            <button onClick={ () => { setModalText('text_2222'); toggleVisibilityModal() } }>show modal 222222</button>
        </>
    );
}

export default Page2;