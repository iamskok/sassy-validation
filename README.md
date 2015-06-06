# Sassy-validation 

Sass _data type_ validation library.

###__Validate inputted data or don’t Sass at all !__

Sassy-validation is a handy addition for every Sass project which uses `@functions` and/or `@mixins`. 

## Documentation

Sassy-validation [Official Documentation](http://sassysuit.github.io/sassy-validation)

## Requirements

* Ruby Sass `v3.2` and higher 
* LibSass `v3.1` and higher

## Installation

_Git_:

    git clone git@github.com:SassySuit/sassy-validation.git ./

_Bower_:

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

## Credits

* [Hugo Giraudel](http://hugogiraudel.com/) for code quality improvements
* [Marc Mintel](https://twitter.com/marcmintel) for his original [idea](https://medium.com/@marcmintel/validating-parameters-in-sass-a0cac60c6222
)
