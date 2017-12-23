import React,{Component} from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {addReminder} from "../action/index";
// import {bindActionCreators} from 'redux';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text : ''
        }
    }
    addReminder() {
        this.props.addReminder(this.state.text);
    }
    renderReminders() {
        const {reminders } = this.props;

    }
    render() {
        return (
            <div className="App">
                <div className="title">
                    Reminder Pro
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                            placeholder="i have to ..."
                               onChange={event => this.setState({text : event.target.value})}
                        />
                    </div>
                    {this.renderReminders()}
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.addReminder()}
                    >
                        Add Reminder
                    </button>
                </div>
            </div>
        )
    }
}
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({addReminder},dispatch);
// }
export default connect(null,{addReminder})(App);