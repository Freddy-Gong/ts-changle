type KebabCaseHerper<S> = S extends `${infer F}${infer R}`
  ? F extends Lowercase<F>
    ? `${F}${KebabCaseHerper<R>}`
    : `-${Lowercase<F>}${KebabCaseHerper<R>}`
  : S

type KebabCase<S> = S extends `${infer F}${infer R}`
  ? KebabCaseHerper<`${Lowercase<F>}${R}`>
  : S
