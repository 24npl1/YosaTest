import React from 'react'
import './SleepMeditationsleeptrackerentry.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import notifications from "./notifications"
export default function SleepMeditationsleeptrackerentry () {
	return (
		<div className='SleepMeditationsleeptrackerentry_SleepMeditationsleeptrackerentry'>
			<notifications className='notifications'/>
			<div className='Retangle'>
				<img className='Rectangle36' src = {ImgAsset.SleepMeditationsleeptrackerentry_Rectangle36} />
				<span className='entrydate'>8/15/2022 Sleep</span>
				<img className='Rectangle37' src = {ImgAsset.SleepMeditationsleeptrackerentry_Rectangle37} />
				<div className='Rectangle776'/>
				<span className='Whattimedidyougotosleep'>What time did you go to sleep?</span>
				<span className='Couldtypehereordropdownoftimes'>Could type here or dropdown of times</span>
				<span className='Couldtypehereordropdownoftimes_1'>Could type here or dropdown of times</span>
				<span className='Automaticallycalculatebasedonwhatuserputsinabove'>Automatically calculate based on what user puts in above</span>
				<span className='Whattimedidyouwakeup'>What time did you wake up?</span>
			</div>
			<img className='Rectangle780' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<span className='Totalhoursofsleep'>Total hours of sleep:<br/></span>
			<Link to='/sleepmeditationsleeptracker'>
				<div className='ButtonExploreActive'>
					<div className='Group7'>
						<div className='Frame5'>
							<span className='Back'>Back</span>
						</div>
					</div>
				</div>
			</Link>
			<div className='HomeBar'>
				<div className='Group47402'>
					<div className='background'/>
					<div className='background_1'/>
				</div>
				<div className='ButtonHome'>
					<div className='Home'>
						<img className='Rectangle2' src = {ImgAsset.SleepMeditationsleeptrackerentry_Rectangle2} />
					</div>
				</div>
			</div>
		</div>
	)
}