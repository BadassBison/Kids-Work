import React from 'react'
import '../display.css'

const Title = (props) => {
    return (
        <h1 className="title">
            {props.title}
        </h1>
    )
}

export default Title