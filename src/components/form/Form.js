import React from 'react';

const Form = ({ formValues, setFormValues, setError, setFormSubmit }) => {

    const { artist, song } = formValues;

    const handleInputChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if( artist.length < 4 || song.length < 4 ){
            setError( true );

        }else{
            setError(false)
        }
        setFormSubmit( true );

    }

    return (
        <form 
            className='form'
            onSubmit={ handleSubmit }
        >
            <div className='form__field'>
                <label className='form__label'>Artista: </label>

                <input 
                    type="text"
                    className='form__input'
                    name="artist"
                    value={ artist }
                    onChange={ handleInputChange }

                />
            </div>

            <div className='form__field'>
                <label className='form__label'>Canción: </label>

                <input 
                    type="text"
                    className='form__input'
                    name="song"
                    value={ song }
                    onChange={ handleInputChange }
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