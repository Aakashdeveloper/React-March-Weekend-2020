import React, { Fragment } from 'react';

const NewsDisplay = (props) => {
    console.log("Props is>>>>>",props)

    const renderList = props.datalist.map((data) => {
        return(
            <div>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
                <img src={data.imageUrl}/>
            </div>
        )
    })

    return(
        <Fragment>
           {renderList}
        </Fragment>
    )
}

export default NewsDisplay;