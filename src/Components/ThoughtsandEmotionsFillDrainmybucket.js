import React from 'react'
import './ThoughtsandEmotionsFillDrainmybucket.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function ThoughtsandEmotionsFillDrainmybucket () {
	return (
		<div className='ThoughtsandEmotionsFillDrainmybucket_ThoughtsandEmotionsFillDrainmybucket'>
			<img className='Rectangle780' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<Link to='/homepagefirstversion_3'>
				<div className='HomeBar'>
					<div className='Group47393'>
						<div className='background'/>
						<div className='background_1'/>
					</div>
					<div className='ButtonHome'>
						<div className='Home'>
							<img className='Rectangle2' src = {ImgAsset.ThoughtsandEmotionsFillDrainmybucket_Rectangle2} />
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
			<div className='Frame15'>
				<span className='Thoughts'>            Things that Drain My Bucket</span>
			</div>
			<div className='Frame15_1'>
				<span className='ThingsthatFillMyBucket'>                 Things that Fill My Bucket</span>
			</div>
		</div>
	)
}