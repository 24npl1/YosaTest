import React from 'react'
import './SleepMeditationsleeptrackerentry_1.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function SleepMeditationsleeptrackerentry_1 () {
	return (
		<div className='SleepMeditationsleeptrackerentry_1_SleepMeditationsleeptrackerentry'>
			<img className='Rectangle780' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<Link to='/homepagefirstversion_3'>
				<div className='HomeBar'>
					<div className='Group47392'>
						<div className='background'/>
						<div className='background_1'/>
					</div>
					<div className='ButtonHome'>
						<div className='Home'>
							<img className='Rectangle2' src = {ImgAsset.SleepMeditationsleeptrackerentry_1_Rectangle2} />
						</div>
					</div>
				</div>
			</Link>
			<div className='Retangle'>
				<img className='Rectangle36' src = {ImgAsset.SleepMeditationsleeptrackerentry_1_Rectangle36} />
				<span className='entrydate'>8/15/2022 Sleep</span>
				<img className='Rectangle37' src = {ImgAsset.SleepMeditationsleeptrackerentry_1_Rectangle37} />
				<div className='Rectangle776'/>
				<span className='Whattimedidyougotosleep'>What time did you go to sleep?</span>
				<span className='Couldtypehereordropdownoftimes'>Could type here or dropdown of times</span>
				<span className='Couldtypehereordropdownoftimes_1'>Could type here or dropdown of times</span>
				<span className='Automaticallycalculatebasedonwhatuserputsinabove'>Automatically calculate based on what user puts in above</span>
				<span className='Whattimedidyouwakeup'>What time did you wake up?</span>
			</div>
			<Link to='/sleepmeditationsleeptracker_1'>
				<div className='ButtonExploreActive'>
					<div className='Group7'>
						<div className='Frame5'>
							<span className='Back'>    Back</span>
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}