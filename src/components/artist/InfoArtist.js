import React from 'react';

const InfoArtist = ({ artistInfo }) => {

    return (
        <div className="info__container">
          <p className="info__title">Información del artista</p>

          { artistInfo ? 
            <div className='info__body'>
              <img src={artistInfo.strArtistThumb} alt={artistInfo.strArtist} className="image"/>
              <h2 className='text-center'>Biografía</h2>
              <p className="">{ artistInfo.strBiographyES }</p>

            </div>

            : null
          }
        </div>
    );
}
 
export default InfoArtist;