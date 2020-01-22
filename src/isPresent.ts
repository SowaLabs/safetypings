/**
 * @description predicate used to filter out `null` and `undefined` values from collections
 */
export function isPresent<T>(it: T): it is NonNullable<T> {
  return it != null;
}
