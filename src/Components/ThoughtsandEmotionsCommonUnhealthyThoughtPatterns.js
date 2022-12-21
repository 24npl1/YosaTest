import React from 'react'
import './ThoughtsandEmotionsCommonUnhealthyThoughtPatterns.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import notifications from "./notifications"
export default function ThoughtsandEmotionsCommonUnhealthyThoughtPatterns () {
	return (
		<div className='ThoughtsandEmotionsCommonUnhealthyThoughtPatterns_ThoughtsandEmotionsCommonUnhealthyThoughtPatterns'>
			<img className='Rectangle780' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<div className='HomeBar'>
				<div className='Group47393'>
					<div className='background'/>
					<div className='background_1'/>
				</div>
				<div className='ButtonHome'>
					<div className='Home'>
						<img className='Rectangle2' src = {ImgAsset.ThoughtsandEmotionsCommonUnhealthyThoughtPatterns_Rectangle2} />
					</div>
				</div>
			</div>
			<div className='cutpworksheet'>
				<img className='Rectangle1969' src = {ImgAsset.ThoughtsandEmotionsCommonUnhealthyThoughtPatterns_2_Rectangle1969} />
			</div>
			<Link to='/thoughtsandemotionscbtfillouts'>
				<div className='ButtonExploreActive'>
					<div className='Group7'>
						<div className='Frame5'>
							<span className='Back'>Back</span>
						</div>
					</div>
				</div>
			</Link>
			<notifications className='notifications'/>
		</div>
	)
}