"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[5256],{5256:(t,n,r)=>{r.r(n),r.d(n,{default:()=>e});const e='var jsCode = [\r\n\t\'"use strict";\',\r\n\t"function Person(age) {",\r\n\t"\tif (age) {",\r\n\t"\t\tthis.age = age;",\r\n\t"\t}",\r\n\t"}",\r\n\t"Person.prototype.getAge = function () {",\r\n\t"\treturn this.age;",\r\n\t"};",\r\n].join("\\n");\r\n\r\nvar editor = monaco.editor.create(document.getElementById("container"), {\r\n\tvalue: jsCode,\r\n\tlanguage: "javascript",\r\n\tglyphMargin: true,\r\n});\r\n\r\nvar decorations = editor.createDecorationsCollection([\r\n\t{\r\n\t\trange: new monaco.Range(3, 1, 3, 1),\r\n\t\toptions: {\r\n\t\t\tisWholeLine: true,\r\n\t\t\tclassName: "myContentClass",\r\n\t\t\tglyphMarginClassName: "myGlyphMarginClass",\r\n\t\t},\r\n\t},\r\n]);\r\n\r\n// You can now use `decorations` to change or remove the decoration\r\n'}}]);
//# sourceMappingURL=5256.js.map