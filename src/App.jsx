import React, { Suspense, useEffect, useState } from "react";

const Header = React.lazy(() => import("./component/Header"));
const AboutMe = React.lazy(() => import("./component/AboutMe"));
const Education = React.lazy(() => import("./component/Education"));
const Experience = React.lazy(() => import("./component/Experience"));
const Footer = React.lazy(() => import("./component/Footer"));
const Jumbotron = React.lazy(() => import("./component/Jumbotron"));
const MySkill = React.lazy(() => import("./component/MySkill"));
const Project = React.lazy(() => import("./component/Project"));
const SplashScreen = React.lazy(() => import("./component/SplashScreen"));

function App() {
  const [isTimeOut, setIsTimeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTimeOut(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Suspense fallback={<p></p>}>
        {isTimeOut ? <></> : <SplashScreen />}
        <Header />
        <Jumbotron />
        <AboutMe />
        <Education />
        <Experience />
        <MySkill />
        <Project />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
