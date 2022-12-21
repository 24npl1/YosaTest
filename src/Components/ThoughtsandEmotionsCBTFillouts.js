import React from 'react'
import './ThoughtsandEmotionsCBTFillouts.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import notifications from "./notifications"
export default function ThoughtsandEmotionsCBTFillouts () {
	return (
		<div className='ThoughtsandEmotionsCBTFillouts_ThoughtsandEmotionsCBTFillouts'>
			<img className='Rectangle780' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<div className='HomeBar'>
				<div className='Group47393'>
					<div className='background'/>
					<div className='background_1'/>
				</div>
				<div className='ButtonHome'>
					<div className='Home'>
						<img className='Rectangle2' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle2} />
					</div>
				</div>
			</div>
			<Link to='/thoughtsandemotions3columnthoughtrecord'>
				<span className='_3ColumnThoughtRecordClickHere'>3 Column Thought Record Click Here</span>
			</Link>
			<Link to='/thoughtsandemotions7columnthoughtrecord'>
				<span className='_7ColumnThoughtRecordClickHere'>7 Column Thought Record Click Here</span>
			</Link>
			<Link to='/thoughtsandemotionscommonunhealthythoughtpatterns'>
				<span className='CommonUnhealthyThoughtPatternsClickHere'>Common Unhealthy Thought Patterns Click Here</span>
			</Link>
			<Link to='/thoughtsandemotionscommonunhealthythoughtpatterns_1'>
				<span className='EmotionRegulationClickHere'>Emotion Regulation Click Here</span>
			</Link>
			<span className='CognitiveConceptualizationClickHere'>Cognitive Conceptualization Click Here</span>
			<span className='FillDrainMyBucketListClickHere'>Fill / Drain My Bucket List Click Here</span>
			<notifications className='notifications'/>
		</div>
	)
}