import axios from "axios";

export const ArtistData = async ( artist ) => {
    const url = 'https://www.theaudiodb.com/api/v1/json/2/search.php?s='
    const resp = await axios.get(`${url}${artist}`);
    return resp.data.artists;
}

export const LetterData = async (artist, song) => {
    const url = 'https://api.lyrics.ovh/v1';
    const resp = await axios.get(`${url}/${artist}/${song}`);
    return resp.data.lyrics;
}