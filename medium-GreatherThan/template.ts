type LengthOf<T extends number,U extends Array<1> = []> = U["length"] extends T ? U : LengthOf<T,[1,...U]>

type GreaterThan<T extends number, U extends number> = LengthOf<T> extends [...LengthOf<U>, infer M ,...infer O] ? true:false