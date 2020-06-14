import scanWhile from './scanWhile';
import type {testFn, Entries} from './_types';

/**
 * Checks if all values satisfy a test.
 * @param x entries
 * @param fn test function (v, k, x)
 * @param ths this argument
 */
function every<T, U>(x: Entries<T, U>, fn: testFn<T, U>, ths: object=null): boolean {
  return scanWhile(x, fn, ths)===undefined;
}
export default every;