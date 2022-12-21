import React from 'react'
import './ThoughtsandEmotions3ColumnThoughtRecord_1.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function ThoughtsandEmotions3ColumnThoughtRecord_1 () {
	return (
		<div className='ThoughtsandEmotions3ColumnThoughtRecord_1_ThoughtsandEmotions3ColumnThoughtRecord'>
			<img className='Rectangle780' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<Link to='/homepagefirstversion_3'>
				<div className='HomeBar'>
					<div className='Group47393'>
						<div className='background'/>
						<div className='background_1'/>
					</div>
					<div className='ButtonHome'>
						<div className='Home'>
							<img className='Rectangle2' src = {ImgAsset.ThoughtsandEmotions3ColumnThoughtRecord_1_Rectangle2} />
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
			<div className='Rectangle1967'/>
			<div className='Rectangle1969'/>
			<div className='Rectangle1968'/>
			<div className='Frame15'>
				<span className='Thoughts'>           Thought(s)</span>
			</div>
			<div className='Frame15_1'>
				<span className='Feelings'>                  Feeling(s)</span>
			</div>
			<div className='Frame15_2'>
				<span className='Situation'>                   Situation</span>
			</div>
		</div>
	)
}