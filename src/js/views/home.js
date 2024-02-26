// import React, { useContext } from "react";
// import { Context } from "../store/appContext";
// import { Link } from "react-router-dom";
// import ContactCard from "../component/contactCard";
// import "../../styles/home.css"; //empty atm.............


// export const Home = () => {
// 	const { actions, store } = useContext(Context);

// 	return (
// 		<div className="container pb-1">
// 			<div className="d-flex justify-content-end my-3">
// 				<Link to="/addContact">
// 					<button className="btn btn-success">Add new contact</button>
// 				</Link>
// 			</div>
// 			<div
// 				id="contacts"
// 				className="panel-collapse collapse show mb-5"
// 				aria-expanded="true">
// 				<h1>TESTTTTTTTTTTTTTT</h1>
// 				<ul className="list-group pull-down" id="contact-list">
// 					{store.contacts.map((contact, index) => {
// 						<ContactCard
// 							key={index}
// 							contact={contact}
// 							className="contact-card"
// 						/>
// 					})}
// 					<h1>TESTTTTTTTTTTTTTT</h1>
// 					<h1>TESTTTTTTTTTTTTTT</h1>
// 					<h1>TESTTTTTTTTTTTTTT</h1>
// 				</ul>
// 			</div>
// 		</div>
// 	);
// };

//=====================
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import ContactCard from "../component/contactCard";
import "../../styles/home.css"; //empty atm.............


export const Home = () => {
	const { actions, store } = useContext(Context);

	return (
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
					{store.contacts.map((contact, index) => (
						<ContactCard
							key={index}
							contact={contact}
							className="contact-card"
						/>
					))}
				</ul>
			</div>
		</div>
	);
};