//Import react and reactdom libraries
import React from "react";
import ReactDOM from "react-dom";
// import Faker from "faker";
// import CommentDetail from "./CommentDetail";
// import ApprovalCard from "./ApprovalCard";
//import SeasonDisplay from "./SeasonDisplay";
//import Spinner from "./Spinner";
import App from "./components/App";
//Create React Component - 101 JSX
// const App = () => {
//   return (
//     <div>
//       <label htmlFor="name">Name: </label>
//       <input id="name" type="text" />
//       <button style={{ backgroundColor: "blue", color: "white" }}>
//         Submit
//       </button>
//     </div>
//   );
// };

//Create React Component - 201 Components
// const App = () => {
//   return (
//     <div className="ui container comments">
//       <ApprovalCard>
//         <CommentDetail author="Sam" comment="This is one hell of a blog" />
//       </ApprovalCard>
//       <ApprovalCard>
//         <CommentDetail author="Alex" comment="Nice one" />
//       </ApprovalCard>
//       <ApprovalCard>
//         <CommentDetail author="Ken" comment="crazy article" />
//       </ApprovalCard>
//       <ApprovalCard>
//         <CommentDetail author="Megan" comment="Great job!!" />
//       </ApprovalCard>
//       <ApprovalCard>
//         <CommentDetail author="Alma" comment="Insightful" />
//       </ApprovalCard>
//     </div>
//   );
// };

//Create React Component - 301 Class Based Components
// class App extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = { lat: null, errorMessage: "" };
//   // }

//   // alternative way to state intitialization

//   state = { lat: null, errorMessage: "" };
//   // componentDidMount() {
//   //   console.log("Component rendered on the screen");
//   // }
//   // componentDidUpdate() {
//   //   console.log("Component re-rendered on state update");
//   // }

//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       (position) => {
//         console.log(position);
//         this.setState({ lat: position.coords.latitude });
//       },
//       (err) => {
//         console.log(err);
//         this.setState({ errorMessage: err.message });
//       }
//     );
//   }
//   renderContent = () => {
//     if (this.state.errorMessage && !this.state.lat) {
//       return <div>Error : {this.state.errorMessage}</div>;
//     }
//     if (!this.state.errorMessage && this.state.lat) {
//       return <SeasonDisplay lat={this.state.lat} />;
//     }
//     return <Spinner message="Please accept location request " />;
//   };
//   render() {
//     return <div className="class">{this.renderContent()}</div>;
//   }
// }

//Create React Component - 401 UserFeedback/Api calls/Forms
//---------------------App in component folder: Learning to add a bit structure to project -------------------------

//Take the component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
