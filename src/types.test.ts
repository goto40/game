import {expect, test} from 'vitest';
import * as fs from 'node:fs'
import * as path from 'node:path'
import { TypesSchema } from './types';

test('parse ldtk', () => {
  const jsonText = fs.readFileSync(path.join(__dirname, '..', 'public', 'assets', 'nature.ldtk')).toString();
  expect(jsonText.length).toBeGreaterThan(0);
  const json = JSON.parse(jsonText);
  expect(typeof json).toBe('object');
  const parseResult = TypesSchema.parse(json);
  expect(parseResult).toBeDefined();
});