import { useState } from "react";
import InfoArtist from "./components/artist/InfoArtist";
import Header from "./components/header/Header";
import Letter from "./components/letters/Letter";

function App() {

  const [fetch, setFetch] = useState(false);

  return (
    <div className="App">
      <Header />

      <div className="container">
        { fetch ? 
          <>
            <InfoArtist />
            <Letter />
          </>

          : null
        }
      </div>
    </div>
  );
}

export default App;
