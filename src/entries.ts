import type {Entries} from './_types';

/**
 * Lists all key-value pairs.
 * @param x entries
 */
function entries<T, U>(x: Entries<T, U>): Entries<T, U> {
  return x;
}
export default entries;
