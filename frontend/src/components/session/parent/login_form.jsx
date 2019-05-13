import React from 'react'
import UserField from '../../input_components/user_field/user_field'
import PasswordField from '../../input_components/password_field/password_field'
import SubmitField from '../../input_components/submit_field/submit'
import Title from '../../display_components/title/title'
import SubTitle from '../../display_components/sub_title/sub_title'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            familyName: '',
            password: '',
            errors: ''
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        let user = {
            familyName: this.state.familyName,
            password: this.state.password
        }

        // user login action still need to implemented below
        // this.props.logIn(user, this.props.history)

        this.setState({
            familyName: user.familyName,
            password: user.password
        })

    }

    render() {
        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="title-container">
                        <Title title="Child Labor" />
                        <SubTitle subTitle="Sign In" />
                    </div>
                </div>
                <form className="login-form">
                    <UserField familyName={this.props.familyName} onChange={this.update("familyName")} />
                    <PasswordField password={this.props.password} onChange={this.update("password")} passwordType={`Password`} />
                    <SubmitField formType="Sign In" />
                </form>
            </section>
        )
    }
}

export default LoginForm