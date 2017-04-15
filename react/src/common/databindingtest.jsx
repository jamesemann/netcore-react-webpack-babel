import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker'
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import {Nav } from 'office-ui-fabric-react/lib/Nav';
import {
    Breadcrumb, IBreadcrumbItem
} from 'office-ui-fabric-react/lib/Breadcrumb';

import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Link } from 'office-ui-fabric-react/lib/Link';


export class DataBindingTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = { client: props.client, loading: false, hamburgerShowing: false };

        //this.handleClientNameChange = this.handleClientNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleHamburger = this.toggleHamburger.bind(this);
    }

    getErrorMessage(value) {
        return 'An error message! ' + JSON.stringify(value);
    }

    // reusable client change, called with arrow func
    // e.g: onChanged={ (e) => this.clientChange('name',e) }
    clientChange(field,value) {
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

    _onBreadcrumbItemClicked(event) {
        debugger;
    }


    toggleHamburger(event) {
        this.setState({ hamburgerShowing: !this.state.hamburgerShowing });
    }

    render() {
        let spinner = "";
        if (this.state.loading) {
            spinner = <Spinner size={SpinnerSize.Small} />
        }

        let nav = "";
        if (this.state.hamburgerShowing) {
            nav = <Nav className="ms-font-m ms-fontColor-themePrimary" visible="false"
                groups={[{
                    links: [
                        {
                            name: 'Parent link', links: [
                                { name: 'Child link', url: 'http://example.com' },
                                {
                                    name: 'Child link', links: [
                                        { name: 'Child link', url: 'http://example.com' },
                                        { name: 'Child link', url: 'http://example.com' }
                                    ]
                                },
                                { name: 'Child link', url: 'http://example.com' }
                            ]
                        },
                        {
                            name: 'Parent link', links: [
                                { name: 'Child link', url: 'http://example.com' },
                            ]
                        }
                    ]
                }]}
            />
        }
        

        return (
            <div>
                <div>
                    <a href="#" onClick={this.toggleHamburger}><i className="ms-Icon ms-Icon--GlobalNavButton ms-font-xxl" aria-hidden="true"></i></a>
                    </div>

                {nav}

                <Breadcrumb
                    items={[
                        { text: 'Home', 'key': 'Home', onClick: this._onBreadcrumbItemClicked },
                        { text: 'Clients', 'key': 'Clients', onClick: this._onBreadcrumbItemClicked },
                        { text: 'New Client', 'key': 'New Client', onClick: this._onBreadcrumbItemClicked },
                        //{ text: 'This is folder 3', 'key': 'f3', onClick: this._onBreadcrumbItemClicked },
                        //{ text: 'This is folder 4', 'key': 'f4', onClick: this._onBreadcrumbItemClicked },
                        //{ text: 'This is folder 5', 'key': 'f5', onClick: this._onBreadcrumbItemClicked },
                    ]}
                    maxDisplayedItems={3} />

                <TextField
                    disabled={this.state.loading}
                    label='Client name:'
                    value={this.state.client.name}
                    onChanged={ (e) => this.clientChange('name',e) }
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
                    {spinner}    
                </PrimaryButton>

                
            </div>
        );
    }
}

//ReactDOM.render(<DataBindingTest />, document.getElementById('databindingtest'));

var CLIENT = { name: 'Contoso Ltd', contact: 'Joe Bloggs' };
    

//ReactDOM.render(
//    <DataBindingTest client={CLIENT} />,
//    document.getElementById('databindingtest')
//);