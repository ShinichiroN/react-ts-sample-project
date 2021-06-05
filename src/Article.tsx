import React from 'react';

const Article = (props) => {
    return (
        <>
            <h2>{props.title}</h2>
            {/* <h3>{props.text}</h3> */}
            <h3>{props.isPublished}</h3>
        </>
    )
}

export default Article;