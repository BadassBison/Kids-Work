import React from 'react'
import ChoreTitle from '../chore_input_components/chore_form_sub_components/chore_title'
import ChoreBodyDisplay from '../chore_display_components/chore_body_display'
import ChoreDueDateDisplay from './chore_duedate_display'

const ChoreDisplay = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <ChoreTitle title={props.title} />
                <ChoreDueDateDisplay date={props.date}/>
                <ChoreBodyDisplay body={props.body} />
            </div>
        </div>
    )
}

export default ChoreDisplay