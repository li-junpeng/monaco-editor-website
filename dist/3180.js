"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[3180],{3180:(t,n,r)=>{r.r(n),r.d(n,{default:()=>e});const e='const value = `\r\nconst f = (a, b) => a + b;\r\n\r\nconst result = f(2, 5);\r\n`;\r\n\r\nconst editor = monaco.editor.create(document.getElementById("container"), {\r\n\tvalue,\r\n\tlanguage: "javascript",\r\n});\r\n\r\nmonaco.languages.registerInlayHintsProvider("javascript", {\r\n\tprovideInlayHints(model, range, token) {\r\n\t\treturn {\r\n\t\t\thints: [\r\n\t\t\t\t{\r\n\t\t\t\t\tkind: monaco.languages.InlayHintKind.Type,\r\n\t\t\t\t\tposition: { column: 13, lineNumber: 4 },\r\n\t\t\t\t\tlabel: `: Number`,\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\tkind: monaco.languages.InlayHintKind.Type,\r\n\t\t\t\t\tposition: { column: 13, lineNumber: 2 },\r\n\t\t\t\t\tlabel: `: Number`,\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\tkind: monaco.languages.InlayHintKind.Type,\r\n\t\t\t\t\tposition: { column: 16, lineNumber: 2 },\r\n\t\t\t\t\tlabel: `: Number`,\r\n\t\t\t\t\twhitespaceBefore: true, // see difference between a and b parameter\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\tkind: monaco.languages.InlayHintKind.Parameter,\r\n\t\t\t\t\tposition: { column: 18, lineNumber: 4 },\r\n\t\t\t\t\tlabel: `a:`,\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\tkind: monaco.languages.InlayHintKind.Parameter,\r\n\t\t\t\t\tposition: { column: 21, lineNumber: 4 },\r\n\t\t\t\t\tlabel: `b:`,\r\n\t\t\t\t\twhitespaceAfter: true, // similar to whitespaceBefore\r\n\t\t\t\t},\r\n\t\t\t],\r\n\t\t\tdispose: () => {},\r\n\t\t};\r\n\t},\r\n});\r\n'}}]);
//# sourceMappingURL=3180.js.map