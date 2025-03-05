import { useState } from "react";

const PatientForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    disease: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Patient Registration</h2>
      <label className="block mb-2">Name</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

      <label className="block mb-2">Age</label>
      <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

      <label className="block mb-2">Gender</label>
      <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border rounded mb-3" required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <label className="block mb-2">Disease</label>
      <input type="text" name="disease" value={formData.disease} onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

      <button type="submit" className="w-full bg-red-500 text-white py-2 rounded">Submit</button>
    </form>
  );
};

export default PatientForm;
