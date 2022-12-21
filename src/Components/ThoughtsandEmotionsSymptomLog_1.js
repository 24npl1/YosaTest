import React from 'react'
import './ThoughtsandEmotionsSymptomLog_1.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import Property1TableHeaderRow from "./Property1TableHeaderRow"
import Property1TableNormalRow from "./Property1TableNormalRow"
export default function ThoughtsandEmotionsSymptomLog_1 () {
	return (
		<div className='ThoughtsandEmotionsSymptomLog_1_ThoughtsandEmotionsSymptomLog'>
			<Link to='/homepagefirstversion_3'>
				<div className='HomeBar'>
					<div className='Group47393'>
						<div className='background'/>
						<div className='background_1'/>
					</div>
					<div className='ButtonHome'>
						<div className='Home'>
							<img className='Rectangle2' src = {ImgAsset.ThoughtsandEmotionsSymptomLog_1_Rectangle2} />
						</div>
					</div>
				</div>
			</Link>
			<img className='Rectangle1970' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<Link to='/thoughtsandemotionsfillouts'>
				<div className='ButtonExploreActive'>
					<div className='Group7'>
						<div className='Frame5'>
							<span className='Back'>    Back</span>
						</div>
					</div>
				</div>
			</Link>
			<div className='Table'>
				<Property1TableHeaderRow className='TableRow'/>
				<Property1TableNormalRow className='TableRow_1'/>
				<Property1TableNormalRow className='TableRow_2'/>
				<Property1TableNormalRow className='TableRow_3'/>
				<Property1TableNormalRow className='TableRow_4'/>
				<Property1TableNormalRow className='TableRow_5'/>
				<Property1TableNormalRow className='TableRow_6'/>
				<Property1TableNormalRow className='TableRow_7'/>
				<Property1TableNormalRow className='TableRow_8'/>
			</div>
		</div>
	)
}