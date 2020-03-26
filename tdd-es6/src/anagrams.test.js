import { expect } from 'chai'
import { isAnagram } from './anagrams'

describe('Test suite with tests that validate the functionality of the anagram module', () => {
    it('should return true if two strings contain the same characters (regardless of case)', () => {
        const expected = true;
        const actual = isAnagram('elbow', 'below');
        expect(actual).to.equal(expected);
    });

    it('should return false when the strings have the same letters in different quantities', () => {
        const expected = false;
        const actual = isAnagram('listens', 'silent');
        expect(actual).to.equal(expected);
    });
})