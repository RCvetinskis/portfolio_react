import "./style/main.scss";
import mainContext from "./context/mainContext";
import Navigation from "./components/Navigation";

function App() {
  // singlepage , on navigation click show content with sliding animation, for project use react slick, repositories fetch with github api,
  const state = {};

  return (
    <div>
      <mainContext.Provider value={state}>
        <Navigation />
        <div className="container-md">
          <article>
            <h5>Hello, I'm</h5>
            <div className="text-container">
              <div className="text-wrap">
                <h1>Robertas Cvetinskis.</h1>
                <h1>Front-End Developer</h1>
              </div>
              <div>
                <p className="intro fs-5 ">
                  Recently I finished TypeScript React and Node.js course at
                  Codeacademy. Currently, I'm in search of a job or internship
                  to become a professional developer.
                </p>
              </div>
            </div>
          </article>
        </div>
      </mainContext.Provider>
    </div>
  );
}
export default App;
