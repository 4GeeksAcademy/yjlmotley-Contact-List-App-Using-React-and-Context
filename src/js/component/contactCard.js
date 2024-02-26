import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import exampleImage from "../../img/icons_user2-256.png";


const ContactCard = () => {
	const { full_name, email, address, phone } = contact;
	const { actions } = useContext(Context);

	return (
		<li className="list-group-item">
			<div className="row w-100 align-items-center">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img
						src={exampleImage}
						alt="user profile icon"
						width="110"
						className="rounded-circle mx-auto d-block img-fluid"
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className="float-end">
						<Link to={`/editContact/${contact.id}`}>
							<button className="btn">
								<i className="fas fa-pencil-alt mr-3"></i>
							</button>
						</Link>
						<button 
							className="btn"
							onClick={() => actions.deleteContacts(contact.id)}
						>
							<i className="fas fa-trash-alt"></i>
						</button>
					</div>
					<div className="text-start">
						<label className="name lead">Mike Anamendolla {full_name}</label>
						<br />
						<i className="fas fa-map-marker-alt text-muted mr-3"></i>
						<span className="text-muted">5842 Hillcrest Rd {address}</span>
						<br />
						<span
							className="fa fa-phone fa-fw text-muted mr-3"
							data-toggle="tooltip"
							title=""
							data-original-title="(870) 288-4149"></span>
						<span className="text-muted small">(870) 288-4149 {phone}</span>
						<br />
						<span
							className="fa fa-envelope fa-fw text-muted mr-3"
							data-toggle="tooltip"
							data-original-title=""
							title="">
						</span>
						<span className="text-muted small text-truncate">
							mike.ana@example.com {email}
						</span>
					</div>
				</div>
			</div>
		</li>
	);
};


export default ContactCard;