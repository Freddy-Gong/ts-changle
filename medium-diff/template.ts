type Diff<O, O1> = {
    [P in keyof Omit<O, keyof O1> | keyof Omit<O1, keyof O>] : (Omit<O, keyof O1> & Omit<O1, keyof O>)[P]
}
