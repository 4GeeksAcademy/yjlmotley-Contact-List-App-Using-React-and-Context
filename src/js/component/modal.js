import React from "react";


const Modal = ({ closeModal, confirmDelete }) => {
    return (
        <div className="modal d-flex" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        <button type="button" className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <p>If you delete this things the entire universe will go down!</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>Oh no!</button>
                        <button type="button" className="btn btn-primary" onClick={confirmDelete}>Yes baby!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;