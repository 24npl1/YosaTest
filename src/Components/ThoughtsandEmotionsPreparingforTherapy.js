import React from 'react'
import './ThoughtsandEmotionsPreparingforTherapy.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function ThoughtsandEmotionsPreparingforTherapy () {
	return (
		<div className='ThoughtsandEmotionsPreparingforTherapy_ThoughtsandEmotionsPreparingforTherapy'>
			<div className='Frame18'>
				<img className='Rectangle1971' src = {ImgAsset.ThoughtsandEmotionsPreparingforTherapy_Rectangle1971} />
			</div>
			<Link to='/homepagefirstversion_3'>
				<div className='HomeBar'>
					<div className='Group47393'>
						<div className='background'/>
						<div className='background_1'/>
					</div>
					<div className='ButtonHome'>
						<div className='Home'>
							<img className='Rectangle2' src = {ImgAsset.ThoughtsandEmotionsPreparingforTherapy_Rectangle2} />
						</div>
					</div>
				</div>
			</Link>
			<Link to='/thoughtsandemotionsfillouts'>
				<div className='ButtonExploreActive'>
					<div className='Group7'>
						<div className='Frame5'>
							<span className='Back'>    Back</span>
						</div>
					</div>
				</div>
			</Link>
			<img className='Rectangle780' src = {ImgAsset.Openingscreenyosa_Rectangle781} />
		</div>
	)
}