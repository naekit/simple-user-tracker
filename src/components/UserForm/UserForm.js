import React, { useState } from "react"
import FormStyled from "./FormStyled"

const UserForm = ({ addUser }) => {
	const [userObj, setUserObj] = useState({ name: "", age: "" })

	const handleChange = (e) => {
		e.preventDefault()
		const name = e.target.name,
			value = e.target.value
		setUserObj((prevState) => {
			return { ...prevState, [name]: value }
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		addUser(userObj)
		setUserObj({ name: "", age: "" })
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<FormStyled>
					<h2>UserTrckr</h2>
					<label>Username</label>
					<input
						value={userObj.name}
						onChange={handleChange}
						name="name"
						type="text"
					/>
				</FormStyled>
				<FormStyled>
					<label>Age (Years)</label>
					<input
						value={userObj.age}
						onChange={handleChange}
						name="age"
						type="number"
					/>
				</FormStyled>
				<FormStyled>
					<button type="submit">Add User</button>
				</FormStyled>
			</form>
		</div>
	)
}

export default UserForm
