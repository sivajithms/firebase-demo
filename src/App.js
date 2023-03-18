import './App.css';
import {firebaseApp} from './firebase/configs'
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

const q = query(collection(db, "products"));

function App() {
  return (
    <div className="App">
      <button onClick={async()=>{
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });

      }}>click me</button>
    </div>
  );
}

export default App;
