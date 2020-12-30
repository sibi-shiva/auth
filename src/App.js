import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../src/components/Dashboard/Dashboard';
import Preferences from '../src/components/Preferences/Preferences';
import Login from '../src/components/Login/Login';
import useToken from './useToken';

function App() {
	const { token, setToken } = useToken();

	if (!token) {
		return <Login setToken={setToken} />;
	}

	return (
		<div className="wrapper">
			<h1>Application</h1>
			<BrowserRouter>
				<Switch>
					<Route path="/dashboard">
						<Dashboard />
					</Route>
					<Route path="/preferences">
						<Preferences />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
