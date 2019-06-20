const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to get puzzle');
    }
};

const getCurrentCountry = async () => {
    let location = await getLocation();
    return getCountry(location.country);

};

const getCountry = async (code) => {
    const response = await fetch('//restcountries.eu/rest/v2/all');
    if(response.status === 200) {
        const data = await response.json();
        return data.find((country) => country.alpha2Code === code);
    } else {
        throw new Error('Unable to fetch country');
    }
};

const getLocation = async() => {
    const response = await fetch('//ipinfo.io/json?token=a1c9646f55104a');
    if(response.status === 200) {
        return response.json();
    } else {
        throw new Error('Unable to fetch location');
    }
};











// new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             const country = data.find((country) => country.alpha2Code === code);
//             resolve(country);

//         } else if (e.target.readyState === 4) {
//             reject('Unable to fetch data');
//         }
//     });
//     request.open('GET', 'http://restcountries.eu/rest/v2/all');
//     request.send();
// });
/* OLD Fetch data before async/await // more complex, less readability
const getPuzzleOld = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch puzzle');
        }
    }).then((data) => {
        return data.puzzle;
    });
};
*/



/* Callback API functions
const getPuzzle = (wordCount, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            callback(undefined, data.puzzle);
        } else if (e.target.readyState === 4) {
            callback('An error has occured', undefined);
        }
    });

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send();
};

const getCountry = (code, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            const country = data.find((country) => country.alpha2Code === code);
            callback(undefined, country);

        } else if (e.target.readyState === 4) {
            callback('Unable to fetch data');
        }
    });
    request.open('GET', 'http://restcountries.eu/rest/v2/all');
    request.send();
};
*/


/* Converting XML to FETCH req => Old XML code video #114
xml we had to  create a new promise, integrate it into the code by initiating a new promise instance
and manually calling resolve() and reject()




const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            resolve(data.puzzle);
        } else if (e.target.readyState === 4) {
            reject('An error has occured');
        }
    });

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send();
})

const getCountry = (code) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            const country = data.find((country) => country.alpha2Code === code);
            resolve(country);

        } else if (e.target.readyState === 4) {
            reject('Unable to fetch data');
        }
    });
    request.open('GET', 'http://restcountries.eu/rest/v2/all');
    request.send();
});





*/

