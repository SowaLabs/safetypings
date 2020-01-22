# safetypings

Typescript utilities for easier typing in redux (observable).

Aggregated from [typesafe-actions](https://github.com/piotrwitek/typesafe-actions).

## Usage

### ActionType

Useful utility type that will infer action types from _action creator map_, e.g.

```ts
// types.d.ts
import { ActionType } from 'safetypings';
import * as actions from './actions';

export type RootAction = ActionType<typeof actions>;
```

> It only extracts types that are _action creators_.

### isOfType

Check if passed action is equal given action type, e.g.

```ts
import { RootAction, RootState, Services } from 'MyTypes';
import { Epic } from 'redux-observable';
import { filter } from 'rxjs/operators';
import { isOfType } from 'safetypings';
import * as actions from './actions';

export const loginEpic: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  state$,
  { ajax },
) =>
  action$.pipe(
    filter(isOfType(actions.LOGIN)),
    // value type is now narrowed to `{ type: 'LOGIN', payload: { username: string } }`
  );
```

### isPresent

Check if value passed is present (non-nullable), e.g.

```ts
action$.pipe(
  // ...
  map(getAccessToken),
  filter(isPresent),
  // removes null and undefined from value type
);
```
