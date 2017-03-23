# Bug when building for production

# Developing works

```bash
yarn start
```

```
$ ng serve 
** NG Live Development Server is running on http://localhost:4200 **
Hash: 888ec32125e57675671c                                                              
Time: 8119ms
chunk    {0} polyfills.bundle.js, polyfills.bundle.js.map (polyfills) 158 kB {4} [initial] [rendered]
chunk    {1} main.bundle.js, main.bundle.js.map (main) 3.82 kB {3} [initial] [rendered]
chunk    {2} styles.bundle.js, styles.bundle.js.map (styles) 9.77 kB {4} [initial] [rendered]
chunk    {3} vendor.bundle.js, vendor.bundle.js.map (vendor) 2.57 MB [initial] [rendered]
chunk    {4} inline.bundle.js, inline.bundle.js.map (inline) 0 bytes [entry] [rendered]
webpack: Compiled successfully.
```


# Build with AOT fails

```bash
yarn build
```

```
$ ng build --aot 
 10% building modules 3/3 modules 0 activeCould not resolve module 'function toString() { [native code] }' relative to file /Users/leon/Temp/bug-aot-build/node_modules/@ng-bootstrap/ng-bootstrap/util/util.d.ts
Hash: ffa896c7e882276dae4e                                                              
Time: 2665ms
chunk    {0} polyfills.bundle.js, polyfills.bundle.js.map (polyfills) 158 kB {4} [initial] [rendered]
chunk    {1} styles.bundle.js, styles.bundle.js.map (styles) 9.77 kB {4} [initial] [rendered]
chunk    {2} main.bundle.js, main.bundle.js.map (main) 1.09 kB {3} [initial] [rendered]
chunk    {3} vendor.bundle.js, vendor.bundle.js.map (vendor) 805 kB [initial] [rendered]
chunk    {4} inline.bundle.js, inline.bundle.js.map (inline) 0 bytes [entry] [rendered]

ERROR in m.replace is not a function

ERROR in ./src/main.ts
Module not found: Error: Can't resolve './$$_gendir/app/app.module.ngfactory' in '/Users/leon/Temp/bug-aot-build/src'
 @ ./src/main.ts 4:0-74
 @ multi ./src/main.ts
error Command failed with exit code 1.
```
