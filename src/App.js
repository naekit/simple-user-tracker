import React, { useState } from "react"
import Users from "./components/User/Users"
import UserForm from "./components/UserForm/UserForm"
import styled from "styled-components"

const Container = styled.div`
	background: navy;
	padding: 10px;
	border-radius: 5px;
	border: white solid 5px;
	color: white;

	@media (min-width: 700px) {
		width: 850px;
		margin: 10px auto;
	}
`

function App() {
	const [users, setUsers] = useState([
		{ name: "Niko", age: 31, id: 1 },
		{ name: "Mykyta", age: 21, id: 2 },
	])

	const addUser = (user) => {
		const newUser = { ...user, id: Math.floor(Math.random() * 1000) + 1 }
		setUsers((prevState) => [...prevState, newUser])
	}

	return (
		<Container>
			<UserForm addUser={addUser} />
			<Users users={users} />
		</Container>
	)
}

export default App
