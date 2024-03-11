const logger = require("../logger/api.logger");

const loggerAndThrowError = (err, method, entityName) => {
    logger.error(` --- method : ${method} --- entityName : ${entityName} --- Error : ` + err);
    throw { success: false, error: err }
};

const sendDataIfSuccess = (result, method = '', entityName = '') => {
    logger.info(` --- method : ${method} --- entityName : ${entityName} `, result)
    return { success: true, body: result };
};

/*const dif2date = (debut, fin) => {
    // Définir les deux dates à comparer
    const date1 = new Date(debut);
    const date2 = new Date(fin);

    // Calculer la différence en millisecondes
    const diffInMs = Math.abs(date2 - date1);

    // Calculer la différence en heures, minutes et secondes
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
    const diffInSeconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

    return `Différence : ${diffInHours} heures, ${diffInMinutes} minutes, ${diffInSeconds} secondes`;
};

const attemptForSameSeconds = (seconde = 30) => {
    // Wrap the asynchronous behavior in a Promise
    return new Promise((resolve, reject) => {
        // Replace the following logic with your actual asynchronous operation
        // For example, if you're making an API call, put the API call here.
        // For demonstration purposes, we are using a simple setTimeout.
        setTimeout(() => {
            const response = "Your response data here";
            // Resolve the Promise with the response data
            resolve(response);
        }, seconde * 1000);
    });
};

const existsInKeys = (
    secondKeys = ['dez', 'all'],
    keys = ['one', 'desired', 'all']
) => {
    return secondKeys.some(key => keys.includes(key))
};

const getNodeJsFileNameReverse = (myString) => {
    // Convert to lowercase and replace uppercase letters with underscores and lowercase letters
    return myString
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .toLowerCase();
}

const getTableNameReverse = (myString) => {
    let finalResult;

    if (myString.toLowerCase().endsWith('ies')) {
        finalResult = myString.slice(0, -3) + 'y';
    } else if (myString.toLowerCase().endsWith('s')) {
        finalResult = myString.slice(0, -1);
    } else {
        finalResult = myString;
    }

    return finalResult;
}

const getNodeJsFileNameR = (myString) => {
    // Convert to lowercase and replace uppercase letters with underscores and lowercase letters
    return getTableNameReverse(getNodeJsFileNameReverse(myString));
}*/

const passToNext = (req, res, next) => { console.log(" 555555555555555!!!!!!!!!!!!!!!!!!!!!!!!!! "); next() }

module.exports = {
    sendDataIfSuccess,
    loggerAndThrowError,
    passToNext,
    /*getNodeJsFileNameR,
    existsInKeys,
    attemptForSameSeconds,
    dif2date*/
};
