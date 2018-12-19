# Sassy-validation 

Sass validation library.

## [Documentation](http://iamskok.github.io/sassy-validation)

## Requirements

* Ruby Sass <= `v3.2`
* LibSass <= `v3.1`

## Installation

Git:

    git clone git@github.com:iamskok/sassy-validation.git ./

Bower:

    bower install sassy-validation --save-dev


## Examples

[__SassMeister Demo__](http://sassmeister.com/gist/cad7bc024664d2e4e15d)

    validate(1em, measure)                  // returns true
    validate(13, measure)                   // returns false
    validate(77, number)                    // returns true
    validate('77', number)                  // returns false
    validate('sassy-validation', string)    // returns true
    validate(1.618, float)                  // returns true
    validate(1 2 3 4 5, list)               // returns true
    validate(-99999, negative)              // returns true
    validate(px, unit)                      // returns true

## Credits

* [Hugo Giraudel](http://hugogiraudel.com/) for code quality improvements
* [Marc Mintel](https://twitter.com/marcmintel) for his original [idea](https://medium.com/@marcmintel/validating-parameters-in-sass-a0cac60c6222
)
