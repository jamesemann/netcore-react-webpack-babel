﻿import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from 'office-ui-fabric-react/lib/Button';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker'
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';

export class Sample extends React.Component {
    getErrorMessage(value) {
        return 'An error message! ' + JSON.stringify(value);
    }

    render() {
        return (
            <form action='test' method='post'>
                <Toggle
                    defaultChecked={true}
                    label='A toggle'
                    onText='On'
                    offText='Off' />
                <div>
                    <Label>I'm a Label</Label>
                    <Label disabled={true}>I'm a disabled Label</Label>
                    <Label required={true}>I'm a required Label</Label>
                </div>
                <DatePicker
                    isRequired={true} 
                ></DatePicker>
                <TextField
                    //required pattern="https?://.+"
                    //required
                    value=''
                    placeholder='This field always has an error.'
                    onGetErrorMessage={this.getErrorMessage}
                    validateOnLoad={false}
                />
                <span className="ms-font-su ms-fontColor-themePrimary">Big blue text</span>
                <Button>Click me</Button></form>
        );
    }
}

//ReactDOM.render(<Sample />, document.getElementById('sample'));