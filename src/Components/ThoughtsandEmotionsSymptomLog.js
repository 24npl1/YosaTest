import React from 'react'
import './ThoughtsandEmotionsSymptomLog.css'
import ImgAsset from '../public'
import notifications from "./notifications"
import Table from "./Table"
export default function ThoughtsandEmotionsSymptomLog () {
	return (
		<div className='ThoughtsandEmotionsSymptomLog_ThoughtsandEmotionsSymptomLog'>
			<notifications className='notifications'/>
			<img className='Rectangle780' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<div className='HomeBar'>
				<div className='Group47393'>
					<div className='background'/>
					<div className='background_1'/>
				</div>
				<div className='ButtonHome'>
					<div className='Home'>
						<img className='Rectangle2' src = {ImgAsset.ThoughtsandEmotionsSymptomLog_Rectangle2} />
					</div>
				</div>
			</div>
			<div className='Frame17'>
				<Table className='Table'/>
			</div>
		</div>
	)
}