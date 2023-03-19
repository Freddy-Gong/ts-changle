
type NumberRange<L extends number, H extends number, Arr extends unknown[] = ConstructTuple<H>,U = H> = Arr extends [...infer Front,infer R] 
    ? Front["length"] extends L 
        ? U|Front["length"]
        : NumberRange<L,H,Front,U|Front["length"]>
    : never
