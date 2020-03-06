import React from 'react';
import { Link } from 'react-router-dom';

class VisitorPage extends React.Component {
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi Visitor!</h1>
                <p>You're welcome!!</p>

                <iframe
                    allow="microphone;"
                    width="350"
                    height="430"
                    src="https://console.dialogflow.com/api-client/demo/embedded/1d208bb5-fd92-4459-bf96-b6034ac6442d">
                </iframe>

                <p>
                    <Link to="/login">Login</Link>
                </p>
            </div>
        );
    }
}

export { VisitorPage };