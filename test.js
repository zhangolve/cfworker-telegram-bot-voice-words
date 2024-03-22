require('dotenv').config();

async function getKv(key="concated_audio") {
    const result = await fetch(`${process.env.voice_words_REST_API_URL}/get/${key}`, {
        headers: {
            Authorization: `Bearer ${process.env.voice_words_REST_API_TOKEN}`
        }
    })
    const data = await result.json();
    return data;
}

getKv().then(console.log('abc'))