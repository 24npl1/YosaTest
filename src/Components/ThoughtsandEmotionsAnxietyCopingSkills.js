import React from 'react'
import './ThoughtsandEmotionsAnxietyCopingSkills.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function ThoughtsandEmotionsAnxietyCopingSkills () {
	return (
		<div className='ThoughtsandEmotionsAnxietyCopingSkills_ThoughtsandEmotionsAnxietyCopingSkills'>
			<div className='Frame19'>
				<img className='Rectangle1971' src = {ImgAsset.ThoughtsandEmotionsAnxietyCopingSkills_Rectangle1971} />
				<img className='Rectangle1972' src = {ImgAsset.ThoughtsandEmotionsAnxietyCopingSkills_Rectangle1972} />
			</div>
			<Link to='/homepagefirstversion_3'>
				<div className='HomeBar'>
					<div className='Group47393'>
						<div className='background'/>
						<div className='background_1'/>
					</div>
					<div className='ButtonHome'>
						<div className='Home'>
							<img className='Rectangle2' src = {ImgAsset.ThoughtsandEmotionsAnxietyCopingSkills_Rectangle2} />
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
			<img className='Rectangle1972_1' src = {ImgAsset.Openingscreenyosa_Rectangle781} />
		</div>
	)
}