import React from 'react'
import './OtherSubstanceLogEntry.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function OtherSubstanceLogEntry () {
	return (
		<div className='OtherSubstanceLogEntry_OtherSubstanceLogEntry'>
			<img className='Rectangle780' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<Link to='/homepagefirstversion_3'>
				<div className='HomeBar'>
					<div className='Group47392'>
						<div className='background'/>
						<div className='background_1'/>
					</div>
					<div className='ButtonHome'>
						<div className='Home'>
							<img className='Rectangle2' src = {ImgAsset.OtherSubstanceLogEntry_Rectangle2} />
						</div>
					</div>
				</div>
			</Link>
			<div className='Retangle'>
				<img className='Rectangle36' src = {ImgAsset.OtherSubstanceLogEntry_Rectangle36} />
				<span className='entrydate'>8/15/2022 Drinks Log</span>
				<img className='Rectangle37' src = {ImgAsset.OtherSubstanceLogEntry_Rectangle37} />
				<div className='Rectangle776'/>
			</div>
			<Link to='/othersubstancelog'>
				<div className='ButtonExploreActive'>
					<div className='Group7'>
						<div className='Frame5'>
							<span className='Back'>    Back</span>
						</div>
					</div>
				</div>
			</Link>
			<span className='Howmanydrinksdidyouhavetoday'>How many drinks did you have today?<br/></span>
			<span className='Dropdownboxtoselectnumberofdrinks'>Dropdown box to select number of drinks</span>
		</div>
	)
}