import styled from "styled-components"

const FormStyled = styled.div`
	margin: 10px;
	display: flex;
	flex-direction: column;

	& button {
		color: #010e4a;
		font-size: 1.2rem;
		padding: 10px;
		font-weight: bold;
		background-color: white;
		border: #010e4a 4px solid;
		border-radius: 5px;
		transition: 200ms all;
	}
	& button:hover {
		background-color: #010e4a;
		color: white;
	}
	& button:hover {
		background-color: #010e4a;
		color: white;
	}
	& input {
		padding: 15px;
		border: #010e4a 2px solid;
		border-radius: 5px;
	}
	& label {
		margin: 5px 0px;
		font-weight: bold;
	}
	& h2 {
		padding-top: 0;
		margin-top: 0;
	}
	@media (min-width: 700px) {
		width: 800px;
		margin: 10px auto;
	}
`
export default FormStyled
