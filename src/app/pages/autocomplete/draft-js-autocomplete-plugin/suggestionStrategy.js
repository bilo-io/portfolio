import findWithRegex from 'find-with-regex';

const REGEX = /(\s|^)#[^\s]*/g;

export default (contentBlock, callback) => {
  findWithRegex(REGEX, contentBlock, callback);
};