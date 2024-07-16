import {expect, test} from 'vitest';
import * as fs from 'node:fs'
import * as path from 'node:path'
import { TypesSchema } from './types';
import main from './main';

test('parse ldtk', () => {
  const ldtkPath = path.join(__dirname, '..', 'public', 'assets', 'nature.ldtk');
  const ldtkDir = path.dirname(ldtkPath);
  const jsonText = fs.readFileSync(ldtkPath).toString();
  expect(jsonText.length).toBeGreaterThan(0);
  const json = JSON.parse(jsonText);
  expect(typeof json).toBe('object');
  const parseResult = TypesSchema.parse(json);
  expect(parseResult).toBeDefined();

  expect(parseResult.levels.length).toBeGreaterThan(0);
  expect(parseResult.levels.at(0)?.layerInstances?.length).toBeGreaterThan(0);

  const level = parseResult.levels.at(0);
  if (level===undefined) throw new Error("unexpected");
  const layer = level.layerInstances?.find(x=>x.__identifier==='Dirt');
  if (layer===undefined) throw new Error("unexpected, no dirt found");
  const h = layer.__cHei;
  const w = layer.__cWid;  
  expect(layer.intGridCsv.length).toBe(w*h);

  if (!layer.__tilesetRelPath) throw new Error('unexpected: no tileset');
  const tilesetPath = path.join(ldtkDir, layer.__tilesetRelPath);
  expect(fs.existsSync(tilesetPath)).toBeTruthy();

  const cntIntNeq0 = layer.intGridCsv?.filter(x=>x!==0).length;
  expect(cntIntNeq0).toBe(layer.autoLayerTiles.length);

  const posArray = layer.autoLayerTiles.map(x=>x.src);
  posArray.forEach(pos=>{
    expect(pos[0]%16).toBe(0);
    expect(pos[1]%16).toBe(0);
  });

  const maxx = posArray.map(x=>x[0]).reduce((p,x)=>Math.max(p,x));
  const maxy = posArray.map(x=>x[1]).reduce((p,x)=>Math.max(p,x));
  expect(maxx).toBeGreaterThan(0);
  expect(maxy).toBeGreaterThan(0);
});