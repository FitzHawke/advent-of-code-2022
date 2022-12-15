import { describe, it, expect } from 'vitest';
import { promises } from 'fs';
import { resolve } from 'path';
import partA from './partA';
import partB from './partB';

const year = '2022';
const day = 'day15';
const answers = {
  ae: 26,
  ai: 4811413,
  be: 56000011,
  bi: 13171855019123,
};

let input = promises.readFile(
  resolve(process.cwd(), year, day, 'input.txt'),
  'utf8',
);
let example = promises.readFile(
  resolve(process.cwd(), year, day, 'example.txt'),
  'utf8',
);

describe('Part A', () => {
  it('should produce the correct value for example', async () => {
    expect(partA(await example, 10)).toEqual(answers.ae);
  });
  it('should produce the correct value for input', async () => {
    expect(partA(await input, 2000000)).toEqual(answers.ai);
  });
});

describe('Part B', () => {
  it('should produce the correct value for example', async () => {
    expect(partB(await example, 20)).toEqual(answers.be);
  });
  it('should produce the correct value for input', async () => {
    expect(partB(await input, 4000000)).toEqual(answers.bi);
  });
});
