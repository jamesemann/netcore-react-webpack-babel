import * as React from 'react';
import * as ReactDOM from 'react-dom';

class TopNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = { hamburgerShowing: false };

        this.toggleHamburger = this.toggleHamburger.bind(this);
    }

    toggleHamburger(event) {
        this.setState({ hamburgerShowing: !this.state.hamburgerShowing });
    }
//    <div className="ms-bgColor-themePrimary ms-fontColor-white">
//    <span className="ms-font-xxl">
//        <i className="ms-Icon ms-Icon--GlobalNavButton" aria-hidden="true"></i>
//    </span>
//    <span className="ms-font-su pageTitle"> &nbsp;Menu</span>
//</div>
    render() {
        return (
            <div>
                <div className="ms-font-su ms-bgColor-teal ms-fontColor-white pageTitle content">Clients</div>

                


            </div>

        );
    };

};

export default TopNav;