import { promises } from 'fs';
import { resolve } from 'path';
import partA from './partA';
import partB from './partB';

const day = 'day12';
const answers = {
  ae: 31,
  ai: 456,
  be: 29,
  bi: 454,
};

let input = promises.readFile(resolve(process.cwd(), day, 'input.txt'), 'utf8');
let example = promises.readFile(
  resolve(process.cwd(), day, 'example.txt'),
  'utf8',
);

describe('Part A', () => {
  it('should produce the correct value for example', async () => {
    expect(partA(await example)).toEqual(answers.ae);
  });
  it('should produce the correct value for input', async () => {
    expect(partA(await input)).toEqual(answers.ai);
  });
});

describe('Part B', () => {
  it('should produce the correct value for example', async () => {
    expect(partB(await example)).toEqual(answers.be);
  });
  it('should produce the correct value for input', async () => {
    expect(partB(await input)).toEqual(answers.bi);
  });
});
