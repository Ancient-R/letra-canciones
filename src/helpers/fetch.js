import axios from "axios";

export const ArtistData = async ( artist ) => {
    const url = 'https://www.theaudiodb.com/api/v1/json/2/search.php?s='
    const artist = await axios.get(`${url}${artist}`);
    console.log( artist );
}

export const LetterData = async (artist, song) => {
    const url = 'https://api.lyrics.ovh/v1';
    const letter = await axios.get(`${url}/${artist}/${song}`);
    console.log( letter );
}