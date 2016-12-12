require('dts-generator').default(({
    name: 'typescript-mockify',
    baseDir: 'src',
    files: [
        'index.ts'
    ],
    out: 'dist/typescript-mockify.d.ts',
    main: "typescript-mockify/index"
}));