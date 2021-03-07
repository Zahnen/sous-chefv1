import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from 'react-bootstrap';
import { useFirestore } from 'react-redux-firebase';
import firebase from "firebase/app";

function NewRecipeForm(props){
  const auth = useState(firebase.auth());
  const firestore = useFirestore();
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  function getItemsFromTextArea(str) {
		return str.split(",").map(x => x.trim());
	}

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };


  function addRecipeToFirestore(event) {
    event.preventDefault();
    const ref = firebase.storage().ref("images").child(`${image.name}`);
    const uploadTask = ref.put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        firebase.storage()
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then( url => {
          setUrl(url);
          })
        .then(firestore.collection('recipes').add(
          {
            title: event.target.title.value,
            author: event.target.author.value,
            ingredients: getItemsFromTextArea(event.target.ingredients.value),
            instructions: getItemsFromTextArea(event.target.instructions.value),
            imgURL: url,
            userId: auth[0].currentUser.uid
          }
          ))
        }
      );
      // props.onRecipeAdd();
      }
  return (
    <>
      <div className="container" style={{width: '48rem'}}>
        <Form onSubmit={addRecipeToFirestore}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Title" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              name="author"
              placeholder="Author Name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ingredients</Form.Label>
            <Form.Control
              as="textarea"
              name="ingredients"
              placeholder="Ingredients" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Instructions</Form.Label>
            <Form.Control
              as="textarea"
              name="instructions"
              placeholder="Instructions" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              onChange={handleChange}
              name="image"
              placeholder="Title" />
          </Form.Group>
          <Button variant="success" type="submit">Add Recipe</Button>
        </Form>
      </div>
    </>
  );
}

NewRecipeForm.propTypes = {
  onRecipeAdd: PropTypes.func,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default NewRecipeForm;
// const imageToUpload = event.target.image.files[0];
// uploadImage(imageToUpload);


//new
// const handleUpload = (event) => {
  //   event.preventDefault();
  //   const ref = firebase.storage().ref("images").child(`${image.name}`);
  //   const uploadTask = ref.put(image);
  //   uploadTask.on(
    //     "state_changed",
    //     snapshot => {},
//     error => {
//       console.log(error);
//     },
//     () => {
//       ref
//         .getDownloadURL()
//         .then(url => {
//           setUrl(url);
//           console.log(url);
//         });
//     }
//   );
// };

// function uploadImage(file) {
//   const ref = firebase.storage().ref("images").child(`${file.name}`);
//   ref.put(file)
//   .then((snapshot) => {
//     ref.getDownloadURL().then(function(url){
//       setUrl(url);
//     });
//   });
// }