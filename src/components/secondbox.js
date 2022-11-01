import { SecondPage, ThanksImage, SelectedRating, Header2, RatingBoxDescription } from './rating-button.styled';
import { ReactComponent as ThankyouSVG } from '../images/illustration-thank-you.svg';


export const SecondBox = ({ showSecondBox, ratingVal }) => {
	return (
		<>
			<SecondPage $visibility={showSecondBox}>
				<ThanksImage>
					<ThankyouSVG />
				</ThanksImage>

				<SelectedRating>You selected {ratingVal} out of 5</SelectedRating>

				<Header2 centered>Thank you!</Header2>

				<RatingBoxDescription centered>We appreciate you taking the time to give a rating.
					<br></br>If you ever need more support,
					don’t hesitate to <br></br>get in touch!
				</RatingBoxDescription>

			</SecondPage >
		</>
	)
}
