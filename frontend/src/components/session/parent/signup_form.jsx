import React from 'react'
import SubmitField from '../../input_components/submit_field/submit'
import Title from '../../display_components/title/title'
import SubTitle from '../../display_components/sub_title/sub_title'
import AddChildButton from '../../input_components/button_field/child_button/add_child_button'
import MinusChildButton from '../../input_components/button_field/child_button/minus_child_button'

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            firstName: '',
            familyName: '',
            children: [],
            password: '',
            password2: '',
            formType: 'Sign Up'
            // errors will be slice of the local state
            // errors: {} 
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        if (['firstName input', 'password input', 'password2 input'].includes(e.target.className)) {
            let children = [...this.state.children]
            let className = e.target.className.split(' ')[0]
            children[e.target.dataset.id][className] = e.target.value
            this.setState({ children }, console.log(this.state.children))
        } 

    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
        })
    }

    addChild = (e) => {
        this.setState((prevState) => ({
            children: [...prevState.children, { firstName: '', password: '', password2: '' }]
        }))
    }

    removeChild = (e) => {
        e.preventDefault()
        const removeChildArr = this.state.children
        removeChildArr.pop()
        this.setState({
            children: removeChildArr
        })
    }
    

    handleSubmit(e) {
        e.preventDefault()

        let user = {
            email: this.state.email,
            firstName: this.state.firstName,
            familyName: this.state.familyName,
            children: this.state.children,
            password: this.state.password,
            password2: this.state.password2
        }
        this.props.signup(user)
        
    }

   

    render() {
        const { children } = this.state
        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="title-container">
                        <Title title="Child Labor" />
                        <SubTitle subTitle="Sign Up" />
                    </div>
                    <form className="login-form" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                        <div className="field">
                            <div className="control has-icons-left">
                                <input type="text" className="input" value={this.state.familyName} onChange={this.update('familyName')} placeholder="Family name" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control has-icons-left">
                                <input type="text" className="input" value={this.state.firstName} onChange={this.update('firstName')} placeholder="First name" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control has-icons-left">
                                <input className="input" type="email" value={this.state.email} onChange={this.update('email')} placeholder="Email" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control has-icons-left ">
                                <input type="password" className="input" value={this.state.password} onChange={this.update('password')} placeholder="Password" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control has-icons-left ">
                                <input type="password" className="input" value={this.state.password2} onChange={this.update('password2')} placeholder="Repeat Password" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        
                        <label>
                            <AddChildButton onClick={this.addChild}/>
                        </label>
                        <label>
                            <MinusChildButton onClick={this.removeChild} disabled={children.length === 1 ? 'disabled' : ''} />
                        </label>
                        <p>Number of children: {children.length}</p>
                        {
                            children.map((child, index) => {
                                let childId = `child-${index}`, passwordId = `password-${index}`, password2Id = `password2-${index}`
                                return (
                                    <div key={index}>
                                        <div className="control has-icons-left">
                                            <input 
                                                type="text"
                                                name={childId} 
                                                data-id={index}
                                                id={childId}
                                                value={children[index].firstName}
                                                className="firstName input"
                                                placeholder="Child Name" />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-user"></i>
                                            </span>
                                        </div>
                                        <div className="control has-icons-left ">
                                            <input
                                                type="password"
                                                name={passwordId}
                                                data-id={index}
                                                id={passwordId}
                                                value={children[index].password}
                                                className="password input" 
                                                placeholder="Password" />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-lock"></i>
                                            </span>
                                        </div>
                                        <div className="control has-icons-left ">
                                            <input
                                                type="password"
                                                name={password2Id}
                                                data-id={index}
                                                id={password2Id}
                                                value={children[index].password2}
                                                className="password2 input"
                                                placeholder="Repeat Password" />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-lock"></i>
                                            </span>
                                        </div>
                                        <br />
                                    </div>
                                )
                            })
                        }
                        <SubmitField formType="Sign Up" />
                    </form>
                </div>
            </section>
        )
    }
}

export default SignUpForm