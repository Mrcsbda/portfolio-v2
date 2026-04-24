import type { FieldProxy, IStoreAdapter } from '../types';

export const buildStoreAdapter = <T extends object, E extends { getInitialState(): T }>(
  storeState: E
): IStoreAdapter<T, E> => {
  const store = {} as IStoreAdapter<T, E>;
  const keys = Object.keys(storeState.getInitialState()) as Array<keyof T>;

  keys.forEach((key) => {
    (store as any)[key] = createFieldProxy<T, E, typeof key>(key, storeState);
  });

  return store;
};

const StoreProxy = <T, E>(storeState: E) => {
  return {
    use<K extends keyof T>(field: K) {
      return (storeState as any)((s: T) => s[field]);
    },
    get<K extends keyof T>(field: K) {
      return (storeState as any).getState()[field];
    },
    set<K extends keyof T>(field: K, value: T[K]) {
      (storeState as any).getState().setState(field, value);
    },
  };
};

export const createFieldProxy = <T, E, K extends keyof T>(field: K, storeState: E): FieldProxy<T[K]> => {
  const proxy = StoreProxy<T, E>(storeState);
  return {
    use: () => proxy.use(field),
    get: () => proxy.get(field),
    set: (value) => proxy.set(field, value),
  };
};
