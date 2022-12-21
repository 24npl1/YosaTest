import React from 'react'
import './ThoughtsandEmotionsNewjournalentryprompted_5.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import notifications from "./notifications"
export default function ThoughtsandEmotionsNewjournalentryprompted_5 () {
	return (
		<div className='ThoughtsandEmotionsNewjournalentryprompted_5_ThoughtsandEmotionsNewjournalentryprompted'>
			<notifications className='notifications'/>
			<div className='Retangle'>
				<img className='Rectangle36' src = {ImgAsset.ThoughtsandEmotionsNewjournalentryprompted_5_Rectangle36} />
				<span className='entrydate'>8/4/2022 Entry</span>
				<span className='journalprompt'>Write about someone you are grateful for. What do you admire about them? How have they helped you?</span>
				<span className='_1pm3pm'>1 pm - 3 pm</span>
				<img className='Rectangle37' src = {ImgAsset.ThoughtsandEmotionsNewjournalentryprompted_5_Rectangle37} />
				<div className='ButtonExploreActive'>
					<div className='Group7'>
						<div className='Frame5'>
							<span className='Prompted'>Prompted</span>
						</div>
					</div>
				</div>
				<Link to='/thoughtsandemotionsnewjournalentryprompted_9'>
					<div className='Rectangle776'/>
				</Link>
				<Link to='/thoughtsandemotionsnewjournalentryprompted_9'>
					<span className='Typehere'>Type here....</span>
				</Link>
			</div>
			<img className='Rectangle780' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<span className='DontwantapromptClickHere'>Don’t want a prompt? Click Here</span>
			<div className='HomeBar'>
				<div className='Group47394'>
					<div className='background'/>
					<div className='background_1'/>
				</div>
				<div className='ButtonHome'>
					<div className='Home'>
						<img className='Rectangle2' src = {ImgAsset.ThoughtsandEmotionsNewjournalentryprompted_5_Rectangle2} />
					</div>
				</div>
			</div>
		</div>
	)
}