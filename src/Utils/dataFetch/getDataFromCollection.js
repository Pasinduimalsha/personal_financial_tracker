import { getDocs, collection, orderBy, query } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

const getDataFromCollection = (collectionName, setFunction) => {
  const q = query(collection(db, collectionName), orderBy('createdAt', 'asc'));

  getDocs(q)
    .then((querySnapshot) => {
      const dataArr = [];
      querySnapshot.forEach((doc) => {
        dataArr.push({ id: doc.id, ...doc.data() });
      });
      setFunction(dataArr);
    })
    .catch((error) => {
      console.error("Error getting documents: ", error);
    });
};

export default getDataFromCollection;



// import {getDocs, collection } from "firebase/firestore";
// import { db } from "../../Firebase/Firebase";


// const getDataFromCollection = (collectionName,setFunction) => {
  
//   getDocs(collection(db, collectionName)).then((querySnapshot) => {
//     console.log(querySnapshot);
//     const dataArr = [];
//     querySnapshot.forEach((doc) => {
//        dataArr.push(doc.data());
//       //  console.log(doc.id, " => ", doc.data());
//     });
//     console.log(dataArr);
//     setFunction(dataArr);
//   });
 
  
// }

// export default getDataFromCollection