import styled from "styled-components"

const FormStyled = styled.div`
	margin: 10px;
	display: flex;
	flex-direction: column;
	color: white;

	& button {
		color: white;
		padding: 10px;
		font-weight: bold;
		background-color: navy;
		border: white 4px solid;
		border-radius: 5px;
		transition: 200ms all;
	}
	& button:hover {
		background-color: white;
		color: navy;
	}
	& button:hover {
		background-color: white;
		color: navy;
	}
	& input {
		padding: 5px;
		border: white 2px solid;
		border-radius: 5px;
	}
	& label {
		font-weight: bold;
	}
	& h2 {
		color: white;
	}
	@media (min-width: 700px) {
		width: 800px;
		margin: 10px auto;
	}
`
export default FormStyled
