"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[7034],{7034:(n,t,e)=>{e.r(t),e.d(t,{default:()=>r});const r='var jsCode = [\r\n\t\'"use strict";\',\r\n\t"function Person(age) {",\r\n\t"\tif (age) {",\r\n\t"\t\tthis.age = age;",\r\n\t"\t}",\r\n\t"}",\r\n\t"Person.prototype.getAge = function () {",\r\n\t"\treturn this.age;",\r\n\t"};",\r\n].join("\\n");\r\n\r\nvar editor = monaco.editor.create(document.getElementById("container"), {\r\n\tvalue: jsCode,\r\n\tlanguage: "javascript",\r\n});\r\n\r\nvar myCondition1 = editor.createContextKey(\r\n\t/*key name*/ "myCondition1",\r\n\t/*default value*/ false\r\n);\r\nvar myCondition2 = editor.createContextKey(\r\n\t/*key name*/ "myCondition2",\r\n\t/*default value*/ false\r\n);\r\n\r\neditor.addCommand(\r\n\tmonaco.KeyCode.Tab,\r\n\tfunction () {\r\n\t\t// services available in `ctx`\r\n\t\tconsole.log("my command is executing!");\r\n\t},\r\n\t"myCondition1 && myCondition2"\r\n);\r\n// @ts-ignore\r\nmyCondition1.set(true);\r\n\r\nsetTimeout(function () {\r\n\tconsole.log("now enabling also myCondition2, try pressing Tab!");\r\n\t// @ts-ignore\r\n\tmyCondition2.set(true);\r\n\t// you can use myCondition2.reset() to go back to the default\r\n}, 2000);\r\n'}}]);
//# sourceMappingURL=7034.js.map