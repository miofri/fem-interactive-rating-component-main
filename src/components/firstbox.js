import { FirstPage, StarButton, Header2, RatingBoxDescription, RatingButtonContainers, RatingButton, SubmitButton } from "../styles/rating-button";
import { ReactComponent as StarSVG } from '../images/icon-star.svg';


export const FirstBox = ({ setRatingVal, ratingVal, setShowSecondBox, setShowFirstBox, showFirstBox }) => {

	const setRatingOnClick = (event) => {
		setRatingVal(event.target.value);
	}

	const hideFirstBox = (event) => {
		event.preventDefault();
		setShowSecondBox(true);
		setShowFirstBox(false);
	}

	return (
		<FirstPage $visibility={showFirstBox}>
			<StarButton>
				<StarSVG />
			</StarButton>
			<Header2>
				How did we do?
			</Header2>

			<RatingBoxDescription>
				Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
			</RatingBoxDescription>

			<form>
				<RatingButtonContainers>
					<RatingButton type="button" value="1" onClick={setRatingOnClick}></RatingButton>
					<RatingButton type="button" value="2" onClick={setRatingOnClick}></RatingButton>
					<RatingButton type="button" value="3" onClick={setRatingOnClick}></RatingButton>
					<RatingButton type="button" value="4" onClick={setRatingOnClick}></RatingButton>
					<RatingButton type="button" value="5" onClick={setRatingOnClick}></RatingButton>
				</RatingButtonContainers>

				<SubmitButton type='submit' onClick={hideFirstBox}>S U B M I T</SubmitButton>
			</form>
		</FirstPage >)
}

