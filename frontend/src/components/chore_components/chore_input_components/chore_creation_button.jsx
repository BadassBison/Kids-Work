import { Link } from 'react-router-dom'
import React from 'react'

const CreateChoreButton = () => {
    return (
        <Link to="/chores" className="button is-rounded">Create Chore</Link>
    )
}

export default CreateChoreButton