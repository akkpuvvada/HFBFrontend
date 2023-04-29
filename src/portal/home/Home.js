import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import {
	AppBar,
	Tabs,
	Tab,
} from '@mui/material'
import './home.css'
import EventList from '../components/EventList'
import FoodList from '../components/FoodList'
import InventoryList from '../components/InventoryList'

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
							<>
								<EventList />
							</>
						)}
						{selectedTab === 2 && (
							<>
								<p>food list</p>
								<FoodList />
							</>
						)}
						{selectedTab === 3 && (
							<>
								<p>Inventory</p>
								<InventoryList />
							</>
						)}
					</div>
				</div>
			</Container>
		</React.Fragment>
	)
}

export default Home;