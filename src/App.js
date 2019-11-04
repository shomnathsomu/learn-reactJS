import React, {Component} from 'react';

//import Header from './components/Header';
//import Footer from './components/Footer';
//import MainContent from './components/MainContent';

//import logo from './logo.svg';
//import './App.css';

//import Product from './Product';
//import productsData from './vschoolProducts';
//import Conditional from './Conditional'

//function App() {

  //const firstName = "Alice";
  //const secondName = "Doe";

  //const date = new Date();
  // const date = new Date(2018, 6, 31, 22);
  // const hours = date.getHours();

  // let timeOfDay;
  
  // const styles = {
  //   backgroundColor: "#CDDC39",
  //   fontSize: "30px"
  // };

  // if(hours < 12) {
  //   timeOfDay = "morning";
  //   styles.color = "lightGreen";
  // } 
  // else if (hours >= 12 && hours <= 18) {
  //   timeOfDay = "afternoon";
  //   styles.color = "blue"
  // } 
  // else {
  //   timeOfDay = "night";
  //   styles.color = "maroon";
  // }

  // const productComponents = productsData.map(item => <Product key={item.id} product={item} />);

  // return (
    // parent/ child components
    // <div>
    //   <Header />
    //   <MainContent />
    //   <Footer />
    // </div>

    // inline styles with styles property
    // <h1  style={styles}>Good {timeOfDay}!</h1>

    // Mapping Components Practice
//     <div>
//       {productComponents}
//     </div>
//   );
// }

// class based components
class App extends Component {

  // yourMethodHere() {

  // }

  // State
  constructor() {
    super();
    this.state = {
      // name: "Sally",
      // age: 25

      // isLoading: true
      // unreadMessages: [
      //   "Call your mom!",
      //   "New spam email available. All links are definately safe to click."
      // ]

      // isLoggedIn: false

      character: {}
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //console.log("I am working");
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  // static getDerivedStateFromProps(props, state) {
  //   // return the new updated state based upon the props
  // }

  // getSnapshotBeforeUpdate() {
  //   // create a backup of the current way things are
  // }

  // componentWillMount() {

  // }

  // Life Cycle Methods
  componentDidMount() {
  //   // GET the data I need to correctly display
  //   setTimeout(() => {
  //     this.setState({
  //       isLoading: false
  //     })
  //   }, 1500)

      fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data => {
          this.setState({
            character: data
          })
        })
  }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.whatever !== this.props.whatever){
  //     // DO something important here
  //   }
  // }

  // shouldComponentUpdate(nextProps, nextSteps) {
  //   // return true if you want it to update
  //   // return false if not
  // }

  // // componentDidUpdate() {

  // // }

  // componentWillUnmount() {
  //   // tear down or clean up your codes before your components disappear
  //   // e.g remove event 
  // }


  render() {
    // const style = this.yourMethodHere();
    // const date = new Date();

    //let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";
    //let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out";

    return(
      <div>
        {/* <h1>Is state important to know? {this.state.answer}</h1> */}
        {/* <h1>{this.state.name}</h1>
        <h2>I am {this.state.age} years old.</h2> */}

        {/* <Conditional isLoading={this.state.isLoading}/> */}

        {/* {this.state.unreadMessages.length > 0 && <h2>You have {this.state.unreadMessages.length} unread messages!</h2>} */}

        {/* <button onClick={this.handleClick}>{buttonText}</button>
        <h1>{displayText}</h1> */}

        {this.state.character.name}
      </div>
    )

  }
}

export default App;
