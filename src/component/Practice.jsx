// import { useState } from "react";

// export function Practice() {
//   const [darkmode, setdarkmode] = useState(false);

//   return (
//     <div className="">
//       <button onClick={() => setdarkmode(!darkmode)}>
//         Dark Mode
//       </button>

//       <h1 className={`text-2xl ${darkmode ? "text-yellow-400" : "text-red-900"}`}>{darkmode ? "Dark Mode ON" : "Dark Mode OFF"}</h1>
//     </div>
//   );
// }

// import { useState } from "react";

// function Practice() {

//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       name: "Ali",
//       age: 22
//     },
//     {
//       id: 2,
//       name: "Ahmed",
//       age: 25
//     }
//   ]);

//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [editId, setEditId] = useState(null);

//   // Add User
//   const addUser = () => {

//     if (name === "" || age === "") {
//       alert("Please enter name and age");
//       return;
//     }

//     const newUser = {
//       id: Date.now(),
//       name: name,
//       age: age
//     };

//     setUsers([...users, newUser]);

//     setName("");
//     setAge("");
//   };

//   // Delete User
//   const deleteUser = (id) => {

//     const updatedUsers = users.filter((user) => {
//       return user.id !== id;
//     });

//     setUsers(updatedUsers);
//   };

//   // Update User
//   const updateUser = (id) => {

//     if (name === "" || age === "") {
//       alert("Please enter new name and age");
//       return;
//     }

//     const updatedUsers = users.map((user) => {

//       if (user.id === id) {
//         return {
//           ...user,
//           name: name,
//           age: age
//         };
//       }

//       return user;
//     });

//     setUsers(updatedUsers);

//     setName("");
//     setAge("");
//     setEditId(null);
//   };

//   // Edit button ke liye input mein existing data lana
//   const editUser = (user) => {

//     setName(user.name);
//     setAge(user.age);
//     setEditId(user.id);
//   };

//   return (
//     <div>

//       <h1>User Manager</h1>

//       <input
//         type="text"
//         placeholder="Enter name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <br />
//       <br />

//       <input
//         type="number"
//         placeholder="Enter age"
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//       />

//       <br />
//       <br />

//       {editId === null ? (

//         <button onClick={addUser}>
//           Add User
//         </button>

//       ) : (

//         <button onClick={() => updateUser(editId)}>
//           Update User
//         </button>

//       )}

//       <hr />

//       <h2>Users List</h2>

//       {users.map((user) => (

//         <div key={user.id}>

//           <h3>{user.name}</h3>

//           <p>Age: {user.age}</p>

//           <button onClick={() => editUser(user)}>
//             Edit
//           </button>

//           <button onClick={() => deleteUser(user.id)}>
//             Delete
//           </button>

//           <hr />

//         </div>

//       ))}

//     </div>
//   );
// }

// export default Practice;

import { useEffect, useState } from "react";

function Practice() {

  // LocalStorage se pehle saved theme lo
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    return savedTheme === "dark";
  });

  // Theme change hone par LocalStorage mein save karo
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-gray-900 text-white p-10"
          : "min-h-screen bg-gray-100 text-gray-900 p-10"
      }
    >

      <div className="max-w-md mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Dark Theme App
        </h1>

        <p className="mb-6">
          Current Theme: {darkMode ? "Dark Mode" : "Light Mode"}
        </p>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={
            darkMode
              ? "bg-white text-gray-900 px-5 py-2 rounded-lg"
              : "bg-gray-900 text-white px-5 py-2 rounded-lg"
          }
        >
          {darkMode ? " Light Mode" : " Dark Mode"}
        </button>

      </div>

    </div>
  );
}

export default Practice;