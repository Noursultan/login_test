import { Link } from "react-router-dom";

function App() {
  //   fetch('https://dummyjson.com/auth/login', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({

  //     username: 'kminchelle',
  //     password: '0lelplR',
  //     // expiresInMins: 60, // optional
  //   })
  // })
  // .then(res => res.json())
  // .then(console.log);

  //Допольнительная информация  -> https://dummyjson.com/docs/auth

  return (
    <div className="App text-5xl min-h-[100vh] flex justify-center w-full h-full items-center">
      Удачи, Warrior!
      {/* <Link to={"/login"}>Войти</Link>
      <Link to={"/profile"}>Профил</Link> */}
    </div>
  );
}

export default App;
