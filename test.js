
var assert = require('assert');
var changed = require('./');

var a = [];
var b = [];

assert(false == changed(a, b), 'empty');


var a = ['foo', 'bar', 'baz'];
var b = ['foo', 'baz'];

assert(false == changed(a, b), 'removing one');


var a = ['foo', 'bar', 'baz'];
var b = ['foo', 'bar', 'baz', 'raz'];

assert(false == changed(a, b), 'adding one');


var a = ['foo', 'bar', 'baz'];
var b = ['foo'];

assert(false == changed(a, b), 'removing two');


var a = ['foo', 'bar', 'baz'];
var b = [];

assert(false == changed(a, b), 'removing all');


var a = ['foo', 'bar', 'baz'];
var b = ['hey', 'foo', 'bar', 'baz'];

assert(true == changed(a, b), 'prepend');


var a = ['foo', 'bar', 'baz'];
var b = ['bar', 'foo', 'baz'];

assert(true == changed(a, b), 're-order');
