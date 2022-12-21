import React from 'react'
import './ThoughtsandEmotionsCommonUnhealthyThoughtPatterns_1.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import notifications from "./notifications"
export default function ThoughtsandEmotionsCommonUnhealthyThoughtPatterns_1 () {
	return (
		<div className='ThoughtsandEmotionsCommonUnhealthyThoughtPatterns_1_ThoughtsandEmotionsCommonUnhealthyThoughtPatterns'>
			<img className='Rectangle780' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<div className='HomeBar'>
				<div className='Group47393'>
					<div className='background'/>
					<div className='background_1'/>
				</div>
				<div className='ButtonHome'>
					<div className='Home'>
						<img className='Rectangle2' src = {ImgAsset.ThoughtsandEmotionsCommonUnhealthyThoughtPatterns_1_Rectangle2} />
					</div>
				</div>
			</div>
			<div className='cutpworksheet'>
				<img className='Rectangle1969' src = {ImgAsset.ThoughtsandEmotionsCommonUnhealthyThoughtPatterns_1_Rectangle1969} />
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
			<div className='cutpworksheet_1'>
				<img className='Rectangle1969_1' src = {ImgAsset.ThoughtsandEmotionsCommonUnhealthyThoughtPatterns_1_Rectangle1969_1} />
			</div>
			<notifications className='notifications'/>
		</div>
	)
}