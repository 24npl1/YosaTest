import React from 'react'
import './ThoughtsandEmotions3ColumnThoughtRecord.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import notifications from "./notifications"
export default function ThoughtsandEmotions3ColumnThoughtRecord () {
	return (
		<div className='ThoughtsandEmotions3ColumnThoughtRecord_ThoughtsandEmotions3ColumnThoughtRecord'>
			<img className='Rectangle780' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<div className='HomeBar'>
				<div className='Group47393'>
					<div className='background'/>
					<div className='background_1'/>
				</div>
				<div className='ButtonHome'>
					<div className='Home'>
						<img className='Rectangle2' src = {ImgAsset.ThoughtsandEmotions3ColumnThoughtRecord_Rectangle2} />
					</div>
				</div>
			</div>
			<div className='_3columns'>
				<div className='_3columnnames'>
					<div className='Frame14'>
						<span className='Feelings'>           Feeling(s)</span>
					</div>
					<div className='Frame13'>
						<span className='Thoughts'>           Thought(s)</span>
					</div>
					<div className='Frame12'>
						<span className='Situation'>           Situation</span>
					</div>
				</div>
				<div className='Textboxesforall3columns'>
					<div className='Rectangle1966'/>
					<span className='Writehere'>Write here...</span>
					<div className='Rectangle1967'/>
					<span className='Writehere_1'>Write here...</span>
					<div className='Rectangle1968'/>
					<span className='Writehere_2'>Write here...</span>
				</div>
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