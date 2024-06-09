import React, { useState } from 'react';

export default function Login({ onSignIn, onClose }) {
	const [isSignUp, setIsSignUp] = useState(true);

	const [userDetails, setUserDetails] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserDetails(prevDetails => ({
			...prevDetails,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Here you would usually send a request to your backend to authenticate the user
		if (isSignUp) {
			// Sign up logic
			console.log('Sign up details:', userDetails);
			setIsSignUp(false);
		} else {
			// Login logic
			console.log('Login details:', userDetails);
			onSignIn(userDetails.email); // Mock sign in
			onClose();
		}
	};

	const signUpForm = (
		<div className="form-group">
			<input
				type="text"
				id="firstName"
				name="firstName"
				placeholder="First Name*"
				required
				value={userDetails.firstName}
				onChange={handleChange}
			/>
			<input
				type="text"
				id="lastName"
				name="lastName"
				placeholder="Last Name*"
				required
				value={userDetails.lastName}
				onChange={handleChange}
			/>
		</div>
	);

	return (
		<div className="login-container">
			<div className="form-group">
				<input
					className={isSignUp ? 'active' : 'inactive'}
					type="button"
					value="Sign Up"
					onClick={() => setIsSignUp(true)}
				/>
				<input
					className={isSignUp ? 'inactive' : 'active'}
					type="button"
					value="Log In"
					onClick={() => setIsSignUp(false)}
				/>
			</div>

			{isSignUp ? <p>Sign Up for Free</p> : <p>Login to Your Account</p>}
			<form onSubmit={handleSubmit}>
				{isSignUp ? signUpForm : ''}
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email Address*"
					required
					value={userDetails.email}
					onChange={handleChange}
				/>
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Password*"
					required
					value={userDetails.password}
					onChange={handleChange}
				/>
				<input className="active" type="submit" value={isSignUp ? "GET STARTED" : "LOG IN"} />
			</form>
		</div>
	);
}