import React from 'react'
import './Desktop3.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import Input from "./Input"
export default function Desktop3 () {
	return (
		<div className='Desktop3_Desktop3'>
			<img className='Rectangle781' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<Input className='Input'/>
			<Input className='Input_1'/>
			<span className='IagreetotheYOSATermsandConditions'>I agree to the YOSA Terms and Conditions</span>
			<Link to='/desktop2'>
				<span className='DonthaveanaccountSignUp'>Don’t have an account? Sign Up</span>
			</Link>
			<Link to='/homepagefirstversion_3'>
				<div className='ButtonExploreActive'>
					<div className='Group7'>
						<div className='Frame5'>
							<span className='SignIn'><br/>      Sign In</span>
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}