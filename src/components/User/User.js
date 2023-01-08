import React from "react"
import UserStyled from "./UserStyled"

const User = ({ user }) => {
	return (
		<UserStyled>
			<p>{user.name}</p>
			<p>{user.age} years old</p>
		</UserStyled>
	)
}

export default User
