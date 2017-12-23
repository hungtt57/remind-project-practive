import React,{Component} from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {addReminder,deleteReminder} from "../action/index";
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
    deleteReminder(id) {
        this.props.deleteReminder(id);
    }
    renderReminders() {
        const {reminders } = this.props;
        return (
          <ul className="list-group col-sm-4">
              {
                  reminders.map(reminder => {
                      return (
                          <li key={reminder.id} className="list-group-item">
                              <div className="list-item">{reminder.text}</div>
                              <div className="list-item delete-button"
                              onClick={() => this.deleteReminder(reminder.id)}>
                                &#x2715;
                              </div>
                          </li>
                      )
                  })
              }
          </ul>
        );
    }
    render() {
        return (
            <div className="App">
                <div className="title">
                    Reminder Pro
                </div>
                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                            placeholder="i have to ..."
                               onChange={event => this.setState({text : event.target.value})}
                        />
                    </div>

                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.addReminder()}
                    >
                        Add Reminder
                    </button>
                </div>
                {this.renderReminders()}
            </div>
        )
    }
}
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({addReminder},dispatch);
// }
function mapStateToProps(state) {
    return {
        reminders:state
    }
}
export default connect(mapStateToProps,{addReminder,deleteReminder})(App);