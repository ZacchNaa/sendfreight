import AdditionalServices from "../AdditionalServices/AdditionalServices";
import Cargo from "../Cargo/Cargo";
import Header from "../Header/Header";
import Location from "../Location/Location";
import Service from "../Service/Service";
import "./App.css";

function App() {
	return (
		<div className="app">
			<Header />
			<div className="content">
				<div className="heading">
					<span><i className="arrow left icon"></i></span>
					<div className="title">
						<h2>New Booking</h2>
						<p>
							Fill in the information below to get a quote or create a new
							booking
						</p>
					</div>
				</div>
				<Service />
				<Location />
				<Cargo />
				<AdditionalServices />
			</div>
		</div>
	);
}

export default App;
