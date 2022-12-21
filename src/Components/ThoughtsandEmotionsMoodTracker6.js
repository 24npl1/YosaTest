import React from 'react'
import './ThoughtsandEmotionsMoodTracker6.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import TypeVeryBadStatusOn from "./TypeVeryBadStatusOn"
import HeadBrown from "./HeadBrown"
import MouthSad from "./MouthSad"
import EyesSad from "./EyesSad"
import notifications from "./notifications"
export default function ThoughtsandEmotionsMoodTracker6 () {
	return (
		<div className='ThoughtsandEmotionsMoodTracker6_ThoughtsandEmotionsMoodTracker6'>
			<TypeVeryBadStatusOn className='Slider'/>
			<span className='Verybad'>Very bad</span>
			<span className='Howareyoufeelingtoday'>How are you feeling today?</span>
			<div className='Emoji12'>
				<HeadBrown className='HeadBrown'/>
				<div className='BlushCheeks'>
					<img className='L' src = {ImgAsset.ThoughtsandEmotionsMoodTracker6_L} />
				</div>
				<div className='SweatDrop'>
					<img className='SweatDrop_1' src = {ImgAsset.ThoughtsandEmotionsMoodTracker6_SweatDrop_1} />
				</div>
				<MouthSad className='MouthSad'/>
				<EyesSad className='EyesSad'/>
				<div className='Halo'>
					<img className='Vector' src = {ImgAsset.ThoughtsandEmotionsMoodTracker6_Vector} />
					<img className='Vector_1' src = {ImgAsset.ThoughtsandEmotionsMoodTracker6_Vector_1} />
				</div>
				<img className='TearDropL' src = {ImgAsset.ThoughtsandEmotionsMoodTracker6_TearDropL} />
			</div>
			<notifications className='notifications'/>
			<div className='Rectangle1941'/>
			<span className='SUBMIT'>SUBMIT</span>
			<div className='HomeBar'>
				<div className='Group47395'>
					<div className='background'/>
					<div className='background_1'/>
				</div>
				<div className='ButtonHome'>
					<div className='Home'>
						<img className='Rectangle2' src = {ImgAsset.ThoughtsandEmotionsMoodTracker6_Rectangle2} />
					</div>
				</div>
			</div>
		</div>
	)
}