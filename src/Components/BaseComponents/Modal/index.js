import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.scss';

const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

class ModalPortal extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return (

            ReactDOM.createPortal(
                this.props.children,
                this.el,
            )
        );
    }
}


class Modal extends Component {
    render() {
        return (
            <ModalPortal>
                <div className="Modal">
                    <div className="Modal__Container">
                        <div className="Modal__Content">
                            {this.props.children}
                            <div className="Modal__CloseBtn" onClick={this.props.handleModalClose}>
                                &#x2718;
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Modal__Overlay"></div>
            </ModalPortal>
        );
    }
}

Modal.propTypes = {

};

export default Modal;