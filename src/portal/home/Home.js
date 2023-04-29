import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import {
	Grid,
	Breadcrumbs,
	Link,
	Typography,
	AppBar,
	Tabs,
	Tab,
} from '@mui/material'
import './home.css'

const Home = () => {
	const [selectedTab, setSelectedTab] = useState(0)

	const handleTabChange = (event, newValue) => {
		setSelectedTab(newValue)
	}

	return (
		<React.Fragment>
			<Container className='py-5'>
				<div className="appBarContainer">
					<AppBar position="static" className="appBar">
						<Tabs value={selectedTab} onChange={handleTabChange}>
							<Tab label="Create Event" />
							<Tab label="View Event" />
							<Tab label="Food List" />
							<Tab label="Inventory" />
						</Tabs>
					</AppBar>
					<div className='content-section'>
						{selectedTab === 0 && (
							<p>create event</p>
						)}
						{selectedTab === 1 && (
							<p>view event</p>
						)}
						{selectedTab === 2 && (
							<p>food list</p>
						)}
						{selectedTab === 3 && (
							<p>Inventory</p>
						)}
					</div>
				</div>
			</Container>
		</React.Fragment>
	)
}

export default Home;