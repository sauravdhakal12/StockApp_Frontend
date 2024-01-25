import { userLogin, userSignup } from "../../utils/serverRequest";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


const AuthPage = () => {

  // Try to log user in
  const handleLogin = async (event) => {
    event.preventDefault();

    // Get email and password from input field
    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;

    // No empty fields allowed
    if (!(email && password)) {
      alert("All fields are required");
      return;
    }

    const body = {
      email, password
    };

    try {
      const resData = await userLogin(body);

      // If success field is true
      if (resData.success) {

        // Save displayName into local storage
        window.localStorage.setItem("displayName", resData.displayName);
        window.location.assign("/");
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

  const handleSignup = async (event) => {
    event.preventDefault();

    // Get email and password from input field
    const displayName = document.getElementById("displayNameSign").value;
    const email = document.getElementById("emailSign").value;
    const password = document.getElementById("passwordSign").value;

    // No empty fields allowed
    if (!(email && password && displayName)) {
      alert("All fields are required");
      return;
    }

    const body = {
      displayName, email, password
    };

    try {
      const resData = await userSignup(body);

      // If success field is true
      if (resData.success) {

        // Save displayName into local storage
        window.localStorage.setItem("displayName", resData.displayName);
        window.location.assign("/");
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
  }


  return (
    <div style={{ display: "flex", "justifyContent": "center", alignItems: "center", margin: 20 }}>
      <div style={{ width: "60%" }}>
        <Tabs defaultValue="Login" className="w-[100%]">

          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="Login">Login</TabsTrigger>
            <TabsTrigger value="SignUp">SignUp</TabsTrigger>
          </TabsList>

          <TabsContent value="Login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>

                <CardDescription>
                  Enter your credentails.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="emailLogin" >Email</Label>
                  <Input id="emailLogin" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="passwordLogin">Password</Label>
                  <Input id="passwordLogin" type="password" />
                </div>
              </CardContent>

              <CardFooter>
                <Button onClick={handleLogin}>Login</Button>
              </CardFooter>

            </Card>
          </TabsContent>

          <TabsContent value="SignUp">
            <Card>
              <CardHeader>
                <CardTitle>SignUp</CardTitle>
                <CardDescription>
                  Create a new account.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="passwordReSign">DisplayName</Label>
                  <Input id="displayNameSign" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="emailSign">Email</Label>
                  <Input id="emailSign" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="passwordSign">Password</Label>
                  <Input id="passwordSign" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSignup}>SignUp</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}


export default AuthPage;