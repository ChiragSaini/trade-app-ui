import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MyModal = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <span onClick={toggle}>{buttonLabel}</span>
            <Modal isOpen={modal} toggle={toggle} className={className} scrollable={true}>
                <ModalHeader toggle={toggle}>Terms and Conditions</ModalHeader>
                <ModalBody>
                    {props.body}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Accept</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
export default MyModal