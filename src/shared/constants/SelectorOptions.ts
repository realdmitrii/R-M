import type { ISelectorOptions } from '../types';

export const CharacterSpecies: ISelectorOptions[] = [
  { value: 'human', label: 'Human' },
  { value: 'alien', label: 'Alien' },
  { value: 'humanovalue', label: 'Humanoid' },
  { value: 'animal', label: 'Animal' },
  { value: 'robot', label: 'Robot' },
];

export const CharacterGender = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'genderless', label: 'Genderless' },
  { value: 'unknown', label: 'Unknown' },
];

export const CharacterStatus = [
  { value: 'alive', label: 'Alive', status: 'green' },
  { value: 'dead', label: 'Dead', status: 'red' },
  { value: 'unknown', label: 'Unknown', status: 'orange' },
];
