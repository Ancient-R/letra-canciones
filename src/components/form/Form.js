import React from 'react';

const Form = () => {

    return (
        <form className='form'>
            <div className='form__field'>
                <label className='form__label'>Artista: </label>

                <input 
                    type="text"
                    className='form__input'
                    name="artist"
                />
            </div>

            <div className='form__field'>
                <label className='form__label'>Canción: </label>

                <input 
                    type="text"
                    className='form__input'
                    name="song"
                />
            </div>

            <div className='form__field'>
                <input
                    type="submit"
                    value="Buscar"
                    className='form__submit'
                />
            </div>
        </form>
    );
}
 
export default Form;