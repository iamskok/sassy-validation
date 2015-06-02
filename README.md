# sassy-validation 

Sass data type validation library.

This library is a great addition to every Sass project which uses functions and/or mixins. Make sure that your functions and/or mixins are used correctly by validating inputted data.

# Installation

With `git`:

    git clone git@github.com:SassySuit/sassy-validation.git ./

With `bower`:

    bower install sassy-validation --save-dev

## Examples

    validate(1em, measure)                  // returns true
    validate(13, measure)                   // returns false
    validate(77, number)                    // returns true
    validate('77', number)                  // returns false
    validate('sassy-validation', string)    // returns true
    validate(1.618, float)                  // returns true
    validate(1 2 3 4 5, list)               // returns true
    validate(-99999, negative)              // returns true
    validate(px, unit)                      // returns true

## Documentation 

https://sassysuit.github.io/sassy-validation/

## Credits

* [Hugo Giraudel](http://hugogiraudel.com/) for code quality improvements
* [Marc Mintel](https://twitter.com/marcmintel) for his original [idea](https://medium.com/@marcmintel/validating-parameters-in-sass-a0cac60c6222
)
