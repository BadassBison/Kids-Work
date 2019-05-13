import React from 'react'
import UserField from '../../input_components/user_field/user_field'
import EmailField from '../../input_components/email_field/email_field'
import PasswordField from '../../input_components/password_field/password_field'
import SubmitField from '../../input_components/submit_field/submit'
import Title from '../../display_components/title/title'
import SubTitle from '../../display_components/sub_title/sub_title'
import AddChildButton from '../../input_components/button_field/child_button/add_child_button'
import MinusChildButton from '../../input_components/button_field/child_button/minus_child_button'
import ChildInputs from '../child/add_child_form';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            firstName: '',
            familyName: '',
            children: [{ name: '', childPassword: '', childConfirmPassword: '' }],
            password: '',
            password2: '',
            formType: 'Sign Up'
            // errors will be slice of the local state
            // errors: {} 
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        if (["name", "childPassword", "childConfirmPassword"].includes(e.target.className)) {
            let children = [...this.state.children]
            children[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
            this.setState({ children }, () => console.log(this.state.children))
        } else {
            this.setState( {[e.target.name]: e.target.value.toUpperCase()} )
        }
    }

    addChild = (e) => {
        e.preventDefault()
        this.setState((prevState) => ({
            children: [...prevState.children, { name: '', childPassword: '', confirmChildPassword: '' }]
        }))
    }

    removeChild = (e) => {
        e.preventDefault()
        const removedArr = this.state.children
        removedArr.pop()
        this.setState((prevState) => ({
            children: removedArr
        }))
    }
    
    

    handleSubmit(e) {
        e.preventDefault()
        let user = {
            email: this.state.email,
            firstName: this.state.firstName,
            familyName: this.state.familyName,
            // numChildren: this.state.numChildren,
            children: this.state.children,
            password: this.state.password,
            password2: this.state.password2
        }
        // This action to signup and login user
        // this.props.signup(user, this.props.history)
        this.props.signup(user)
        
    }

    render() {
        let { familyName, firstName, email, password, password2, children } = this.state
        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="title-container">
                        <Title title="Child Labor" />
                        <SubTitle subTitle="Sign Up" />
                    </div>
                    <form className="login-form" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                        <UserField name="familyName" value={familyName} placeholder="Family Name" />
                        <UserField name="firstName" value={firstName}  placeholder="First Name" />
                        <EmailField name="email" email={email} placeholder="Email" />
                        <PasswordField name="password" password={password}  passwordType={`Password`} />
                        <PasswordField name="password2" password={password2}  passwordType={`Repeat Password`} />
                        <p>Add Child</p>
                        <AddChildButton onClick={this.addChild}/>
                        <p>Number of children: {children.length}</p>
                        <ChildInputs children={children} />
                        <SubmitField formType="Sign Up" />
                    </form>
                </div>
            </section>
        )
    }
}

export default SignUpForm