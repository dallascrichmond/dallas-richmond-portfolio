import styled from '@emotion/styled';
import mq from '../../constants/mq';

export const HomeContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	font-size: 1.5rem;
	color: white;
	display: flex;
	height: 100svh;
	justify-content: center;
	width: 100%;
`;

export const HomeWrapper = styled.div`
	height: 100%;
	padding-top: 0;
	justify-content: center;
	display: flex;
	box-content: content-box;
	align-items: center;
	flex-direction: column;
	object-fit: scale-down;
	@media (max-height: 570px ){
		padding: 60pt 0;
	}
`;

export const StyledHeading = styled.h1`
  font-weight: 100;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: 5px;
	@media (max-width: ${mq.mobile}) {
		flex-direction: column;
	}
`;
