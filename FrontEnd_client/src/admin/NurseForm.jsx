import { useState } from "react";
import axios from "axios";

const NurseForm = ({ onSuccess, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:4444/api/nurses/add", formData);
      alert(response.data.message || "Nurse added successfully!");

      // Clear the form
      setFormData({
        name: "",
        department: "",
        email: "",
        phone: "",
      });

      // Refresh counts and close form
      if (onSuccess) onSuccess();
      if (onClose) onClose();
    } catch (error) {
      console.error("Error adding nurse:", error);
      alert("Failed to add nurse. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Nurse Registration</h2>

      <label className="block mb-2">Name</label>
      <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        className="w-full p-2 border rounded mb-3" 
        required 
      />

      <label className="block mb-2">Department</label>
      <select 
        name="department" 
        value={formData.department} 
        onChange={handleChange} 
        className="w-full p-2 border rounded mb-3" 
        required
      >
        <option value="">Select Department</option>
        <option value="ICU">ICU</option>
        <option value="Emergency">Emergency</option>
        <option value="Pediatrics">Pediatrics</option>
      </select>

      <label className="block mb-2">Email</label>
      <input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        className="w-full p-2 border rounded mb-3" 
        required 
      />

      <label className="block mb-2">Phone</label>
      <input 
        type="tel" 
        name="phone" 
        value={formData.phone} 
        onChange={handleChange} 
        className="w-full p-2 border rounded mb-3" 
        required 
      />

      <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">Submit</button>
    </form>
  );
};

export default NurseForm;
