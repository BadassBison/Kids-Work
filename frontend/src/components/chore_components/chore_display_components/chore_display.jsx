import React from 'react'
import Title from '../../display_components/title/title';
import ChoreBodyDisplay from '../chore_display_components/chore_body_display'
import ChoreDueDateDisplay from './chore_duedate_display'
import './chore_display.css'

class ChoreDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.handleClose = this.handleClose.bind(this)
    }
    
    handleClose() {
        this.props.closeModal();
    }


    render() {
        const { chore } = this.props;
        return (
            <div className="card">
                <button className="close-button" onClick={this.handleClose}>X</button>
                <div className="card-content">
                    <Title title={chore.title} />
                    <ChoreDueDateDisplay date={chore.deadline}/>
                    <ChoreBodyDisplay body={chore.body} />
                    <div className="title">{chore.amount}</div>
                </div> 
            </div>
        )
    }
}

export default ChoreDisplay