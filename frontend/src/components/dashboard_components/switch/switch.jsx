import React from 'react'
import './switch.css'

class ChoresSwitchButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.setState(state => ({
            checked: !state.checked
        }))
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            checked: nextProps.checked
        })
    }


    render() {
        const { checked } = this.state
        return (
            <div id="switch" className="dash-board-switch-container">
                <div className="dash-board-switch">
                    <input type="checkbox" 
                        name="dash-board-switch" 
                        className="dash-board-switch-checkbox" 
                        id="mydashboardswitch" 
                        onChange={this.handleClick} 
                        checked={checked}/>
                    <label className="dash-board-switch-label" 
                        htmlFor="mydashboardswitch">
                        <span className={`dash-board-switch-inner ${this.props.loginSwitch}`}></span>
                        <span className="dash-board-switch-switch"></span>
                    </label>
                </div>
            </div>
            )
        }
}

export default ChoresSwitchButton