const HomePage = () => {
  const displayName = window.localStorage.getItem("displayName");

  if (!displayName) {
    return window.location.assign("/login");
  }

  return (
    <div>
      <h1>Welcome to home page</h1>
      {displayName ? displayName : "no user"}
    </div>
  )
}

export default HomePage;