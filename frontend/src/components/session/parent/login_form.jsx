import React from 'react'
import UserField from '../../input_components/user_field/user_field'
import PasswordField from '../../input_components/password_field/password_field'
import Title from '../../display_components/title/title'
import SubTitle from '../../display_components/sub_title/sub_title'
import SubmitField from '../../input_components/submit_field/submit';
import Switch from '../../dashboard_components/switch/switch';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            familyName: '',
            password: '',
            errors: '',
            isParent: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
        this.toggleSwitch = this.toggleSwitch.bind(this);
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

        if (this.state.isParent) {
            this.props.loginParent(user)
                .then(() => {
                    this.props.history.push('/parent');
                });
            } else {
                this.props.loginChild(user)
                .then(() => {
                    this.props.history.push('/child');
                });
            //filter by child name, not necessary since we only fetch that child's chores
            // .then(() => this.props.updateFilter({field: "child", value: user.firstName }));
        }
        // user login action still need to implemented below
        // this.props.logIn(user, this.props.history)

        // this.setState({
        //     familyName: user.familyName,
        //     password: user.password
        // })

        this.props.closeModal();
    }

    handleDemoSubmit(e) {
        e.preventDefault();
        if (this.state.isParent) {
            this.props.demoLoginParent()
                .then(() => {
                    this.props.history.push('/parent');
                });
        } else {
            this.props.demoLoginChild()
                .then(() => {
                    this.props.history.push('/child');
                });
        }
        this.props.closeModal();
    }

    toggleSwitch(e) {
        this.setState({
            isParent: !this.state.isParent
        });
    }

    render() {
        return (
            <section className="hero is-primary form-container">
                <div className="hero-body fix-padding">
                    <button
                        className="close-modal-button"
                        onClick={this.props.closeModal}>
                        <i className="fas fa-window-close"></i>
                    </button>
                    <div className="title-container">
                        <Title title="Child Labor" />
                        <SubTitle subTitle="Sign In" />
                    </div>
                    <div className="login-switch-container">
                        <button 
                            className="login-switch-button"
                            onChange={this.toggleSwitch}>
                            <Switch 
                                loginSwitch={"login-switch"} />
                        </button>
                    </div>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <UserField value={this.props.firstName} onChange={this.update("firstName")} placeholder="First Name"/>
                        <UserField value={this.props.familyName} onChange={this.update("familyName")} placeholder="Family Name"/>
                        <PasswordField password={this.props.password} onChange={this.update("password")} placeholder="Password"/>
                        <SubmitField value="Sign In" />
                    </form>
                    <br/>
                    <p id="or">or</p>
                    <br/>
                    <button className="button is-info is-fullwidth"
                        id = "button-demo"
                        onClick={this.handleDemoSubmit}>
                        Demo Login
                        </button>
                </div>
            </section>
        )
    }
}

export default LoginForm