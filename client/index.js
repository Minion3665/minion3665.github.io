import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DisplayBoards from "./boards/displayBoards.js";
import BoardPosts from "./posts/boards.js";
import querySearch from "stringquery";
//import UserPosts from "./boards/displayBoards.js";

let buildNumber = 0.26;

console.log(
  "Welcome to the forum. This is client build B." +
    buildNumber +
    "."
);

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" render={() => {null}}/>
					<Route path="/board/:board" component={BoardPosts}/>
				</Switch>
				<Switch>
					<Route path="/login/callback" component={Authentication}/>
					<Route component={DisplayBoards}/>
				</Switch>
			</Router>
		);
	}
}

class Authentication extends Component {
	render() {
		alert(querySearch(this.props.location.search));
		return null;
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
