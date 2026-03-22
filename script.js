'use strict';

async function fetchJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
        const joke = await response.json();
        console.log(`Joke: ${joke.setup} - ${joke.punchline}`);
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}

fetchJoke();
