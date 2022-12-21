import React from 'react'
import './ResourcesHelp.css'
import ImgAsset from '../public'
import Theme3DIdentityManSkinToneDefault from "./Theme3DIdentityManSkinToneDefault"
import notifications from "./notifications"
export default function ResourcesHelp () {
	return (
		<div className='ResourcesHelp_ResourcesHelp'>
			<img className='Rectangle780' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<div className='HomeBar'>
				<div className='Group47393'>
					<div className='background'/>
					<div className='background_1'/>
				</div>
				<div className='ButtonHome'>
					<div className='Home'>
						<img className='Rectangle2' src = {ImgAsset.ResourcesHelp_Rectangle2} />
					</div>
				</div>
			</div>
			<span className='ComingSoon'>Coming Soon</span>
			<Theme3DIdentityManSkinToneDefault className='Mechanic'/>
			<notifications className='notifications'/>
		</div>
	)
}