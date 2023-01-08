import React, { useState } from "react"
import Users from "./components/User/Users"
import UserForm from "./components/UserForm/UserForm"
import styled from "styled-components"

const Container = styled.div`
	width: 100%;
	background: #edf0ff;
	padding: 20px;
	border-radius: 5px;
	color: #010e4a;
	border: none;

	& .err {
		background: lightyellow;
		padding: 10px;
		color: rgb(158, 24, 24);
		text-align: center;
		font-size: 1.2rem;
		border-radius: 5px;
		border: red solid 5px;
	}

	@media (min-width: 768px) {
		width: 850px;
		margin: 10px auto;
		border: #010e4a solid 5px;
	}
`

function App() {
	const [users, setUsers] = useState([
		{ name: "Niko", age: 31, id: 1 },
		{ name: "Mykyta", age: 21, id: 2 },
	])
	const [err, setErr] = useState("")

	const addUser = (user) => {
		if (!user.name) {
			setErr("Please fill name")
			setTimeout(() => {
				setErr("")
			}, 2000)
			return
		} else if (!user.age) {
			setErr("Please fill age")
			setTimeout(() => {
				setErr("")
			}, 2000)
			return
		}
		const newUser = { ...user, id: Math.floor(Math.random() * 1000) + 1 }
		setUsers((prevState) => [...prevState, newUser])
	}

	return (
		<Container>
			<UserForm addUser={addUser} />
			{err && <p className="err">{err}</p>}
			<Users users={users} />
		</Container>
	)
}

export default App
