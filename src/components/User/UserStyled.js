import styled from "styled-components"

const UserStyled = styled.div`
	margin: 2px 10px;
	padding: 10px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background: white;
	border: 4px solid #010e4a;
	border-radius: 5px;

	& p {
		margin: 10px;
	}

	@media (min-width: 700px) {
		width: 800px;
		margin: 10px auto;
	}
`

export default UserStyled
