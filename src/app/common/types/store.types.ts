import { createFieldProxy } from '../helpers/proxy-store.helpers';

export type FieldProxy<T> = {
  use: () => T;
  get: () => T;
  set: (value: T) => void;
};

export type FieldType<T, K extends keyof T> = T[K];

export type IStoreAdapter<T, E> = {
  [K in keyof T]: ReturnType<typeof createFieldProxy<T, E, K>>;
};
