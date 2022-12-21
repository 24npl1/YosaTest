import React from 'react'
import './OtherMedicationEntry.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function OtherMedicationEntry () {
	return (
		<div className='OtherMedicationEntry_OtherMedicationEntry'>
			<img className='Rectangle780' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<Link to='/homepagefirstversion_3'>
				<div className='HomeBar'>
					<div className='Group47392'>
						<div className='background'/>
						<div className='background_1'/>
					</div>
					<div className='ButtonHome'>
						<div className='Home'>
							<img className='Rectangle2' src = {ImgAsset.OtherMedicationEntry_Rectangle2} />
						</div>
					</div>
				</div>
			</Link>
			<div className='Retangle'>
				<img className='Rectangle36' src = {ImgAsset.OtherMedicationEntry_Rectangle36} />
				<span className='entrydate'>8/15/2022 Medication</span>
				<img className='Rectangle37' src = {ImgAsset.OtherMedicationEntry_Rectangle37} />
				<div className='Rectangle776'/>
			</div>
			<Link to='/othermedicationlog'>
				<div className='ButtonExploreActive'>
					<div className='Group7'>
						<div className='Frame5'>
							<span className='Back'>    Back</span>
						</div>
					</div>
				</div>
			</Link>
			<span className='Didyoutakeyourmorningmedication'>Did you take your morning medication?<br/></span>
			<span className='Didyoutakeyourafternoonmedication'>Did you take your afternoon medication?<br/></span>
			<span className='Didyoutakeyournightmedication'>Did you take your night medication?<br/></span>
			<span className='Allsetfortoday'>All set for today?</span>
			<span className='YESorNO'>YES or NO</span>
			<span className='YESorNO_1'>YES or NO</span>
			<span className='YESorNO_2'>YES or NO</span>
			<span className='YESorNO_3'>YES or NO</span>
		</div>
	)
}