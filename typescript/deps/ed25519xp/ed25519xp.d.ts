/* tslint:disable */
/* eslint-disable */
/**
* @param {string} phrase 
* @returns {any} 
*/
export function gen_keypair(phrase: string): any;
/**
* @param {Uint8Array} pair_bytes 
* @returns {any} 
*/
export function pubKey_from_pair_bytes(pair_bytes: Uint8Array): any;
/**
* @param {Uint8Array} message 
* @param {Uint8Array} keypair_bytes 
* @returns {any} 
*/
export function sign(message: Uint8Array, keypair_bytes: Uint8Array): any;
/**
* @param {Uint8Array} message 
* @param {Uint8Array} pubKey_bytes 
* @param {Uint8Array} sig_bytes 
* @returns {boolean} 
*/
export function verify(message: Uint8Array, pubKey_bytes: Uint8Array, sig_bytes: Uint8Array): boolean;
/**
* @param {string} phrase 
* @returns {any} 
*/
export function seed_from_phrase(phrase: string): any;
