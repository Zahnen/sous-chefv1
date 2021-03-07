### February 26, 2021

10:15AM - Watch tutorials on recipe box app creation in React

10:40AM - Continue navigating sea of recipebox tutorials

11:00AM - feeling directionless, work through LHTP lessons to begin building recipebox-esque site that uses similar features to tap-room redux project

11:30AM - continue adapting LHTP lessons/convert to recipe box app

12:00PM - almost finished creating adaptation of LHTP help queue in context of recipe app, break for lunch

1:05PM - return from lunch, fix rendering issues with recipe list

2:00PM - continue to refine recipe control/accessing recipes from firestore

2:30PM - continue to determine issue with selecting specific recipe from firestore db

2:30PM - read through "Changing Selected Ticket" in LHTP for the millionth time, reconsider using redux for this piece of state

3:20PM - fix selected recipe bug (was targetting this.state instead of this.props), start work to get update recipe functionality going

3:45PM - update & delete functionality in place, clean up console.logs and misc notes

4:00PM - begin to work on auth/signin functionality

4:45PM - signin component is not rendering, I believe it has to do with my routing? Spending the rest of now through 5 batching commits for all files.

### February 27th, 2021

12:00PM - Try to figure out issue with Signin component not rendering

1:00PM - Determine cause of render issue (order of components in App.js?), add initial/WIP signin forms to now-rendering component

2:00PM - Add logo/restyle navbar with new logo

### February 28th, 2021

4:30PM - Add WIP README/Project Proposal for submission objective. Rename/reorganize WIP component tree, rework worklog into .md file

5:00PM - Batch/push commits from weekend work

### March 5th, 2021

8:00AM - Begin to consider best way to input ingredients + store them in firebase, watch firebase tutorials

9:00AM - finish implementing sign in/up/out functionality

9:30AM - add functionality for tracking author/user ID with recipe input

10:00AM - pivot back to recipe input/look into clean ways to add multiple items into an array with a form, display those items

11:00AM - Successfully implement splitting textarea for instructions/ingredients, displaying items from these arrays as lists

11:30AM - spin in chair, try to decide direction to move in next...

11:45AM - begin to look at image uploading in react/storage in firebase

12:00pm - break for lunch

1:00PM - return from lunch, begin to watch tutorials on image uploading with firebase storage

2:00PM - break for information interview with a senior dev at Causebox

3:00PM - return to photo upload attempt. Receiving errors ("firebase.storage is not a function) when trying to import storage from firebase.

4:00PM - still working on photo upload, feeling impossible but I'm determined!

8:00pm - FINALLY GOT A PHOTO TO UPLOAD TO FIREBASE STORAGE!!!!!!! This has taken me...literally all day, and I am so relieved to have it finished finally. Begin to work on getting uploaded image URL from storage to store as field of recipe

10:00PM - continue working to get URL from firebase storage, running into a lot of memory leak warnings/errors from console. Explore useEffect.
