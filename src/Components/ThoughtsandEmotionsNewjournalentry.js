import React from 'react'
import './ThoughtsandEmotionsNewjournalentry.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function ThoughtsandEmotionsNewjournalentry () {
	return (
		<div className='ThoughtsandEmotionsNewjournalentry_ThoughtsandEmotionsNewjournalentry'>
			<div className='Retangle'>
				<img className='Rectangle36' src = {ImgAsset.ThoughtsandEmotionsNewjournalentry_Rectangle36} />
				<span className='entrydate'>8/4/2022 Entry</span>
				<span className='_1pm3pm'>1 pm - 3 pm</span>
				<img className='Rectangle37' src = {ImgAsset.ThoughtsandEmotionsNewjournalentry_Rectangle37} />
				<div className='ButtonExploreActive'>
					<div className='Group7'>
						<div className='Frame5'>
							<span className='Unprompted'>Unprompted</span>
						</div>
					</div>
				</div>
				<div className='Rectangle776'/>
				<span className='Typehere'>Type here....</span>
			</div>
			<Link to='/thoughtsandemotionsnewjournalentry_1'>
				<span className='WantapromptClickHere'>Want a prompt? Click Here</span>
			</Link>
			<Link to='/homepagefirstversion_3'>
				<div className='HomeBar'>
					<div className='Group47393'>
						<div className='background'/>
						<div className='background_1'/>
					</div>
					<div className='ButtonHome'>
						<div className='Home'>
							<img className='Rectangle2' src = {ImgAsset.ThoughtsandEmotionsNewjournalentry_Rectangle2} />
						</div>
					</div>
				</div>
			</Link>
			<img className='Rectangle782' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
		</div>
	)
}