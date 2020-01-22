// generic action creator
export type ActionCreator<T extends string = string> = (...args: any) => { type: T };

// infers Action union type from a map of ActionCreators
export type ActionType<A> = A extends ActionCreator<string>
  ? ReturnType<A>
  : A extends Record<any, any>
  ? { [K in keyof A]: ActionType<A[K]> }[keyof A]
  : never;
