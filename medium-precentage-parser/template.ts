type testPrecentage<S extends string> = S extends `${infer front}%` ? '%' : ''
type testSign<S extends string> = S extends `${infer First}${infer Rest}` ? First extends '-'|'+' ? First: "" : ""
type testMiddle<S extends string> = S extends `${testSign<S>}${infer Middle}${testPrecentage<S>}` ? Middle : ""
type PercentageParser<A extends string> = [testSign<A>,testMiddle<A>,testPrecentage<A>]
