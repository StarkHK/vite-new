import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <nav style={{ display: "flex", gap: 20 }}>
        <Link to="/">Home</Link>
        <Link to="/job-search">Job Search</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Outlet />
    </>
  );
}
