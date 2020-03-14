import React, { Component } from 'react';
import Forminput from './Forminput';

class Form extends Component {
	state = {
		formInpts: [
			{
				formName: 'First Name',
				formType: 'text',
				valueDeclared: false
			},
			{
				formName: 'Last Name',
				formType: 'text',
				valueDeclared: true
			},
			{
				formName: 'Email',
				formType: 'email',
				valueDeclared: false
			},
			{
				formName: 'Password',
				formType: 'password',
				valueDeclared: false
			}
		]
	};
	chackMe = val => {
		console.log(this);
	};
	render() {
		return (
			<form action="#">
				{this.state.formInpts.map(formdata => {
					return (
						<Forminput
							key={formdata.formName}
							formdata={formdata}
						/>
					);
				})}
				<button className="btn">Claim your free trial</button>
				<p className="submit-txt">
					By clicking the button, you are agreeing to our{' '}
					<span className="red-txt">
						<a href="#">Terms and Services</a>
					</span>
				</p>
			</form>
		);
	}
}

export default Form;
