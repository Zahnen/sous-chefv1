import React from "react";
import {Form, Button} from 'react-bootstrap';


function Signin(){

  return (
    <>
      <div className="container">
        <h1>Sign up</h1>
        <Form style={{paddingBottom: '50px', width: '36rem'}}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
        <h1>Already have an account?</h1>
        <h1>Sign In</h1>
        <Form style={{paddingBottom: '50px', width: '36rem'}}>
          <Form.Group controlId="formBasicSignInEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name='signinEmail' type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicSignInPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='signinPassword' type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Signin;

// import React from "react";
// import firebase from "firebase/app";
// import { useAlert } from 'react-alert';
// import {Form, Button} from 'react-bootstrap';

// function Signin(){
//   //react-alert
//   const alert = useAlert();
//   //Epicodus lessons
//   function doSignUp(event) {
//     event.preventDefault();
//     const email = event.target.email.value;
//     const password = event.target.password.value;
//     firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
//       alert.show('Successfully signed up!');
//     }).catch(function(error) {
//       alert.show(error.message + 'Not signed up!');
//     });
//   }

// // HOOK INTO INSTEAD OF CONSTRUCTOR with useEffect() ???
// //   constructor( props ) {
// //     super( props );
// //     this.setState( {
// //         isLoggedIn : false,
// //     } );
// // }
//   function doSignIn(event) {
//     event.preventDefault();
//     const email = event.target.signinEmail.value;
//     const password = event.target.signinPassword.value;
//     firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
//       alert.show("Successfully signed in!");
//       //this.setState( { isLoggedIn : !this.state.isLoggedIn } )
//     }).catch(function(error) {
//       console.log(error.message);
//     });
//   }

//   return (
//     <React.Fragment>
//     <div className="container">
//       <h1>Sign up</h1>
//       <Form style={{paddingBottom: '50px', width: '36rem'}} onSubmit={doSignUp}>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control name="email" type="email" placeholder="Enter email" />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control name="password" type="password" placeholder="Password" />
//         </Form.Group>
//         <Button variant="success" type="submit">
//           Submit
//         </Button>
//     </Form>
//     <h1>Already have an account?</h1>
//     <h1>Sign In</h1>
//     <Form style={{paddingBottom: '50px', width: '36rem'}} onSubmit={doSignIn}>
//         <Form.Group controlId="formBasicSignInEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control name='signinEmail' type="email" placeholder="Enter email" />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group controlId="formBasicSignInPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control name='signinPassword' type="password" placeholder="Password" />
//         </Form.Group>
//         <Form.Group controlId="formBasicCheckbox">
//           <Form.Check type="checkbox" label="Remember me" />
//         </Form.Group>
//         <Button variant="success" type="submit">
//           Submit
//         </Button>
//     </Form>
//   </div>
//   </React.Fragment>
//   );
// }

// export default Signin;