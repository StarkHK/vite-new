export default function Login() {
  const login = () => {
    localStorage.setItem("auth", "true");
    window.location.href = "/dashboard";
  };

  return (
    <>
      <h2>Login Page</h2>
      <button onClick={login}>Fake Login</button>
    </>
  );
}
