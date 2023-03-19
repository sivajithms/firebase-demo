import "./App.css";
import { firebaseApp } from "./firebase/configs";

import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc
} from "firebase/firestore";

import { getDatabase, ref, set } from "firebase/database";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

const db = getFirestore(firebaseApp);
const userCollectionRef = collection(db,'products')

function App() {
  const [products, setProducts] = useState([]);

  const q = query(collection(db, "products"));
  getDocs(q).then((querySnapshot) => {
    const data = querySnapshot.docs.map((doc) => doc.data());
    setProducts(data);
  });

  function writeUserData() {
    addDoc(userCollectionRef, {
      name: "mii",
      price: "890"
    });
  }

  return (
    <div className="App">
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>name</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <button onClick={writeUserData}>click me</button>
    </div>
  );
}

export default App;
