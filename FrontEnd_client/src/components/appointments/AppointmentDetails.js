import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function AppointmentDetails() {
  const [appointments, setAppointments] = useState([]);
  const currentUser = useSelector((state) => state.user.currentUser); // Get user from Redux store

  useEffect(() => {
    if (currentUser) {
      fetchAppointments();
    }
  }, [currentUser]);

  const fetchAppointments = async () => {
    try {
      const token = currentUser?.token; // Get token from Redux store
      const response = await axios.get("http://localhost:4451/api/appointments/user-appointments", {
        headers: {
          Authorization: `Bearer ${token}`, // Send token for authentication
        },
      });
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Your Appointments</h2>
      {appointments.length > 0 ? (
        <ul className="space-y-3">
          {appointments.map((appointment) => (
            <li key={appointment._id} className="border p-3 rounded-md shadow-md">
              <p><strong>Doctor:</strong> {appointment.doctorName}</p>
              <p><strong>Date:</strong> {appointment.date}</p>
              <p><strong>Time:</strong> {appointment.time}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments found.</p>
      )}
    </div>
  );
}

export default AppointmentDetails;
