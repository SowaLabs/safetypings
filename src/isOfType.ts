// source: https://github.com/piotrwitek/typesafe-actions/blob/master/src/is-of-type.ts

export function isOfType<T extends string, A extends { type: string }>(
  type: T | T[],
  action: A,
): action is A extends { type: T } ? A : never;

export function isOfType<T extends string>(
  type: T | T[],
): <A extends { type: string }>(action: A) => action is A extends { type: T } ? A : never;

/**
 * @description check if action type is equal given type-constant
 */
export function isOfType<T extends string, A extends { type: T }>(
  actionTypeOrTypes: T | T[],
  action?: A,
) {
  const actionTypes = Array.isArray(actionTypeOrTypes) ? actionTypeOrTypes : [actionTypeOrTypes];

  const assertFn = (_action: A) => actionTypes.includes(_action.type);

  // 1 arg case => return curried version
  if (action === undefined) {
    return assertFn;
  }
  // 2 args case => invoke assertFn and return the result
  return assertFn(action);
}
