// import React, { useState } from "react";
// import { Bar, Pie } from "react-chartjs-2";
// import "tailwindcss/tailwind.css";
// // At the top of your file
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     ArcElement,
//     Tooltip,
//     Legend,
//   } from 'chart.js';
//   ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

// const AdminDashboard = () => {
//   const [activeSection, setActiveSection] = useState("overview");

//   // Default Data
//   const defaultOverviewData = {
//     totalUsers: 120,
//     activeRoutes: 15,
//     complaintsPending: 8,
//     topRoutes: ["Route A", "Route B", "Route C"],
//     usage: [100, 80, 65],
//     labels: ["January", "February", "March"],
//   };

//   const defaultUsers = [
//     { id: 1, name: "Alice Johnson", email: "alice@company.com" },
//     { id: 2, name: "Bob Smith", email: "bob@company.com" },
//     { id: 3, name: "Charlie Brown", email: "charlie@company.com" },
//   ];

//   const defaultRoutes = [
//     { id: 1, route: "Route A", passengers: 10, vehicles: 3 },
//     { id: 2, route: "Route B", passengers: 8, vehicles: 2 },
//     { id: 3, route: "Route C", passengers: 12, vehicles: 4 },
//   ];

//   const defaultComplaints = [
//     { id: 1, user: "Alice", issue: "Vehicle delay", status: "Pending" },
//     { id: 2, user: "Bob", issue: "Driver behavior", status: "Resolved" },
//   ];

//   const renderSection = () => {
//     switch (activeSection) {
//       case "overview":
//         return <Overview data={defaultOverviewData} />;
//       case "users":
//         return <UserManagement users={defaultUsers} />;
//       case "routes":
//         return <RouteManagement routes={defaultRoutes} />;
//       case "complaints":
//         return <ComplaintsManagement complaints={defaultComplaints} />;
//       case "reports":
//         return <Reports data={defaultOverviewData} />;
//       default:
//         return <Overview data={defaultOverviewData} />;
//     }
//   };

//   return (
//     <div className="flex">
//       <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
//       <div className="flex-1 p-6 bg-gray-100 min-h-screen">
//         <Header />
//         <div>{renderSection()}</div>
//       </div>
//     </div>
//   );
// };

// const Sidebar = ({ setActiveSection, activeSection }) => (
//   <div className="w-1/4 bg-gray-800 text-white min-h-screen">
//     <ul className="space-y-4 p-4">
//       {["overview", "users", "routes", "complaints", "reports"].map((section) => (
//         <li
//           key={section}
//           className={`p-2 rounded cursor-pointer ${
//             activeSection === section ? "bg-blue-600" : "hover:bg-gray-700"
//           }`}
//           onClick={() => setActiveSection(section)}
//         >
//           {section.charAt(0).toUpperCase() + section.slice(1)}
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const Header = () => (
//   <div className="flex justify-between items-center mb-6">
//     <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//     <button className="bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
//   </div>
// );

// const Overview = ({ data }) => (
//   <div>
//     <h2 className="text-2xl font-bold mb-4">Overview</h2>
//     <div className="grid grid-cols-2 gap-6">
//       <div className="bg-white shadow p-4 rounded">
//         <h3>Total Users</h3>
//         <p className="text-2xl font-bold">{data.totalUsers}</p>
//       </div>
//       <div className="bg-white shadow p-4 rounded">
//         <h3>Active Routes</h3>
//         <p className="text-2xl font-bold">{data.activeRoutes}</p>
//       </div>
//       <div className="bg-white shadow p-4 rounded">
//         <h3>Pending Complaints</h3>
//         <p className="text-2xl font-bold">{data.complaintsPending}</p>
//       </div>
//     </div>
//     <div className="mt-6">
//       <Bar
//         data={{
//           labels: data.labels,
//           datasets: [
//             {
//               label: "Monthly Usage",
//               data: data.usage,
//               backgroundColor: ["rgba(75,192,192,0.6)", "rgba(255,99,132,0.6)", "rgba(54,162,235,0.6)"],
//             },
//           ],
//         }}
//       />
//     </div>
//   </div>
// );

// const UserManagement = ({ users }) => (
//   <div>
//     <h2 className="text-2xl font-bold mb-4">User Management</h2>
//     <table className="w-full bg-white shadow rounded">
//       <thead>
//         <tr>
//           <th className="p-4 text-left">Name</th>
//           <th className="p-4 text-left">Email</th>
//           <th className="p-4 text-left">Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user) => (
//           <tr key={user.id}>
//             <td className="p-4">{user.name}</td>
//             <td className="p-4">{user.email}</td>
//             <td className="p-4">
//               <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">Edit</button>
//               <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );

// // Similar structure for RouteManagement, ComplaintsManagement, and Reports.
// const RouteManagement = ({ routes }) => (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Route Management</h2>
//       <table className="w-full bg-white shadow rounded">
//         <thead>
//           <tr>
//             <th className="p-4 text-left">Route</th>
//             <th className="p-4 text-left">Passengers</th>
//             <th className="p-4 text-left">Vehicles</th>
//             <th className="p-4 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {routes.map((route) => (
//             <tr key={route.id}>
//               <td className="p-4">{route.route}</td>
//               <td className="p-4">{route.passengers}</td>
//               <td className="p-4">{route.vehicles}</td>
//               <td className="p-4">
//                 <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">View</button>
//                 <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
//                 <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
  
//   const ComplaintsManagement = ({ complaints }) => (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Complaints Management</h2>
//       <table className="w-full bg-white shadow rounded">
//         <thead>
//           <tr>
//             <th className="p-4 text-left">User</th>
//             <th className="p-4 text-left">Issue</th>
//             <th className="p-4 text-left">Status</th>
//             <th className="p-4 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {complaints.map((complaint) => (
//             <tr key={complaint.id}>
//               <td className="p-4">{complaint.user}</td>
//               <td className="p-4">{complaint.issue}</td>
//               <td className="p-4">
//                 <span
//                   className={`px-2 py-1 rounded ${
//                     complaint.status === "Pending" ? "bg-yellow-300" : "bg-green-300"
//                   }`}
//                 >
//                   {complaint.status}
//                 </span>
//               </td>
//               <td className="p-4">
//                 <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">Resolve</button>
//                 <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
  
//   const Reports = ({ data }) => (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Reports</h2>
//       <div className="bg-white shadow rounded p-4">
//         <h3 className="font-semibold mb-2">Monthly Usage</h3>
//         <Bar
//           data={{
//             labels: data.labels,
//             datasets: [
//               {
//                 label: "Users",
//                 data: data.usage,
//                 backgroundColor: [
//                   "rgba(75,192,192,0.6)",
//                   "rgba(255,99,132,0.6)",
//                   "rgba(54,162,235,0.6)",
//                 ],
//               },
//             ],
//           }}
//           options={{
//             responsive: true,
//             plugins: {
//               legend: {
//                 position: 'top',
//               },
//             },
//           }}
//         />
//       </div>
//       <div className="bg-white shadow rounded p-4 mt-6">
//         <h3 className="font-semibold mb-2">Route Popularity</h3>
//         <Pie
//           data={{
//             labels: data.topRoutes,
//             datasets: [
//               {
//                 label: "Popularity",
//                 data: data.usage.slice(0, 3),
//                 backgroundColor: ["#4caf50", "#2196f3", "#ff9800"],
//               },
//             ],
//           }}
//           options={{
//             responsive: true,
//             plugins: {
//               legend: {
//                 position: 'top',
//               },
//             },
//           }}
//         />
//       </div>
//     </div>
//   );
  

// export default AdminDashboard;



import React, { useState } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import "tailwindcss/tailwind.css";
import background from '../assets/background.jpg';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { motion } from "framer-motion";
import { saveAs } from "file-saver"; // Import file-saver for downloading reports
// import { Header as DashboardHeader } from '../components/Header';
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, LineElement, Tooltip, Legend);
import { HiMenu } from "react-icons/hi";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [logoutMessage, setLogoutMessage] = useState(false);
  const [routes, setRoutes] = useState([
    { id: 1, name: "Route A", driver: "John Doe", vehicle: "Toyota Prius" },
    { id: 2, name: "Route B", driver: "Jane Smith", vehicle: "Honda Accord" },
  ]);
  const [newRoute, setNewRoute] = useState({ name: "", driver: "", vehicle: "" });

  const handleLogout = () => {
    setLogoutMessage(true);
    setTimeout(() => {
      setLogoutMessage(false);
      window.location.href = "/";
    }, 3000); // Auto-hide message after 3 seconds and redirect to root
  };

  // Function to handle report download
  const downloadReport = () => {
    const reportData = `
      Daily Report:
      - Total Users: 120
      - Active Routes: 15
      - Pending Complaints: 8
      - Top Routes: Route A, Route B, Route C
    `;
    const blob = new Blob([reportData], { type: "text/plain" });
    saveAs(blob, "daily_report.txt");
  };

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <Overview />;
      case "users":
        return <UserManagement />;
      case "routes":
        return <RouteManagement routes={routes} setRoutes={setRoutes} />;
      case "complaints":
        return <ComplaintsManagement />;
      case "reports":
        return <Reports />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="absolute inset-0 bg-cover bg-center opacity" style={{ backgroundImage: `url(${background})` }}>
    <div className="relative flex">
      
      <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
      <div className="flex-1 p-6  min-h-screen overflow-y-auto">

        {/* <DashboardHeader /> */}
        <Header onLogout={handleLogout}/>
        {logoutMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-2 px-6 rounded shadow-md"
          >
            Successfully logged out!
          </motion.div>
        )}
        <div className="mt-6">{renderSection()}</div>
      </div>
    </div>
    </div>
  );
};

const Sidebar = ({ setActiveSection, activeSection }) => (
  <div className="w-1/4 bg-gray-900 text-white  min-h-screen shadow-xl">
    <ul className="space-y-4 p-4">
      {["overview", "users", "routes", "complaints", "reports"].map((section) => (
        <li
          key={section}
          className={`p-3 rounded-lg cursor-pointer ${
            activeSection === section ? "bg-blue-600" : "hover:bg-gray-700"
          } transition-all duration-200`}
          onClick={() => setActiveSection(section)}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </li>
      ))}
    </ul>
  </div>
);




const Header = ({ onLogout }) => (
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all duration-200"
      onClick={onLogout}
    >
      Logout
    </button>
  </div>
);

const downloadReport = () => {
  const reportData = `
    Daily Report:
    - Total Users: 120
    - Active Routes: 15
    - Pending Complaints: 8
    - Top Routes: Route A, Route B, Route C
  `;
  const blob = new Blob([reportData], { type: "text/plain" });
  saveAs(blob, "daily_report.txt");
};
const Overview = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4 text-gray-900">Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-gray-800 shadow p-4 rounded-lg">
        <h3 className="text-white">Total Users</h3>
        <p className="text-3xl font-bold text-blue-600">120</p>
      </div>
      <div className="bg-gray-800 shadow p-4 rounded-lg">
        <h3 className="text-white">Active Routes</h3>
        <p className="text-3xl font-bold text-green-600">15</p>
      </div>
      <div className="bg-gray-800 shadow p-4 rounded-lg">
        <h3 className="text-white">Pending Complaints</h3>
        <p className="text-3xl font-bold text-red-600">8</p>
      </div>
    </div>
    <div className="mt-6 text-right">
      <button
        onClick={downloadReport}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all duration-200"
      >
        Download Daily Report
      </button>
    </div>
  </div>
);

const RouteManagement = ({ routes, setRoutes }) => {
  const [newRoute, setNewRoute] = useState({ name: "", driver: "", vehicle: "" });
  const [editingRoute, setEditingRoute] = useState(null);

  const handleAddRoute = () => {
    if (newRoute.name && newRoute.driver && newRoute.vehicle) {
      setRoutes([...routes, { id: Date.now(), ...newRoute }]);
      setNewRoute({ name: "", driver: "", vehicle: "" });
    }
  };

  const handleEditRoute = (route) => {
    setEditingRoute(route);
    setNewRoute({ name: route.name, driver: route.driver, vehicle: route.vehicle });
  };

  const handleSaveEdit = () => {
    if (editingRoute) {
      setRoutes(
        routes.map((route) =>
          route.id === editingRoute.id
            ? { ...route, name: newRoute.name, driver: newRoute.driver, vehicle: newRoute.vehicle }
            : route
        )
      );
      setEditingRoute(null);
      setNewRoute({ name: "", driver: "", vehicle: "" });
    }
  };

  const handleDeleteRoute = (id) => {
    setRoutes(routes.filter((route) => route.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Route Management</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Add/Edit Route</h3>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Route Name"
            value={newRoute.name}
            onChange={(e) => setNewRoute({ ...newRoute, name: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Driver Name"
            value={newRoute.driver}
            onChange={(e) => setNewRoute({ ...newRoute, driver: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Vehicle"
            value={newRoute.vehicle}
            onChange={(e) => setNewRoute({ ...newRoute, vehicle: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
          {editingRoute ? (
            <button
              onClick={handleSaveEdit}
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-all duration-200"
            >
              Save Edit
            </button>
          ) : (
            <button
              onClick={handleAddRoute}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all duration-200"
            >
              Add Route
            </button>
          )}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Existing Routes</h3>
        <ul className="space-y-3">
          {routes.map((route) => (
            <li key={route.id} className="bg-white p-4 shadow rounded flex justify-between items-center">
              <div>
                <p className="font-semibold">{route.name}</p>
                <p>Driver: {route.driver}</p>
                <p>Vehicle: {route.vehicle}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditRoute(route)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-all duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteRoute(route.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-all duration-200"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
// UserManagement component
const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });

  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.role) {
      setUsers([...users, { id: Date.now(), ...newUser }]);
      setNewUser({ name: "", email: "", role: "" });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-900">User Management</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Add New User</h3>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Role"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleAddUser}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all duration-200"
          >
            Add User
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Existing Users</h3>
        <ul className="space-y-3">
          {users.map((user) => (
            <li key={user.id} className="bg-white p-4 shadow rounded flex justify-between items-center">
              <div>
                <p className="font-semibold">{user.name}</p>
                <p>Email: {user.email}</p>
                <p>Role: {user.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// ComplaintsManagement component

const ComplaintsManagement = () => {
  const [complaints, setComplaints] = useState([]);
  const [newComplaint, setNewComplaint] = useState({ title: "", description: "" });
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleAddComplaint = () => {
    if (newComplaint.title && newComplaint.description) {
      setComplaints([...complaints, { id: Date.now(), ...newComplaint, solved: false }]);
      setNewComplaint({ title: "", description: "" });
      setFeedbackMessage("Complaint submitted successfully!");
      setTimeout(() => setFeedbackMessage(""), 3000); // Auto-hide message after 3 seconds
    }
  };

  const handleMarkAsSolved = (id) => {
    setComplaints(complaints.map(complaint => 
      complaint.id === id ? { ...complaint, solved: true } : complaint
    ));
  };

  const handleDeleteComplaint = (id) => {
    setComplaints(complaints.filter(complaint => complaint.id !== id));
    setFeedbackMessage("Complaint deleted successfully!");
    setTimeout(() => setFeedbackMessage(""), 3000);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Complaints Management</h2>
      {feedbackMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-green-600 text-white py-2 px-6 rounded shadow-md mb-4"
        >
          {feedbackMessage}
        </motion.div>
      )}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Register a Complaint</h3>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Complaint Title"
            value={newComplaint.title}
            onChange={(e) => setNewComplaint({ ...newComplaint, title: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Description"
            value={newComplaint.description}
            onChange={(e) => setNewComplaint({ ...newComplaint, description: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          ></textarea>
          <button
            onClick={handleAddComplaint}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all duration-200"
          >
            Submit Complaint
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Submitted Complaints</h3>
        <ul className="space-y-3">
          {complaints.map((complaint) => (
            <li key={complaint.id} className="bg-white p-4 shadow rounded">
              <h4 className="font-semibold">{complaint.title}</h4>
              <p>{complaint.description}</p>
              <div className="flex justify-end gap-2 mt-2">
                <button
                  onClick={() => handleMarkAsSolved(complaint.id)}
                  disabled={complaint.solved}
                  className={`px-3 py-1 rounded ${complaint.solved ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'} text-white transition-all duration-200`}
                >
                  {complaint.solved ? 'Solved' : 'Mark as Solved'}
                </button>
                <button
                  onClick={() => handleDeleteComplaint(complaint.id)}
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition-all duration-200"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
// Reports component
const Reports = () => {
  const [reports, setReports] = useState([
    { id: 1, title: "Monthly Overview", content: "This is the monthly report content." },
    { id: 2, title: "User Activity", content: "Details about user activity this month." },
  ]);
  const [newReport, setNewReport] = useState({ title: "", content: "" });

  const handleAddReport = () => {
    if (newReport.title && newReport.content) {
      setReports([...reports, { id: Date.now(), ...newReport }]);
      setNewReport({ title: "", content: "" });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Reports</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Create a New Report</h3>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Report Title"
            value={newReport.title}
            onChange={(e) => setNewReport({ ...newReport, title: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Content"
            value={newReport.content}
            onChange={(e) => setNewReport({ ...newReport, content: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          ></textarea>
          <button
            onClick={handleAddReport}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-all duration-200"
          >
            Create Report
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Existing Reports</h3>
        <ul className="space-y-3">
          {reports.map((report) => (
            <li key={report.id} className="bg-white p-4 shadow rounded">
              <h4 className="font-semibold">{report.title}</h4>
              <p>{report.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// export { UserManagement, ComplaintsManagement, Reports };


export default AdminDashboard;
