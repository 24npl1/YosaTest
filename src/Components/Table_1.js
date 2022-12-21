import React from 'react'
import './Table_1.css'
import Property1TableHeaderRow from "./Property1TableHeaderRow"
import Property1TableNormalRow from "./Property1TableNormalRow"
export default function Table_1 (props) {
	return (
		<div className={`Table_1_Table ${props.className}`}>
			<Property1TableHeaderRow className='TableRow'/>
			<Property1TableNormalRow className='TableRow_1'/>
			<Property1TableNormalRow className='TableRow_2'/>
			<Property1TableNormalRow className='TableRow_3'/>
			<Property1TableNormalRow className='TableRow_4'/>
			<Property1TableNormalRow className='TableRow_5'/>
			<Property1TableNormalRow className='TableRow_6'/>
			<Property1TableNormalRow className='TableRow_7'/>
			<Property1TableNormalRow className='TableRow_8'/>
		</div>
	)
}