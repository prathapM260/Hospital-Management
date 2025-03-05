// import { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import DoctorForm from "./DoctorForm";
// import NurseForm from "./NurseForm";
// import ReceptionistForm from "./ReceptionistForm";
// import PatientForm from "./PatientForm";

// const AdminPage = () => {
//   const [counts, setCounts] = useState({
//     doctors: 0,
//     nurses: 0,
//     receptionists: 0,
//     patients: 0,
//   });

//   const [selectedRole, setSelectedRole] = useState(null);
//   const [deleteInput, setDeleteInput] = useState("");

//   useEffect(() => {
//     fetchCounts();
//   }, []);

//   const fetchCounts = async () => {
//     try {
//       const response = await axios.get("http://localhost:4444/api/userCounts");
//       setCounts(response.data);
//     } catch (error) {
//       console.error("Error fetching counts:", error);
//     }
//   };

//   const handleAdd = (role) => {
//     setSelectedRole(role);
//   };

//   const RemoveDoctor = async () => {
//     if (!deleteInput) {
//       alert("Please enter a name or email to remove.");
//       return;
//     }
//     try {
//       const response = await axios.delete("http://localhost:4444/api/doctors/remove", {
//         data: { email: deleteInput },
//         headers: { "Content-Type": "application/json" },
//       });
//       alert(response.data.message);
//       setDeleteInput("");
//       fetchCounts();
//     } catch (error) {
//       console.error("Error removing user:", error);
//     }
//   };

//   return (
//     <motion.section className="bg-[#e1fdfefc] h-screen w-screen flex items-center justify-center">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5 }}
//         className="flex flex-col md:flex-row items-center justify-between w-[90%] max-w-7xl bg-[#CCD5AE] shadow-xl p-6 rounded-lg"
//       >
//         {/* Left Side - Add & Remove Inputs */}
//         <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center items-center">
//           {["Doctor", "Nurse", "Receptionist", "Patient"].map((role) => (
//             <div key={role} className="w-full flex justify-between gap-4">
//               <button
//                 onClick={() => handleAdd(role)}
//                 className="w-1/2 px-4 py-2 rounded-md font-semibold bg-gray-200 hover:bg-gray-300"
//               >
//                 Add {role}
//               </button>
//             </div>
//           ))}
//           {/* Input Field for Removing */}
//           <div className="w-full flex flex-col items-center gap-2 mt-4">
//             <input
//               type="text"
//               value={deleteInput}
//               onChange={(e) => setDeleteInput(e.target.value)}
//               placeholder="Enter name or email to remove"
//               className="w-full px-4 py-2 border rounded-md"
//             />
//             <button
//               onClick={RemoveDoctor}
//               className="w-full px-4 py-2 rounded-md font-semibold bg-red-500 text-white hover:bg-red-600"
//             >
//               Remove User
//             </button>
//           </div>
//         </div>

//         {/* Right Side - User Counts */}
//         <div className="w-full md:w-1/2 flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
//           <h2 className="text-2xl font-bold mb-4">User Counts</h2>
//           <p className="text-lg">👨‍⚕️ Doctors: {counts.doctors}</p>
//           <p className="text-lg">👩‍⚕️ Nurses: {counts.nurses}</p>
//           <p className="text-lg">🛎️ Receptionists: {counts.receptionists}</p>
//           <p className="text-lg">🧑‍🦱 Patients: {counts.patients}</p>
//         </div>
//       </motion.div>

//       {/* Role-based Form Modal */}
//       {selectedRole && (
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
//         >
//           <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-sm relative">
//             <h2 className="text-center text-2xl font-bold">{`Add ${selectedRole}`}</h2>
//             <button
//               onClick={() => setSelectedRole(null)}
//               className="absolute top-3 right-3 text-red-500 text-lg font-bold"
//             >
//               ✖
//             </button>

//             {/* Render Form Based on Role */}
//             {selectedRole === "Doctor" && (
//               <DoctorForm onClose={() => setSelectedRole(null)} onSuccess={fetchCounts} />
//             )}
//             {selectedRole === "Nurse" && (
//               <NurseForm onClose={() => setSelectedRole(null)} onSuccess={fetchCounts} />
//             )}
//             {selectedRole === "Receptionist" && (
//               <ReceptionistForm onClose={() => setSelectedRole(null)} onSuccess={fetchCounts} />
//             )}
//             {selectedRole === "Patient" && (
//               <PatientForm onClose={() => setSelectedRole(null)} onSuccess={fetchCounts} />
//             )}
//           </div>
//         </motion.div>
//       )}
//     </motion.section>
//   );
// };

// export default AdminPage;




// import { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import DoctorForm from "./DoctorForm";
// import NurseForm from "./NurseForm";
// import ReceptionistForm from "./ReceptionistForm";
// import PatientForm from "./PatientForm";

// const AdminPage = () => {
//   const [counts, setCounts] = useState({
//     doctors: 0,
//     nurses: 0,
//     receptionists: 0,
//     patients: 0,
//   });

//   const [selectedRole, setSelectedRole] = useState(null);
//   const [deleteInput, setDeleteInput] = useState("");

//   useEffect(() => {
//     fetchCounts();
//   }, []);

//   const fetchCounts = async () => {
//     try {
//       const response = await axios.get("http://localhost:4444/api/userCounts");
//       setCounts(response.data);
//     } catch (error) {
//       console.error("Error fetching counts:", error);
//     }
//   };

//   const handleAdd = (role) => {
//     setSelectedRole(role);
//   };

//   const handleRemove = async () => {
//     if (!deleteInput) {
//       alert("Please enter a name or email to remove.");
//       return;
//     }
  
//     try {
//       const response = await axios.delete("http://localhost:4444/api/doctors/remove", {
//         data: { name: deleteInput, email: deleteInput },
//         headers: { "Content-Type": "application/json" },
//       });
  
//       alert(response.data.message);
//       setDeleteInput("");
//       fetchCounts();
//     } catch (error) {
//       console.error("Error removing doctor:", error);
//       alert(error.response?.data?.message || "Failed to remove doctor.");
//     }
//   };
  

//   return (
//     <motion.section className="bg-[#e1fdfefc] h-screen w-screen flex items-center justify-center">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5 }}
//         className="flex flex-col md:flex-row items-center justify-between w-[90%] max-w-7xl bg-[#CCD5AE] shadow-xl p-6 rounded-lg"
//       >
//         {/* Left Side - Add & Remove Inputs */}
//         <div className="w-full md:w-1/2 flex flex-col gap-2 justify-center items-center">
//           {["Doctor", "Nurse", "Receptionist", "Patient"].map((role) => (
//             <div key={role} className="w-full flex justify-between gap-2">
//               <button
//                 onClick={() => handleAdd(role)}
//                 className="w-[150px] px-4 py-1 rounded-md font-semibold bg-gray-200 hover:bg-gray-300"
//               >
//                 Add {role}
//               </button>
//               <div className="w-full flex items-center gap-2 mt-4">
//             <input
//               type="text"
//               value={deleteInput}
//               onChange={(e) => setDeleteInput(e.target.value)}
//               placeholder="Enter name or email to remove"
//               className="w-full px-4 py-2 border rounded-md"
//             />
//             <button
//               onClick={handleRemove}
//               className="w-[170px] px-2 py-2 rounded-md font-semibold bg-red-500 text-white hover:bg-red-600"
//             >
//               Remove Doc
//             </button>
//           </div>
//             </div>
//           ))}
//           {/* Input Field for Removing */}
          
//         </div>

//         {/* Right Side - User Counts */}
//         <div className="w-full md:w-1/2 flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
//           <h2 className="text-2xl font-bold mb-4">User Counts</h2>
//           <p className="text-lg">👨‍⚕️ Doctors: {counts.doctors}</p>
//           <p className="text-lg">👩‍⚕️ Nurses: {counts.nurses}</p>
//           <p className="text-lg">🛎️ Receptionists: {counts.receptionists}</p>
//           <p className="text-lg">🧑‍🦱 Patients: {counts.patients}</p>
//         </div>
//       </motion.div>

//       {/* Role-based Form Modal */}
//       {selectedRole && (
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
//         >
//           <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-sm relative">
//             <h2 className="text-center text-2xl font-bold">{`Add ${selectedRole}`}</h2>
//             <button
//               onClick={() => setSelectedRole(null)}
//               className="absolute top-3 right-3 text-red-500 text-lg font-bold"
//             >
//               ✖
//             </button>

//             {/* Render Form Based on Role */}
//             {selectedRole === "Doctor" && (
//               <DoctorForm onClose={() => setSelectedRole(null)} onSuccess={fetchCounts} />
//             )}
//             {selectedRole === "Nurse" && (
//               <NurseForm onClose={() => setSelectedRole(null)} onSuccess={fetchCounts} />
//             )}
//             {selectedRole === "Receptionist" && (
//               <ReceptionistForm onClose={() => setSelectedRole(null)} onSuccess={fetchCounts} />
//             )}
//             {selectedRole === "Patient" && (
//               <PatientForm onClose={() => setSelectedRole(null)} onSuccess={fetchCounts} />
//             )}
//           </div>
//         </motion.div>
//       )}
//     </motion.section>
//   );
// };

// export default AdminPage;





import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import DoctorForm from "./DoctorForm";
import NurseForm from "./NurseForm";
import ReceptionistForm from "./ReceptionistForm";
import PatientForm from "./PatientForm";

const AdminPage = () => {
  const [counts, setCounts] = useState({
    doctors: 0,
    nurses: 0,
    receptionists: 0,
    patients: 0,
  });
  const [selectedRole, setSelectedRole] = useState(null);
  const [deleteInputs, setDeleteInputs] = useState({
    Doctor: "",
    Nurse: "",
    Receptionist: "",
    Patient: "",
  });

  useEffect(() => {
    fetchCounts();
  }, []);

  // Fetch user counts from the backend
  const fetchCounts = async () => {
    try {
      const response = await axios.get("http://localhost:4444/api/userCounts");
      setCounts(response.data);
    } catch (error) {
      console.error("Error fetching counts:", error);
    }
  };

  // Handle user removal
  const handleRemove = async (role) => {
    if (!deleteInputs[role]) {
      alert(`Please enter a name or email to remove a ${role}`);
      return;
    }
    try {
      const endpoint = `http://localhost:4444/api/${role.toLowerCase()}s/remove`;
      const response = await axios.delete(endpoint, {
        data: { name: deleteInputs[role], email: deleteInputs[role] },
        headers: { "Content-Type": "application/json" },
      });
      alert(response.data.message);
      setDeleteInputs((prev) => ({ ...prev, [role]: "" }));
      fetchCounts(); // Refresh counts
    } catch (error) {
      console.error(`Error removing ${role}:`, error);
      alert(error.response?.data?.message || `Failed to remove ${role}.`);
    }
  };

  return (
    <motion.section className="bg-[#e1fdfefc] min-h-screen w-full flex justify-center items-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-7xl"
      >
        {["Doctor", "Nurses", "Receptionist", "Patient"].map((role) => (
          <div key={role} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2">{role}s</h2>
            <p className="text-lg mb-4">Count: {counts[role.toLowerCase() + "s"]}</p>
            <button
              onClick={() => setSelectedRole(role)}
              className="w-[150px] px-4 py-2 mb-4 rounded-md font-semibold bg-green-500 text-white hover:bg-green-600"
            >
              Add {role}
            </button>
            <input
              type="text"
              value={deleteInputs[role]}
              onChange={(e) => setDeleteInputs((prev) => ({ ...prev, [role]: e.target.value }))}
              placeholder={`Enter name or email to remove ${role}`}
              className="w-full px-4 py-2 border rounded-md mb-2"
            />
            <button
              onClick={() => handleRemove(role)}
              className="w-[150px] px-4 py-2 rounded-md font-semibold bg-red-500 text-white hover:bg-red-600"
            >
              Remove {role}
            </button>
          </div>
        ))}
      </motion.div>

      {/* Modal for adding users */}
      {selectedRole && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-sm relative">
            <h2 className="text-center text-2xl font-bold">Add {selectedRole}</h2>
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute top-3 right-3 text-red-500 text-lg font-bold"
            >
              ✖
            </button>
            {selectedRole === "Doctor" && <DoctorForm onClose={() => setSelectedRole(null)} onSuccess={fetchCounts} />}
            {selectedRole === "Nurse" && <NurseForm onClose={() => setSelectedRole(null)} onSuccess={fetchCounts} />}
            {selectedRole === "Receptionist" && <ReceptionistForm onClose={() => setSelectedRole(null)} onSuccess={fetchCounts} />}
            {selectedRole === "Patient" && <PatientForm onClose={() => setSelectedRole(null)} onSuccess={fetchCounts} />}
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default AdminPage;
