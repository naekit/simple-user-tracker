import styled from "styled-components"

const UserStyled = styled.div`
	margin: 2px 10px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	background: #white;
	border: 4px solid white;
	border-radius: 5px;

	@media (min-width: 700px) {
		width: 800px;
		margin: 10px auto;
	}
`

export default UserStyled
