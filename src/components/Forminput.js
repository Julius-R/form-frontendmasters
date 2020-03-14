import React from 'react';
import Svg from './Svg';

export default function Forminput(props) {
	function id(event) {
		console.log(event.target.name);
	}
	return (
		<section
			className={`form-area ${
				props.formdata.valueDeclared === false ? 'err' : ''
			}`}
		>
			<input
				type={props.formdata.formType}
				placeholder={props.formdata.formName}
				name={props.formdata.formName}
				onChange={id}
			/>
			<p className="form-area__error-txt">
				<em>{props.formdata.formName} cannot be empty</em>
				<Svg />
			</p>
		</section>
	);
}
