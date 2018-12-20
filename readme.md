
# prime-console

This demo project is a simple nodeJS console app. The goal is to takes numeric input (N) from a user and outputs a multiplication table of (N) 
prime numbers.

# how to run the project

## Get the app

```cmd
<!-- 1. Clone the project -->
git clone https://github.com/OmicronDev/prime-console.git

<!-- 2. change dir -->
cd prime-console

<!-- 3. Install npm packages -->
npm i

<!-- 4. run tests -->
npm test
```

## Use the app

There is 2 different console interfaces: one for user and one for developers.

### Use the app as a user
1. start the project
```cmd
npm start
```
2. A command prompt should appear 
```cmd
prime-console >
```

3. Enter a number N. The multiplication table primes numbers up to N will appear. The result will appear in user format (not javascript object):

```cmd
prime-console > 10
multiplication table primes numbers up to 10:
| x| 2| 3| 5| 7|
| 2| 4| 6| 10| 14|
| 3| 6| 9| 15| 21|
| 5| 10| 15| 25| 35|
| 7| 14| 21| 35| 49|
```

### Use the app as a developer
1. start the project with a dev argument
```cmd
npm start -- dev
```
2. A command prompt for dev should appear
```cmd
prime-console-DEV >
```

3. Enter one of those dev commands:
- primes(Number)
- mtable(Array)
- mptable(N)

The result will appear in javascript object format:

```cmd
prime-console-DEV > primes(20)
primes numbers up to 20:
[ 2, 3, 5, 7, 11, 13, 17, 19 ]
```

```cmd
prime-console-DEV > mtable([3,4,5])
multiplication table for [3,4,5]:
[ [ 'x', 3, 4, 5 ],
  [ 3, 9, 12, 15 ],
  [ 4, 12, 16, 20 ],
  [ 5, 15, 20, 25 ] ]
```

```cmd
prime-console-DEV > mptable(7)
multiplication table primes numbers up to 7:
[ [ 'x', 2, 3, 5, 7 ],
  [ 2, 4, 6, 10, 14 ],
  [ 3, 6, 9, 15, 21 ],
  [ 5, 10, 15, 25, 35 ],
  [ 7, 14, 21, 35, 49 ] ]
```

4. Javascript commands and combination of commands are possible like in a standard Node REPL.
```cmd
prime-console-DEV > mtable(primes(4*4))
primes numbers up to 16:
multiplication table for [2,3,5,7,11,13]:
[ [ 'x', 2, 3, 5, 7, 11, 13 ],
  [ 2, 4, 6, 10, 14, 22, 26 ],
  [ 3, 6, 9, 15, 21, 33, 39 ],
  [ 5, 10, 15, 25, 35, 55, 65 ],
  [ 7, 14, 21, 35, 49, 77, 91 ],
  [ 11, 22, 33, 55, 77, 121, 143 ],
  [ 13, 26, 39, 65, 91, 143, 169 ] ]
```

```cmd
prime-console-DEV > mtable([1,2].concat([3,4]))
multiplication table for [1,2,3,4]:
[ [ 'x', 1, 2, 3, 4 ],
  [ 1, 1, 2, 3, 4 ],
  [ 2, 2, 4, 6, 8 ],
  [ 3, 3, 6, 9, 12 ],
  [ 4, 4, 8, 12, 16 ] ]
```

# code review

## The good

- the 4 modules: primes, multiplicationTable, mPrimesTable and tableView are totally segregate.
  - they can be used and test independently (from the code, the test and dev repl).
  - each module stay very simple
  - each module have it's own test and simple dependencies
  - => this make the solution extensible and maintainable

- each unit test is simple with errors, happy path and perf tests.

- the algorithm to find prime numbers up to N is quite fast but unfortunately greedy in memory.

- the Dev REPL is useful in larger project for investigations even by business analysts. It could help for the transparency of the code.

## The bad

- I made the choice to mix the test code files and the production code files next to each other.
It helps to identify quickly the test file associated with the production file but in a larger app a tests folder could also be a good solution for cross concern tests.
- the view directory include some console commands adapters. This could be improved. 
- the algorithm used to calculate the prime numbers is very greedy in memory.
- the node repl is nice but I don't know the best way to integrate custom commands. this could be improved.

## The ugly

- Node.Js is not the good runtime to compute this type of intensive calculation.
a better environment would be a multi-threaded applications (C#, java...). Nodejs is better for quick and short asynchronous actions as I/O (the opposite of this project).

- the algorithm to calculate the first prime number allocate a lot of memory in one shot.
And if this amount of memory is too large (100 millions items on my env)
the node heap run out of memory. I don't know (yet) an elegant way to prevent of catch this error property.

## To do next

- It could be possible to treat the prime generation as a stream and transform it on the fly to the console. The algorithm would generate items one by one with a JavaScript generator function.It would be useful especially with a slower algorithm or treatment.

- It could be nice to measure the test coverage with Istanbul.

- It could be nice to expose this library as an API and consume it on a React page.

Thank you for taking the time to read this doc.
