import { useState } from "react";

const ReceptionistForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    shift: "",
    experience: "",
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
      <h2 className="text-xl font-bold mb-4">Receptionist Registration</h2>
      <label className="block mb-2">Name</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

      <label className="block mb-2">Shift</label>
      <select name="shift" value={formData.shift} onChange={handleChange} className="w-full p-2 border rounded mb-3" required>
        <option value="">Select Shift</option>
        <option value="Morning">Morning</option>
        <option value="Evening">Evening</option>
        <option value="Night">Night</option>
      </select>

      <label className="block mb-2">Experience (Years)</label>
      <input type="number" name="experience" value={formData.experience} onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

      <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded">Submit</button>
    </form>
  );
};

export default ReceptionistForm;
