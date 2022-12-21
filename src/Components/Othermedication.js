import React from 'react'
import './Othermedication.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import notifications from "./notifications"
export default function Othermedication () {
	return (
		<div className='Othermedication_Othermedication'>
			<notifications className='notifications'/>
			<img className='Rectangle780' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<img className='Rectangle777' src = {ImgAsset.Othermedication_Rectangle777} />
			<Link to='/othermedicationentry'>
				<div className='Rectangle777_1'/>
			</Link>
			<span className='MONDAY'>MONDAY</span>
			<span className='_8152022'>8/15/2022</span>
			<img className='Rectangle783' src = {ImgAsset.Othermedication_Rectangle783} />
			<div className='Rectangle784'/>
			<span className='SATURDAY'>SATURDAY</span>
			<span className='_8132022'>8/13/2022</span>
			<span className='YES'><br/>YES</span>
			<img className='Rectangle785' src = {ImgAsset.Othermedication_Rectangle785} />
			<div className='Rectangle786'/>
			<span className='FRIDAY'>FRIDAY</span>
			<span className='_8122022'>8/12/2022</span>
			<span className='YES_1'><br/>YES</span>
			<img className='Rectangle797' src = {ImgAsset.Othermedication_Rectangle797} />
			<div className='Rectangle798'/>
			<span className='SUNDAY'>SUNDAY</span>
			<span className='_8142022'>8/14/2022</span>
			<span className='YES_2'><br/>YES</span>
			<img className='Rectangle809' src = {ImgAsset.Othermedication_Rectangle809} />
			<div className='Rectangle810'/>
			<span className='THURSDAY'>THURSDAY</span>
			<span className='_8112022'>8/11/2022</span>
			<span className='YES_3'><br/>YES</span>
			<img className='Rectangle811' src = {ImgAsset.Othermedication_Rectangle811} />
			<div className='Rectangle812'/>
			<span className='WEDNESDAY'>WEDNESDAY</span>
			<span className='_8102022'>8/10/2022</span>
			<span className='YES_4'><br/>YES</span>
			<div className='HomeBar'>
				<div className='Group47404'>
					<div className='background'/>
					<div className='background_1'/>
				</div>
				<div className='ButtonHome'>
					<div className='Home'>
						<img className='Rectangle2' src = {ImgAsset.Othermedication_Rectangle2} />
					</div>
				</div>
			</div>
			<img className='noteiconvectorsignsymbolisolatedwhitebackgroundnotelogoconceptnoteiconvectorisolatedwhitebackground134169208removebgpreview2' src = {ImgAsset.SleepMeditationsleeptracker_noteiconvectorsignsymbolisolatedwhitebackgroundnotelogoconceptnoteiconvectorisolatedwhitebackground134169208removebgpreview2} />
		</div>
	)
}