import React, { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Table from "./pages/Table";

const App = () => {
  const [route, setRoute] = useState("About");

  let Component;
  switch (route) {
    case "About":
      Component = About;
      break;
    case "Contact":
      Component = Contact;
      break;
    case "Table":
      Component = Table;
      break;
    default:
      Component = About;
  }

  return (
    <Component setRoute={setRoute}/>
  );
};

export default App;
