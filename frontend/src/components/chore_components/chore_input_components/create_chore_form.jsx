import React from 'react'
import ChoreTitle from '../chore_form_sub_components/chore_title'
import ChoreTitleInput from '../chore_form_sub_components/chore_title_input'
import ChoreDescription from '../chore_form_sub_components/chore_body_input'
import ChoreAmount from '../chore_form_sub_components/chore_amount_input'
import ChoreDueDate from '../chore_form_sub_components/chore_due_date_input'
import SubmitField from '../../input_components/submit_field/submit'
import ChorePriority from '../chore_form_sub_components/chore_priority_input'
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
            childId: "",

        }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChecked = this.handleChecked.bind(this)
    this.handleClose = this.handleClose.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleChecked(e) {
        let priority = this.state.priority
        this.setState({
            priority: (!priority)
        })

        
    }

    handleSubmit(e) {
        e.preventDefault()
        const chore = {
            title: this.state.title,
            body: this.state.body,
            amount: this.state.amount,
            dueDate: this.state.dueDate,
            priority: this.state.priority,
            childId: this.state.childId
        }
        
        if (this.state.childId === ""){
          this.props.createUnassignedChore(chore)
        } else {
          this.props.createAssignedChore(chore)
        }
        this.props.closeModal()
    }

    handleClose() {
      this.props.closeModal()
    }

    render() {
        
        const childOptions = this.props.children.map(child => {
          return (
            <option value={child.id}>{child.name}</option>
          )
        })

        return (
          <section className="hero is-primary form-container">
            <div className="hero-body">
              <button
                className="close-modal-button"
                onClick={this.handleClose}
              >
                <i className="fas fa-window-close" />
              </button>
              <form
                className="chore-form-container"
                onSubmit={this.handleSubmit}
              >
                <ChoreTitle title="Create New Chore" />
                <ChoreTitleInput
                  placeholder="Chore Name"
                  value={this.state.title}
                  onChange={this.update("title")}
                />
                <ChoreDescription
                  placeholder="Chore Descrtiption"
                  value={this.state.body}
                  onChange={this.update("body")}
                />
                <ChoreAmount
                  placeholder="Amount of money"
                  value={this.state.amount}
                  onChange={this.update("amount")}
                />
                <select onChange={this.update("childId")}>
                  <option value="">Assign to child</option>
                  {childOptions}
                </select>
                <ChoreDueDate
                  value={this.state.dueDate}
                  onChange={this.update("dueDate")}
                />
                {this.state.priority ? (
                  <ChorePriority
                    id="chore-checkbox"
                    checked
                    onClick={this.handleChecked}
                  />
                ) : (
                  <ChorePriority
                    id="chore-checkbox"
                    onClick={this.handleChecked}
                  />
                )}

                <SubmitField value="Create Chore" />
              </form>
            </div>
          </section>
        );
    }
}

export default CreateChoreForm