import React from 'react'
import './Signin.css'
import ImgAsset from '../public'
import notifications from "./notifications"
import Input from "./Input"
export default function Signin () {
	return (
		<div className='Signin_Signin'>
			<notifications className='notifications'/>
			<span className='WelcomeBack'>Welcome Back!</span>
			<Input className='Input'/>
			<Input className='Input_1'/>
			<span className='ForgotPasswordClickHere'>Forgot Password? Click Here</span>
			<span className='DonthaveanaccountSignUp'>Don’t have an account? Sign Up</span>
			<img className='Rectangle783' src = {ImgAsset.Openingscreenyosa_Rectangle781} />
			<div className='ButtonExploreActive'>
				<div className='Group7'>
					<div className='Frame5'>
						<span className='SignIn'>Sign In</span>
					</div>
				</div>
			</div>
		</div>
	)
}