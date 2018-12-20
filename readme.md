
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

4. Javascipt commands and combination of commands are possible like in a standard Node REPL.
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

### choices

## The good

## The bad

## The ugly

