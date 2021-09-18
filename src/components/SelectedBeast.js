import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap/';

class SelectedBeast extends React.Component {

    render() {
        return (

            <Modal show={this.props.show} onHide={this.props.handleClose} className="Modal">
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.dataModel.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img variant="top" src={this.props.dataModel.image_url} alt={this.props.dataModel.title}
                        title={this.props.dataModel.title} style={{ width: '200px' }} />
                    <p>{this.props.dataModel.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        )
    }
}
export default SelectedBeast;