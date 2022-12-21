import React from 'react'
import './Signup.css'
import ImgAsset from '../public'
import notifications from "./notifications"
import Input from "./Input"
export default function Signup () {
	return (
		<div className='Signup_Signup'>
			<notifications className='notifications'/>
			<Input className='Input'/>
			<Input className='Input_1'/>
			<Input className='Input_2'/>
			<span className='IagreetotheYOSATermsandConditions'>I agree to the YOSA Terms and Conditions</span>
			<div className='checksquare'>
				<img className='Vector' src = {ImgAsset.Signup_Vector} />
			</div>
			<span className='AlreadyhaveanaccountSignIn'>Already have an account? Sign In</span>
			<span className='CreateAccount'>Create Account</span>
			<img className='Rectangle782' src = {ImgAsset.Openingscreenyosa_Rectangle781} />
			<div className='ButtonExploreActive'>
				<div className='Group7'>
					<div className='Frame5'>
						<span className='SignUp'>Sign Up</span>
					</div>
				</div>
			</div>
		</div>
	)
}