import React, { useState } from 'react';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		subject: '',
		message: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value
		}));
	};

	const handleReset = () => {
		setFormData(
			{
				firstName: '',
				lastName: '',
				email: '',
				subject: '',
				message: ''
			}
		)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log(formData);
		handleReset();
	};

	return (
		<div id="contact">
			<h2>Contact Us</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						type="text"
						id="firstName"
						name="firstName"
						placeholder="First Name*"
						required
						value={formData.firstName}
						onChange={handleChange}
					/>
					<input
						type="text"
						id="lastName"
						name="lastName"
						placeholder="Last Name*"
						required
						value={formData.lastName}
						onChange={handleChange}
					/>
				</div>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email*"
					required
					value={formData.email}
					onChange={handleChange}
				/>
				<input
					type="text"
					id="subject"
					name="subject"
					placeholder="Subject"
					value={formData.subject}
					onChange={handleChange}
				/>
				<textarea
					id="message"
					name="message"
					placeholder="Message*"
					required
					value={formData.message}
					onChange={handleChange}
				/>
				<input className="active" type="submit" value="SEND MESSAGE" />
			</form>
		</div>
	);
}