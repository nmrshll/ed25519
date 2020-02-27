"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const libEd = __importStar(require("ed25519-raw"));
exports.seed_from_phrase = libEd.seed_from_phrase;
class KeyPair {
    constructor(bytes) {
        this.bytes = bytes;
    }
    static from_phrase(phrase) {
        let kp_bytes = utils.copyUint8Array(libEd.gen_keypair(phrase));
        return new KeyPair(kp_bytes);
    }
    pubKey() {
        return utils.copyUint8Array(libEd.pubKey_from_pair_bytes(this.bytes));
    }
    sign(message) {
        return utils.copyUint8Array(libEd.sign(message, this.bytes));
    }
    verify(message, signature) {
        return libEd.verify(message, this.pubKey(), signature);
    }
    to_bytes() {
        return this.bytes;
    }
    static from_bytes(bytes) {
        return new KeyPair(bytes);
    }
}
exports.KeyPair = KeyPair;
function verify(message, pubKey, signature) {
    return libEd.verify(message, pubKey, signature);
}
exports.verify = verify;
class utils {
    static toUtf8(data) {
        const nor = data.normalize("NFKD");
        return Buffer.from(nor, "utf8");
    }
    static copyUint8Array(src) {
        let dst = new Uint8Array(src.length);
        dst.set(src);
        return dst;
    }
}
exports.utils = utils;
