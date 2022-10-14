import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore} from "firebase-admin/firestore"
import serviceAccount from "./serviceAccount.js";


initializeApp ({
    credential: cert(serviceAccount)
})

const db = getFirestore()

db.collection('pets') .add({
  Name: "Sam", 
  Species: "Spider",
  Size: " L",
  OwnerNum: "12556"
})

// .then(doc => console.log (' New Pet:', doc.id))
// .catch(console.error)
// function getPets() {}
// db.collection ('pets').doc('yjOCyqR967swIdxGQAYP','BgKEmu7zpdrQzBOfY034').get()
// .then(doc=> console.log(doc.data()))
// .catch(console.error)

// db.collection('pets').get()

// .then(collection => {
//   collection.docs.forEach(doc => {
//     console.log(doc.id, doc.data())
//   })

// })
//   .catch(console.error)
// .where('name', '==', 'Sam')
  
// db.collection('pets')

function getPets() {
db.collection ('pets').doc('2jXa5vCcLsnBK7tLiOZ0').get()
.then(doc=> console.log(doc.data()))
.catch(console.error)
}

db.collection ('pets')
.doc('2jXa5vCcLsnBK7tLiOZ0')
.update({Name: 'Sally' })
.then(() => console.log(getPets()))
.catch(console.error)
