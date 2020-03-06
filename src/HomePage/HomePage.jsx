import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class Table extends Component {
    constructor(props) {
        super(props);
    }

    renderTableData() {
        return this.props.data.reverse().map((record) => {
            return (
                <div>
                <tr><td colSpan="2">{record.split('|')[0]}</td></tr>
                <tr><td colSpan="2"><pre>{record.split('|')[1]}</pre></td></tr>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <table border="1">
                    <tbody>
                        { this.renderTableData() }
                    </tbody>
                </table>
            </div>
        )
    }
}

class HomePage extends React.Component {
    componentDidMount() {
    }

    handleChatHistory(user)
    {
        return (e) => {
            this.props.chatHistory(user);
            this.forceUpdate();
        }
    }

    handleLogout(user)
    {
        return (e) => {
            this.props.logout(user);
        }
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.username}!</h1>
                <p>You're logged in!!</p>
                <iframe
                    allow="microphone;"
                    width="350"
                    height="430"
                    src="https://console.dialogflow.com/api-client/demo/embedded/5e954960-ad27-446e-a48a-8d62f061bb41">
                </iframe>

                <p>
                    <Link to="/" onClick={this.handleChatHistory(user)}>History</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/login" onClick={this.handleLogout(user)}>Logout</Link>
                </p>

                <div id="container"></div>

                {/* <Table data={user.records} /> */}
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete,
    chatHistory: userActions.chatHistory,
    logout: userActions.logout
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };