function fizzBuzz() {
    for  (let i = 1; i <= 1000; i++) {

        if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
            console.log('FizzBuzzBiffFuzz')
        } else if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
            console.log('FizzBuzzBiff') 
        } else if (i % 3 === 0 && i % 5 === 0 && i % 9 === 0) {
            console.log('FizzBuzzFuzz')
        } else if (i % 3 === 0 && i % 7 === 0 && i % 9 === 0) {
            console.log ('FizzBiffFuzz')
        } else if (i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
            console.log('BuzzBiffFuzz')
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0 && i % 7 === 0) {
            console.logo('FizzBiff')
        } else if (i % 3 === 0 && i % 9 === 0) {
            console.logo('FizzFuzz')
        } else if (i % 5 === 0 && i % 7 === 0) {
            console.logo('BuzzBiff')
        } else if (i % 5 === 0 && i % 9 === 0) {
            console.logo('BuzzBiff')
        } else if (i % 7 === 0 && i % 9 === 0) {
            console.logo('BiffFuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else if (i % 7 === 0) {
            console.logo('Biff')
        } else if (i % 9 === 0) {
            console.log('Fuzz')
        } else {
            console.log(i)
        }
    }
}

//fizzBuzz()

function fizzBuzz2() {
    for  (let i = 1; i <= 1000; i++) {

        let output = ''

        if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
            output = 'FizzBuzzBiffFuzz'
          } else if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
            output = 'FizzBuzzBiff'
          } else if (i % 3 === 0 && i % 5 === 0 && i % 9 === 0) {
            output = 'FizzBuzzFuzz'
          } else if (i % 3 === 0 && i % 7 === 0 && i % 9 === 0) {
            output = 'FizzBiffFuzz'
          } else if (i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
            output = 'BuzzBiffFuzz'
          } else if (i % 3 === 0 && i % 5 === 0) {
            output = 'FizzBuzz'
          } else if (i % 3 === 0 && i % 7 === 0) {
            output = 'FizzBiff'
          } else if (i % 3 === 0 && i % 9 === 0) {
            output = 'FizzFuzz'
          } else if (i % 5 === 0 && i % 7 === 0) {
            output = 'BuzzBiff'
          } else if (i % 5 === 0 && i % 9 === 0) {
            output = 'BuzzFuzz'
          } else if (i % 7 === 0 && i % 9 === 0) {
            output = 'BiffFuzz'
          } else if (i % 3 === 0) {
            output = 'Fizz'
          } else if (i % 5 === 0) {
            output = 'Buzz'
          } else if (i % 7 === 0) {
            output = 'Biff'
          } else if (i % 9 === 0) {
            output = 'Fuzz'
          } else {
            output = i
          }
      
          console.log(output)
      
        }
      }

//fizzBuzz2()     

function fizzBuzz3() {
    for (let i = 1; i <= 1000; i++) {

        let output = ''

        if (i % 3 === 0) {
        output += 'Fizz'
        }

        if (i % 5 === 0) {
            output += 'Buzz'
        }

        if (i % 7 === 0) {
            output += 'Biff'
        }

        if (i % 9 === 0) {
            output += 'Fuzz'
        }

        if (i % 11 === 0) {
            output += 'Bizz'
        }

        if (!output) {
            output = i
        }

        console.log(output)

    }      
}

//fizzBuzz3()

function fizzBuzz4() {
    for (let i = 1; i <= 1000; i++) {

        let output = ''

        if (i % 3 === 0) output += 'Fizz'
        if (i % 5 === 0) output += 'Buzz'
        if (i % 7 === 0) output += 'Biff'
        if (i % 9 === 0) output += 'Fuzz'
        if (i % 11 === 0) output += 'Bizz'
        if (!output) output = i

        console.log(output)

    }
}

fizzBuzz4()