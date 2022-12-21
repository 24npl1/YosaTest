import React from 'react'
import './ResourcesHelp_1.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import Theme3DIdentityManSkinToneDefault from "./Theme3DIdentityManSkinToneDefault"
export default function ResourcesHelp_1 () {
	return (
		<div className='ResourcesHelp_1_ResourcesHelp'>
			<span className='ComingSoon'>Coming Soon</span>
			<Theme3DIdentityManSkinToneDefault className='Mechanic'/>
			<img className='Rectangle781' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<Link to='/homepagefirstversion_3'>
				<div className='HomeBar'>
					<div className='Group47392'>
						<div className='background'/>
						<div className='background_1'/>
					</div>
					<div className='ButtonHome'>
						<div className='Home'>
							<img className='Rectangle2' src = {ImgAsset.ResourcesHelp_1_Rectangle2} />
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}