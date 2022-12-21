import React from 'react'
import './Eye.css'
import ImgAsset from '../public'
export default function Eye (props) {
	return (
		<div className={`Eye_Eye ${props.className}`}>
			<img className='Eye_1' src = {ImgAsset.Eye_Eye_1} />
		</div>
	)
}