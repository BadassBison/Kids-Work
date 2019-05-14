import React from 'react'
import UserField from '../../input_components/user_field/user_field'
import PasswordField from '../../input_components/password_field/password_field'
import Title from '../../display_components/title/title'
import SubTitle from '../../display_components/sub_title/sub_title'
import SubmitField from '../../input_components/submit_field/submit';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            familyName: '',
            password: '',
            errors: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            firstName: this.state.firstName,
            familyName: this.state.familyName,
            password: this.state.password
        };
        debugger

        this.props.loginParent(user);
        // user login action still need to implemented below
        // this.props.logIn(user, this.props.history)

        // this.setState({
        //     familyName: user.familyName,
        //     password: user.password
        // })

    }

    render() {
        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="title-container">
                        <Title title="Child Labor" />
                        <SubTitle subTitle="Sign In" />
                    </div>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <UserField value={this.props.firstName} onChange={this.update("firstName")} placeholder="First Name"/>
                        <UserField value={this.props.familyName} onChange={this.update("familyName")} placeholder="Family Name"/>
                        <PasswordField password={this.props.password} onChange={this.update("password")} placeholder="Password"/>
                        <SubmitField value="Sign In" />
                    </form>
                </div>
            </section>
        )
    }
}

export default LoginForm