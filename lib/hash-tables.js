// # hash tables

// "dictionary", "associative array", "map" is an abstract data type
// composed of a collection of key value pairs such that each possible key appears
// at most once in the collection

// a hash table implements an associative array abstract data type

// notes:
// 1. the position of the values in the hash table is determined by its key
// 2. a hash function maps keys to positions in the hash table
// 3. if a hash fn maps two keys to the same position, a collision occurs

// # operations:
// add/insert, remove/delete, lookup

// # hash tables with chaining
// "an array combined with a hash function that separates each key into a separate
// bucket of the array"
// key assumption that "simple uniform hashing" exists and hashes are evenly distributed

// # how to handle collisions:
// 1. separate chaining - the array does not store the value itself but stores a
//      pointer to another container, usually an association list
//      load factor = n elements / k buckets
// 2. open addressing - if a collision is found, then the table seeks an empty spot
//      in an array to store the value in a deterministic manner, usually the next
//      immediate position in the array

// # hash functions:
// 1. division method
//    h(k) = k mod m
// 2. multiplication method
//    h(k) = [(a * k) mod 2 ^ w] >> (w - r)
// 3. universal hashing
//    h(k) = [(ak + b) mod p] mod m

// sources:
// https://www.cs.cmu.edu/~tcortina/15-121sp10/Unit08B.pdf
// https://en.wikipedia.org/wiki/Hash_table
