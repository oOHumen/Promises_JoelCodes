/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer) {
  return new Promise((resolve, reject) => {
    promise.then((res) => resolve(transformer(res))).catch(reject);
    /* IMPLEMENT ME!! */
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
  return numberPromise
    .then((num) => {
      if (Number(num)) {
        return num * num;
      } else {
        throw `Cannot convert '${num}' to a number!`;
      }
    });
}


/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise)
    .catch(() => 0);
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise) {
  return promise.then(consumer, handler);
}

/**
 * @callback consumer
 * @param {*} value
 */
function consumer(value) {
  return Promise.reject(value);
}
/**
 * @callback handler
 * @param {*} error
 */
function handler(error) {
  return Promise.resolve(error);
}
module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};