import React from 'react'
import UserField from '../../input_components/user_field/user_field'
import EmailField from '../../input_components/email_field/email_field'
import PasswordField from '../../input_components/password_field/password_field'
import SubmitField from '../../input_components/submit_field/submit'
import ChildButtons from '../../input_components/button_field/child_button/child_buttons'
import Title from '../../display_components/title/title'
import SubTitle from '../../display_components/sub_title/sub_title'

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.State = {
            email: '',
            familyName: '',
            password: '',
            password2: '',
            formType: 'Sign Up'
            // errors will be slice of the local state
            // errors: {} 
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        let user = {
            email: this.state.email,
            familyName: this.state.familyName,
            password: this.state.password,
            password2: this.state.password2
        }
        // This action to signup and login user
        // this.props.signup(user, this.props.history)

        // we need to reset the state onSubmit 
        this.setState({
            email: user.email,
            familyName: user.familyName,
            password: user.password,
            password2: user.password2,
        })

    }

    render() {
        
        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="title-container">
                        <Title title="Child Labor" />
                        <SubTitle subTitle="Sign Up" />
                    </div>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <UserField familyName={this.props.familyName} onChange={this.update("familyName")} />
                        <EmailField email={this.props.email} onChange={this.update("email")} />
                        <ChildButtons />
                        <PasswordField password={this.props.password} onChange={this.update("password")} passwordType={`Password`} />
                        <PasswordField password={this.props.password2} onChange={this.update("password2")} passwordType={`Repeat Password`} />
                        <SubmitField formType="Sign Up" />
                    </form>
                </div>
            </section>
        )
    }
}

export default SignUpForm