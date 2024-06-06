import React from "react";

export default function Login() {

	return (
		<div class="container">
			<div class="form-group">
				<input class="active" type="button" value="Sign Up" />
				<input class="inactive" type="button" value="Log In" />
			</div>

			<p>Sign Up for Free</p>
			<form action="#">
				<div class="form-group">
					<input type="text" id="firstName" name="firstName" placeholder="First Name*" />
					<input type="text" id="lastName" name="lastName" placeholder="Last Name*" required />
				</div>
				<input type="email" id="email" name="email" placeholder="Email Address*" />
				<input type="password" id="password" name="password" placeholder="Set A Password*" />
				<input class="active" type="submit" value="GET STARTED" />
			</form>
		</div>
	);
}