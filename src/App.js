import { useEffect, useState } from "react";


// components
import Form from "./components/form/Form";
import InfoArtist from "./components/artist/InfoArtist";
import Letter from "./components/letters/Letter";
import Error from "./components/ui/error/Error";

// helper
import { ArtistData, LetterData } from "./helpers/fetch";

function App() {

  // verifica si se ha hecho el llamado a la api, para mostrar los componentes correspondientes
  const [fetch, setFetch] = useState(false);

  // estado del formulario
  const [formValues, setFormValues] = useState({
    artist: '',
    song: ''
  });

  // estado que controla el submit del form para consultar a la API
  const [formSubmit, setFormSubmit] = useState(false);

  // estado para error
  const [error, setError] = useState(false);

  const { artist, song } = formValues;

  const [artistInfo, setArtistInfo] = useState(null);
  const [letterInfo, setLetterInfo] = useState(null);

  useEffect( () => {
    
    const consultAPI = () => {
      setFormSubmit(false);
      setArtistInfo( ArtistData( artist ) );
      setLetterInfo( LetterData( artist, song ) );
      
    }
    
    if( !error && formSubmit ) consultAPI();

  }, [ formSubmit, error ]);

  return (
    <div className="App">
      <header className='header'>
        { error ?
          <Error />
          :
          <h1 className='title'>Tus artistas favoritos en la palma de tu mano</h1>
        }
            <Form
                formValues = { formValues }
                setFormValues = { setFormValues }
                setError = { setError }
                setFormSubmit = { setFormSubmit }
            />
      </header>

      <div className="container">
        { fetch ? 
          <>
            <InfoArtist 
              artistInfo={ artistInfo }
            />
            <Letter 
              letterInfo={ letterInfo }
            />
          </>

          : null
        }
      </div>
    </div>
  );
}

export default App;
