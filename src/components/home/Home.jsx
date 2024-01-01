const HomePage = () => {
  if (!(document.cookie.replace("token=", ""))) {
    window.location.assign("/login");
  }

  const displayName = window.localStorage.getItem("displayName");

  return (
    <div>
      <h1>Welcome to home page</h1>
      <p>{displayName}</p>
    </div>
  )
}

export default HomePage;