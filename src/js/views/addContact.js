import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const AddContact = () => {
	const { actions, store } = useContext(Context);
	const navigate = useNavigate();

	const [ contactData, setContactData ] = useState({
		agenda_slug: "yjlmotley",
	});

	const handleChange = (e) => {
		setContactData({ ...contactData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await actions.addContacts(contactData);
			await actions.getContacts();
			navigate("/");
		} catch (error) {
			console.error("Error adding contact", error);
		}
	};


	return (
		<div className="container">
			<h1 className="text-center mt-5">Add a new contact</h1>
			<form onSubmit={handleSubmit} className="contact-form">
				<div className="form-group">
					<label>Full Name</label>
					<input
						type="text"
						name="full_name"
						className="form-control"
						placeholder="Full Name"
						onChange={(e) => {
							handleChange(e);
						}}
						required
					/>
				</div>
				<div className="form-group">
					<label>Email</label>
					<input
						type="email"
						name="email"
						className="form-control"
						placeholder="Enter email"
						onChange={(e) => {
							handleChange(e);
						  }}
						  required
					/>
				</div>
				<div className="form-group">
					<label>Phone</label>
					<input
						type="text"
						name="phone"
						className="form-control"
						placeholder="Enter phone"
						onChange={(e) => {
							handleChange(e);
						  }}
						  required
					/>
				</div>
				<div className="form-group">
					<label>Address</label>
					<input
						type="text"
						name="address"
						className="form-control"
						placeholder="Enter address"
						onChange={(e) => {
							handleChange(e);
						  }}
						  required
					/>
				</div>
				{/* If contact.id doesn't exist, Add Contact button and vice versa*/}
				<button
					type="submit"
					className="btn btn-primary form-control mt-3">
					{contactData.id ? "Update Contact" : "save"}
				</button>
			</form>
			<a href="/">or get back to contacts</a>
		</div>
	);
};