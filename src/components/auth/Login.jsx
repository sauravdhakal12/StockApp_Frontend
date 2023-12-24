import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}

const LoginForm = () => {

  // Try to log user in
  const handleLogin = async (event) => {
    event.preventDefault();

    // Get email and password from input field
    const email = event.target.email.value;
    const password = event.target.password.value;

    // No empty fields allowed
    if (!(email && password)) {
      alert("All fields are required");
      return;
    }

    const body = {
      email, password
    };

    // Send login info to backend
    try {

      const res = await fetch("http://127.0.0.1:4000/api/auth/login", {
        method: "post",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const resData = await res.json();

      // If success field is true
      if (resData.success) {

        // Try to access token and displayName
        // and save into local storage
        if (resData.token && resData.displayName) {
          window.localStorage.setItem("token", resData.token);
          window.localStorage.setItem("displayName", resData.displayName);
          window.location.assign("/");
        }

        else {
          console.log("error occurred");
          return;
        }
      }

      // If success field false
      else {
        alert(`Error: ${resData.message}`);
        return;
      }
    }


    // If any unknown error occurs
    catch (exception) {
      console.log(exception);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" value="Login" />
      </form>

      <Link to="/signup">Signup</Link>
    </div>
  );
}

export default LoginPage;