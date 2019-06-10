import React from 'react'
import UserField from '../../input_components/user_field/user_field'
import PasswordField from '../../input_components/password_field/password_field'
import Title from '../../display_components/title/title'
import SubTitle from '../../display_components/sub_title/sub_title'
import SubmitField from '../../input_components/submit_field/submit';
import Switch from '../../dashboard_components/switch/switch';
import Typed from 'typed.js';

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
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
        this.demoUser = this.demoUser.bind(this);
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
                    // debugger
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

    toggleSwitch(e) {
        this.setState({
            isParent: !this.state.isParent
        });
    }

    clearInputs() {
        document.getElementsByClassName("first-name-input").value = "";
        document.getElementsByClassName("family-name-input").value = "";
        document.getElementsByClassName("password-input").value = "";
    }

    demoUser(e) {
        e.preventDefault();
        this.clearInputs();

        if (this.state.isParent) {
            const typedFirstName = {
                strings: ["Steph"],
                typeSpeed: 70
            };
    
            const typedFamilyName = {
                strings: ["Curry"],
                typeSpeed: 70
            };
    
            const typedPassword = {
                strings: ["password"],
                typeSpeed: 70
            };
    
            this.setState({
                firstName: "",
                familyName: "",
                password: ""
            });
    
            new Typed(".first-name-input", typedFirstName);
    
            setTimeout(() => {
                new Typed(".family-name-input", typedFamilyName);
            }, 1000);
    
            setTimeout(() => {
                new Typed(".password-input", typedPassword);
            }, 2000);
    
            setTimeout(() => {
                this.props.loginParent({
                    firstName: "Steph",
                    familyName: "Curry",
                    password: "password"
                });
            }, 2500);
        } else {
            const typedFirstName = {
                strings: ["Riley"],
                typeSpeed: 70
            };

            const typedFamilyName = {
                strings: ["Curry"],
                typeSpeed: 70
            };

            const typedPassword = {
                strings: ["password"],
                typeSpeed: 70
            };

            this.setState({
                firstName: "",
                familyName: "",
                password: ""
            });

            new Typed(".first-name-input", typedFirstName);

            setTimeout(() => {
                new Typed(".family-name-input", typedFamilyName);
            }, 1000);

            setTimeout(() => {
                new Typed(".password-input", typedPassword);
            }, 2000);

            setTimeout(() => {
                this.props.loginChild({
                    firstName: "Riley",
                    familyName: "Curry",
                    password: "password"
                });
            }, 2500);
        }
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
                        <Title title="Kids Work" />
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
                    <div className="login-switch-container">
                        <button
                            type="button"
                            className="splash-nav-link"
                            onClick={this.demoUser}
                        >DEMO USER</button>
                    </div>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <UserField value={this.props.firstName} addClass="first-name-input" onChange={this.update("firstName")} placeholder="First Name"/>
                        <UserField value={this.props.familyName} addClass="family-name-input" onChange={this.update("familyName")} placeholder="Family Name"/>
                        <PasswordField password={this.props.password} addClass="password-input" onChange={this.update("password")} placeholder="Password"/>
                        <SubmitField value="Sign In" />
                    </form>
                </div>
            </section>
        )
    }
}

export default LoginForm