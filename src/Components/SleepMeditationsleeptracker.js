import React from 'react'
import './SleepMeditationsleeptracker.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import notifications from "./notifications"
export default function SleepMeditationsleeptracker () {
	return (
		<div className='SleepMeditationsleeptracker_SleepMeditationsleeptracker'>
			<notifications className='notifications'/>
			<img className='Rectangle780' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<img className='Rectangle777' src = {ImgAsset.SleepMeditationsleeptracker_Rectangle777} />
			<div className='Rectangle777_1'/>
			<span className='MONDAY'>MONDAY</span>
			<span className='_8152022'>8/15/2022</span>
			<img className='Rectangle783' src = {ImgAsset.SleepMeditationsleeptracker_Rectangle783} />
			<div className='Rectangle784'/>
			<span className='SATURDAY'>SATURDAY</span>
			<span className='_8132022'>8/13/2022</span>
			<span className='_75hoursofsleep'><br/>7.5 hours of sleep</span>
			<img className='Rectangle785' src = {ImgAsset.SleepMeditationsleeptracker_Rectangle785} />
			<div className='Rectangle786'/>
			<span className='FRIDAY'>FRIDAY</span>
			<span className='_8122022'>8/12/2022</span>
			<span className='_9hoursofsleep'><br/>9 hours of sleep</span>
			<img className='Rectangle797' src = {ImgAsset.SleepMeditationsleeptracker_Rectangle797} />
			<div className='Rectangle798'/>
			<span className='SUNDAY'>SUNDAY</span>
			<span className='_8142022'>8/14/2022</span>
			<span className='_8hoursofsleep'><br/>8 hours of sleep</span>
			<img className='Rectangle809' src = {ImgAsset.SleepMeditationsleeptracker_Rectangle809} />
			<div className='Rectangle810'/>
			<span className='THURSDAY'>THURSDAY</span>
			<span className='_8112022'>8/11/2022</span>
			<span className='_7hoursofsleep'><br/>7 hours of sleep</span>
			<img className='Rectangle811' src = {ImgAsset.SleepMeditationsleeptracker_Rectangle811} />
			<div className='Rectangle812'/>
			<span className='WEDNESDAY'>WEDNESDAY</span>
			<span className='_8102022'>8/10/2022</span>
			<span className='_85hoursofsleep'><br/>8.5 hours of sleep</span>
			<div className='HomeBar'>
				<div className='Group47404'>
					<div className='background'/>
					<div className='background_1'/>
				</div>
				<div className='ButtonHome'>
					<div className='Home'>
						<img className='Rectangle2' src = {ImgAsset.SleepMeditationsleeptracker_Rectangle2} />
					</div>
				</div>
			</div>
			<Link to='/sleepmeditationsleeptrackerentry'>
				<img className='noteiconvectorsignsymbolisolatedwhitebackgroundnotelogoconceptnoteiconvectorisolatedwhitebackground134169208removebgpreview2' src = {ImgAsset.SleepMeditationsleeptracker_noteiconvectorsignsymbolisolatedwhitebackgroundnotelogoconceptnoteiconvectorisolatedwhitebackground134169208removebgpreview2} />
			</Link>
		</div>
	)
}