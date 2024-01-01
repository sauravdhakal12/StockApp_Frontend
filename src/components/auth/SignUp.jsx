import { Link } from "react-router-dom";
import { userSignup } from "../../utils/serverRequest";

const SignupPage = () => {
  return (
    <div>
      <h1>Signup</h1>
      <SignupForm />
    </div>
  );
}

const SignupForm = () => {

  // Try to log user in
  const handlesignup = async (event) => {
    event.preventDefault();

    // Get email and password from input field
    const displayName = event.target.displayName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // No empty fields allowed
    if (!(displayName && email && password)) {
      alert("All fields are required");
      return;
    }

    const body = {
      displayName, email, password
    };

    // Send login info to backend
    try {
      const resData = await userSignup(body);

      if (resData.success) {

        // Save displayName into local storage
        if (resData.displayName) {
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
      <form onSubmit={handlesignup}>
        <input type="text" name="displayName" placeholder="username" />
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" value="SignUp" />
      </form>

      <Link to="/login">Login</Link>
    </div>
  )
}

export default SignupPage;