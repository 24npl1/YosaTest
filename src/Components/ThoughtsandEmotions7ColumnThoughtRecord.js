import React from 'react'
import './ThoughtsandEmotions7ColumnThoughtRecord.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import notifications from "./notifications"
export default function ThoughtsandEmotions7ColumnThoughtRecord () {
	return (
		<div className='ThoughtsandEmotions7ColumnThoughtRecord_ThoughtsandEmotions7ColumnThoughtRecord'>
			<img className='Rectangle780' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<div className='HomeBar'>
				<div className='Group47393'>
					<div className='background'/>
					<div className='background_1'/>
				</div>
				<div className='ButtonHome'>
					<div className='Home'>
						<img className='Rectangle2' src = {ImgAsset.ThoughtsandEmotions7ColumnThoughtRecord_Rectangle2} />
					</div>
				</div>
			</div>
			<div className='_7columntr'>
				<img className='Rectangle1970' src = {ImgAsset.ThoughtsandEmotions7ColumnThoughtRecord_1_Rectangle1970} />
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