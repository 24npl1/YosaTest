import React from 'react'
import './Desktop2.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import Input from "./Input"
export default function Desktop2 () {
	return (
		<div className='Desktop2_Desktop2'>
			<img className='Rectangle781' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<Input className='Input'/>
			<Input className='Input_1'/>
			<Input className='Input_2'/>
			<span className='IagreetotheYOSATermsandConditions'>I agree to the YOSA Terms and Conditions</span>
			<Link to='/desktop3'>
				<span className='AlreadyhaveanaccountSignIn'>Already have an account? Sign In</span>
			</Link>
			<Link to='/homepagefirstversion_3'>
				<div className='ButtonExploreActive'>
					<div className='Group7'>
						<div className='Frame5'>
							<span className='SignUp'><br/>      Sign Up</span>
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}