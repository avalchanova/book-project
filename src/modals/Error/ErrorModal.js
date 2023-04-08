import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useOnError } from '../../hooks/useOnError.js';

export const ErrorModal = ({ title, body, errorKey }) => {
    const [show, setShow] = useState(false);

    const { error } = useOnError(errorKey);

    const handleClose = () => {
        setShow(false);
        localStorage.removeItem(errorKey);
    };

    useEffect(() => {
        if (error) {
            setShow(true);
        }
    }, [error, setShow]);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
