import React from 'react'
import ChoreTitle from './chore_form_sub_components/chore_title'
import CreateChoreTitle from './chore_form_sub_components/chore_title_input'
import ChoreDescription from './chore_form_sub_components/chore_body_input'
import ChoreAmount from './chore_form_sub_components/chore_amount_input'
import ChoreDueDate from './chore_form_sub_components/chore_due_date_input'
import SubmitField from '../../../../../../ch-fix/input_components/submit_field/submit'
import './chore.css'

class CreateChoreForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            amount: 0,
            dueDate: '',
            priority: false,
            assign: null
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        return (
            <section className="hero is-primary form-container">
                <div className="hero-body">
                    <form className="chore-form-container">
                        <ChoreTitle title="Create New Chore"/>
                        <CreateChoreTitle placeholder="Chore Name" />
                        <ChoreDescription placeholder="Chore Descrtiption" />
                        <ChoreAmount placeholder="Amount of money" min={1}/>
                        <ChoreDueDate />
                        <SubmitField value="Create Chore"/>
                    </form>
                </div>
            </section>
        )
    }
}

export default CreateChoreForm