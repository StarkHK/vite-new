import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: 200, background: "#eee", padding: 20 }}>
        <p>Dashboard</p>
        <Link to="/dashboard">Overview</Link>
        <br />
        <Link to="/dashboard/settings">Settings</Link>
      </aside>

      <main style={{ padding: 20 }}>
        <Outlet />
      </main>
    </div>
  );
}
