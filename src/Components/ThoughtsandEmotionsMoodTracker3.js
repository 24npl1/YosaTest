import React from 'react'
import './ThoughtsandEmotionsMoodTracker3.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import TypeNeutralStatusOn from "./TypeNeutralStatusOn"
import HeadYellow from "./HeadYellow"
import MouthPlain from "./MouthPlain"
import EyesPlain from "./EyesPlain"
export default function ThoughtsandEmotionsMoodTracker3 () {
	return (
		<div className='ThoughtsandEmotionsMoodTracker3_ThoughtsandEmotionsMoodTracker3'>
			<TypeNeutralStatusOn className='Slider'/>
			<span className='Imokay'>I’m okay</span>
			<span className='Howareyoufeelingtoday'>How are you feeling today?</span>
			<div className='Emoji1'>
				<HeadYellow className='HeadYellow'/>
				<div className='BlushCheeks'>
					<img className='L' src = {ImgAsset.ThoughtsandEmotionsMoodTracker3_L} />
				</div>
				<div className='SweatDrop'>
					<img className='SweatDrop_1' src = {ImgAsset.ThoughtsandEmotionsMoodTracker3_SweatDrop_1} />
				</div>
				<MouthPlain className='MouthPlain'/>
				<EyesPlain className='EyesPlain'/>
				<div className='Halo'>
					<img className='Vector' src = {ImgAsset.ThoughtsandEmotionsMoodTracker3_Vector} />
					<img className='Vector_1' src = {ImgAsset.ThoughtsandEmotionsMoodTracker3_Vector_1} />
				</div>
			</div>
			<div className='Rectangle1942'/>
			<span className='SUBMIT'>SUBMIT</span>
			<Link to='/homepagefirstversion_3'>
				<div className='HomeBar'>
					<div className='Group47397'>
						<div className='background'/>
						<div className='background_1'/>
					</div>
					<div className='ButtonHome'>
						<div className='Home'>
							<img className='Rectangle2' src = {ImgAsset.ThoughtsandEmotionsMoodTracker3_Rectangle2} />
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}