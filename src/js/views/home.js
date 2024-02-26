import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "../component/contactCard";
import "../../styles/home.css"; //empty atm.............


export const Home = () => (
	<div className="container pb-1">
		<div className="d-flex justify-content-end my-3">
			<Link to="/addContact">
				<button className="btn btn-success">Add new contact</button>
			</Link>
		</div>
		<div
			id="contacts"
			className="panel-collapse collapse show mb-5"
			aria-expanded="true">
			<ul className="list-group pull-down" id="contact-list">
				<ContactCard />
				<ContactCard />
				<ContactCard />
				<ContactCard />
			</ul>
		</div>
	</div>
);