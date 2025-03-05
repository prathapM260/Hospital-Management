// import { useState } from "react";
// import axios from "axios";

// const DoctorForm = ({ onClose, onSuccess }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     specialization: "",
//     email: "",
//     phone: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await axios.post("http://localhost:4444/api/doctors/add", formData);
//       alert(response.data.message || "Doctor added successfully!");

//       // Clear the form
//       setFormData({
//         name: "",
//         specialization: "",
//         email: "",
//         phone: "",
//       });

//       // Refresh counts and close form
//       if (onSuccess) onSuccess();
//       if (onClose) onClose();
//     } catch (error) {
//       console.error("Error adding doctor:", error);
//       alert("Failed to add doctor. Please try again.");
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-lg"
//         >
//           ✖
//         </button>

//         <h2 className="text-xl font-bold mb-4">Doctor Registration</h2>

//         <form onSubmit={handleSubmit}>
//           <label className="block mb-2">Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

//           <label className="block mb-2">Specialization</label>
//           <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

//           <label className="block mb-2">Email</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

//           <label className="block mb-2">Phone</label>
//           <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

//           <button type="submit" className="w-full cursor bg-blue-500 text-white py-2 rounded">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DoctorForm;






import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const DoctorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigate function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:4444/api/doctors/add", formData, {
        headers: { "Content-Type": "application/json" },
      });

      setMessage(response.data.message || "Doctor added successfully!");

      // Clear form fields after submission
      setFormData({ name: "", specialization: "", email: "", phone: "" });

      // Navigate to admin page after a short delay
      setTimeout(() => {
        navigate("/admin"); // Redirect to the Admin Page
      }, 2000); // 2 seconds delay for user to see the success message

    } catch (error) {
      setMessage("Failed to add doctor. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[350px] bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Doctor Registration</h2>

        {message && <p className="mb-2 text-center text-green-500">{message}</p>}

        <form onSubmit={handleSubmit}>
          <label className="block mb-1">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

          <label className="block mb-1">Specialization</label>
          <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

          <label className="block mb-1">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

          <label className="block mb-1">Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

          <button type="submit" className="w-full bg-blue-500 text-white py-1 rounded" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorForm;
