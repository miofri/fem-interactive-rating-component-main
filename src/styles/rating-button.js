import styled, { css } from 'styled-components';

export const Header2 = styled.h2`
	text-align: ${props => props.centered ? "center" : "left"};
	margin-bottom: 10px;
	margin-top: 26px;
	color: hsl(0, 0%, 100%);
	font-weight: 700;
	@media (max-width: 375px) {
		margin-top: 16px;
		font-size: 1rem;
	}
`;

export const GeneralPage = styled.div`
	background-color: rgba(30,37,47,255);
	width: 350px;
	height: 350px;
	padding: 25px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 250px;
	border-radius: 5%;
	@media (max-width: 375px) {
		width: 250px;
		height: 280px;
		padding: 20px;
		margin-top: 130px;
	}
`;

export const FirstPage = styled(GeneralPage)`
	display: ${props => props.$visibility ? 'block' : 'none'};
`;

export const GeneralButton = css`
	transition: background-color 0.3s ;
	background-color: rgba(38,47,54,255);
	width: 50px;
	height: 50px;
	border-color: transparent;
	border-radius: 60%;
	-webkit-border-radius: 60%;
	color: hsl(217, 12%, 63%);
	@media (max-width: 375px) {
		width: 40px;
		height: 40px;
	}
`;

export const RatingButton = styled.input`
	${GeneralButton};
	&:hover {
		background-color: rgba(124,136,152,255);
		color: rgba(237,243,252,255);
	}
	&:focus {
		background-color: hsl(25, 97%, 53%);
		color: rgba(237,243,252,255);
	}
`;

export const StarButton = styled.div`
	${GeneralButton}
	text-align: center;
	height: 35px;
	padding-top: 15px;
	@media (max-width: 375px) {
		width: 40px;
		height: 28px;
		padding-top: 12px;
	}
`;

export const SubmitButton = styled.button`
	margin-top: 30px;
	background-color: hsl(25, 97%, 53%);
	border-radius: 18px;
	border-color: transparent;
	height: 40px;
	width: 350px;
	color: rgba(237,243,252,255);
	font-weight: 700;
	transition: background-color 0.3s ;
	&:hover {
		background-color:rgba(237,243,252,255);
		color:hsl(25, 97%, 53%);
	}

	@media (max-width: 375px) {
		width: 240px;
	}
`;
export const RatingButtonContainers = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
`;

export const SecondPage = styled(GeneralPage)`
	display: ${props => props.$visibility ? 'block' : 'none'};

`;

export const ThanksImage = styled.div`
	margin-top: 12px;
	text-align: center;
	/* height: 20px; */
`;

export const SelectedRating = styled.div`
	margin: 32px auto 30px auto;
	width: 190px;
	height: 28px;
	border-radius: 18px;
	padding-top: 10px;

	font-size: 0.9rem;
	text-align: center;
	color: hsl(25, 97%, 53%);
	background-color: rgba(38,47,54,255);

	@media (max-width: 375px) {
		margin-top: 20px;
		margin-bottom: 5px;
		padding-top: 6px;
		font-size: 0.79rem;
		width: 170px;
		height: 20px;
	}
`;

export const RatingBoxDescription = styled.div`
	text-align: ${props => props.centered ? "center" : "left"};
	color: hsl(217, 12%, 63%);;
	font-weight: 400;
	font-size: 0.93rem;
	line-height: 1.5rem;
	@media (max-width: 375px) {
		font-size: 0.69rem;
		line-height: 1.1rem;
	}
`;
