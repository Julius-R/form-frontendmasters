import React from 'react';
import Form from './Form';

export default function Formarea() {
	return (
		<section className="form-section">
			<article className="banner">
				<p className="banner__text">
					Try it free 7 day{' '}
					<span className="thin-txt">then $20/mo. thereafter</span>
				</p>
			</article>
			<Form />
		</section>
	);
}
