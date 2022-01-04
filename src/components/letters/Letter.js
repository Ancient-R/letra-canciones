import React from 'react';

const Letter = ({ letterInfo }) => {
    
    return (
      <div className="letter__container">
          <h1 className="letter__title">Letra de canción</h1>
          <pre>{ letterInfo} </pre>
      </div>
    );
}
 
export default Letter;