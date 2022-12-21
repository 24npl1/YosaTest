import React from 'react'
import './Component1.css'
export default function Component1 (props) {
	return (
		<div className={`Component1_Component1 ${props.className}`}>
			<div className='Rectangle3'/>
			<span className='SignUp'>Sign Up</span>
		</div>
	)
}