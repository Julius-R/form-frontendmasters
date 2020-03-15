import React, { Component } from 'react';
import Svg from './Svg';
import { Formik, useFormik } from 'formik';

const validate = values => {
	const errors = {};
	if (values.firstname == '') {
		errors.firstname = 'First name field cannot be empty';
	}
	if (values.lastname == '') {
		errors.lastname = 'Last name field cannot be empty';
	}
	if (values.password == '') {
		errors.password = 'Password field cannot be empty';
	}
	if (values.firstname == '') {
		errors.firstname = 'First name field cannot be empty';
	}
	return errors;
};

export default function Form() {
	const formik = useFormik({
		initialValues: {
			email: '',
			firstname: '',
			lastname: '',
			password: ''
		},
		validate,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		}
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<section
				className={`form-area ${
					formik.touched.firstname && formik.errors.firstname
						? 'err'
						: ''
				}`}
			>
				<input
					type="text"
					value={formik.values.firstname}
					placeholder="First Name"
					name="firstname"
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				<p className="form-area__error-txt">
					<em>{formik.errors.firstname}</em>
					<Svg />
				</p>
			</section>
			<section
				className={`form-area ${
					formik.touched.lastname && formik.errors.lastname
						? 'err'
						: ''
				}`}
			>
				<input
					type="text"
					value={formik.values.lastname}
					placeholder="Last Name"
					name="lastname"
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				<p className="form-area__error-txt">
					<em>{formik.errors.lastname}</em>
					<Svg />
				</p>
			</section>
			<section
				className={`form-area ${
					formik.touched.email && formik.errors.email ? 'err' : ''
				}`}
			>
				<input
					type="email"
					value={formik.values.email}
					placeholder="Email"
					name="email"
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				<p className="form-area__error-txt">
					<em>{formik.errors.email}</em>
					<Svg />
				</p>
			</section>
			<section
				className={`form-area ${
					formik.touched.password && formik.errors.password
						? 'err'
						: ''
				}`}
			>
				<input
					type="password"
					value={formik.values.password}
					placeholder="Password"
					name="password"
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				<p className="form-area__error-txt">
					<em>{formik.errors.password}</em>
					<Svg />
				</p>
			</section>
			<button type="submit" className="btn">
				Claim your free trial
			</button>
			<p className="submit-txt">
				By clicking the button, you are agreeing to our{' '}
				<span className="red-txt">
					<a href="#">Terms and Services</a>
				</span>
			</p>
		</form>
	);
}
