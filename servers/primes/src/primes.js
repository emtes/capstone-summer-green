class Primes {
    /**
     * Finds N number of primes
     * @param {number} n number of primes
     * @returns {array}
     */
    static nPrimes(n) {
        const primes = []
        for (let i = 0; primes.length < n; i++) {
            if (this.isPrime(i)) primes.push(i)
        }
        return primes
    }

    /**
     * Checks if a number is prime
     * @param {number} n number to test
     */
    static isPrime(n) {
        let factors = 0
        for (let i = 0; i <= n; i++) {
            if (n % i === 0) factors += 1
            if (factors > 2) break
        }
        return factors === 2
    }

    /**
     * Returns N number of palindromic prime numbers
     * @param {number} n number of primes
     * @returns {number[]}
     */
    static palandromicPrimes(n) {
        const primes = []
        for (let i = 0; primes.length < n; i++) {
            if (this.isPrime(i) && this.isPalindrome(i)) {
                primes.push(i)
            }
        }
        return primes
    }

    /**
     * Tests if a whole number is a palindrome
     * @param {number} n number to test
     * @returns {boolean}
     */
    static isPalindrome(n) {
        const validN = Math.round(n)
        const strN = '' + validN
        let reversedStr = ''
        for (let i = strN.length - 1; i > -1; i--) {
            reversedStr += strN[i]
        }
        return strN === reversedStr
    }
}

module.exports = Primes
