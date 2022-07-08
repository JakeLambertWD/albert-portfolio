import React from 'react';
import './Form.css';
import { ExternalLink } from 'react-external-link';
import emailjs from 'emailjs-com';
import { SiCanva } from 'react-icons/si';
import { AiFillLinkedin, AiOutlineGithub, AiFillFacebook, AiTwotonePhone, AiTwotoneMail, AiFillHome } from 'react-icons/ai';

const Form = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('service_7kpxzo8', 'template', e.target, 'user_dmJWXF83Ofz8Ghy0TLQbP').then(
			result => {
				console.log(result.text);
			},
			error => {
				console.log(error.text);
			}
		);
		e.target.reset();
	}

	return (
		<>
			<div class='container' id='contact'>
				<img src='img/shape.png' class='square' alt='' />
				<div class='form'>
					<div class='contact-info'>
						<h3 class='title'>Get in touch with me directly..</h3>
						<p class='text'>Have a question or want to work together?</p>

						<div class='info'>
							<div class='information'>
								<div class='icon' alt=''>
									<AiFillHome size='35px' />
								</div>
								<p>232 Caledonian Road, N1 0NG</p>
							</div>
							<div class='information'>
								<div class='icon' alt=''>
									<AiTwotoneMail size='35px' />
								</div>
								<p>albertseward97@gmail.com</p>
							</div>
							<div class='information'>
								<div class='icon' alt=''>
									<AiTwotonePhone size='35px' />
								</div>
								<p>07908157467</p>
							</div>
						</div>

						<div class='social-media'>
							<p>Connect with me</p>
							<div class='social-icons'>
								<ExternalLink className='social-icons-link linkedin' href='https://www.linkedin.com/in/albert-seward-378a211a1/'>
									<AiFillLinkedin size='35px' />
								</ExternalLink>
								{/* <ExternalLink className='social-icons-link github' href='https://github.com/JakeLambertWD?tab=repositories'>
									<AiOutlineGithub size='35px' />
								</ExternalLink> */}
								{/* <ExternalLink className='social-icons-link facebook' href='https://www.facebook.com/al.sloman.52'>
									<AiFillFacebook size='35px' />
								</ExternalLink> */}
								{/* <ExternalLink className='social-icons-link canva' href='https://www.canva.com/design/DADm9Ywcdvg/TbHitUTQs_TftJzq3j7_tA/edit'>
									<SiCanva size='35px' />
								</ExternalLink> */}
							</div>
						</div>
					</div>

					<div class='contact-form'>
						<form onSubmit={sendEmail} autocomplete='off'>
							<h3 class='title'>Send me a message :)</h3>
							<div class='input-container'>
								<input type='text' name='name' class='input' placeholder='name' required />
							</div>
							<div class='input-container'>
								<input type='email' name='email' class='input' placeholder='email' required />
							</div>
							<div class='input-container'>
								<input type='text' name='email' class='input' placeholder='subject' required />
							</div>
							<div class='input-container textarea'>
								<textarea name='message' class='input' placeholder='message' required></textarea>
							</div>
							<input type='submit' value='Send' class='btn' />
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Form;
