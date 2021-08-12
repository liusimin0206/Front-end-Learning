function bundle(file) {
    const depsGraph = JSON.stringify(parseModules(file));
    return `(function (graph) { function require(file) { function absRequire(relPath) { return require(graph[file].deps[relPath]) } var exports = {}; (function (require,exports,code) { eval(code) })(absRequire,exports,graph[file].code) return exports } require('${file}') })(${depsGraph})`;
}


!fs.existsSync("./dist") && fs.mkdirSync("./dist");
fs.writeFileSync("./dist/bundle.js", content);