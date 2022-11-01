import './App.css';
import { useState } from 'react';
import { FirstBox } from './components/firstbox';
import { SecondBox } from './components/secondbox';




const RatingBox = () => {
	const [ratingVal, setRatingVal] = useState('');
	const [showSecondBox, setShowSecondBox] = useState(false);
	const [showFirstBox, setShowFirstBox] = useState(true);

	return (
		<>
			<FirstBox ratingVal={ratingVal} setRatingVal={setRatingVal} setShowSecondBox={setShowSecondBox} setShowFirstBox={setShowFirstBox} showFirstBox={showFirstBox} />
			<SecondBox showSecondBox={showSecondBox} ratingVal={ratingVal} />
		</>
	)
}

function App() {

	return (
		<RatingBox />
	)
}

export default App;
