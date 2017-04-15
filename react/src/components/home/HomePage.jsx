import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker'
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import {
    Breadcrumb, IBreadcrumbItem
} from 'office-ui-fabric-react/lib/Breadcrumb';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        var c = { name: 'Contoso Ltd', contact: 'Joe Bloggs' };

        this.state = { client:c, loading: false };

        //this.handleClientNameChange = this.handleClientNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getErrorMessage(value) {
        return 'An error message! ' + JSON.stringify(value);
    }

    // reusable client change, called with arrow func
    // e.g: onChanged={ (e) => this.clientChange('name',e) }
    clientChange(field, value) {
        var client = this.state.client;
        client[field] = value;
        this.setState({ client: client });
    }

    handleSubmit(event) {
        this.setState({ loading: true });

        // submit to API here...
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="content ms-font-l">

                <TextField
                    disabled={this.state.loading}
                    label='Client name:'
                    value={this.state.client.name}
                    onChanged={(e) => this.clientChange('name', e)}
                />

                <TextField
                    disabled={this.state.loading}
                    label='Contact name:'
                    value={this.state.client.contact}
                    onChanged={(e) => this.clientChange('contact', e)}
                />

                <PrimaryButton
                    disabled={this.state.loading}
                    text='Save'
                    onClick={this.handleSubmit}
                >
                    
                </PrimaryButton>
            </div>
        );
    }
}

export default HomePage;

//ReactDOM.render(<Sample />, document.getElementById('sample'));