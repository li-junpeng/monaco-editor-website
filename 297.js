"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[297],{297:(t,o,e)=>{e.r(o),e.d(o,{default:()=>r});const r='const originalModel = monaco.editor.createModel(\r\n\t/* set from `originalModel`: */ `hello world`,\r\n\t"text/plain"\r\n);\r\nconst modifiedModel = monaco.editor.createModel(\r\n\t/* set from `modifiedModel`: */ `Hello World!`,\r\n\t"text/plain"\r\n);\r\n\r\nconst diffEditor = monaco.editor.createDiffEditor(\r\n\tdocument.getElementById("container"),\r\n\t{\r\n\t\toriginalEditable: true,\r\n\t\tautomaticLayout: true,\r\n\t}\r\n);\r\ndiffEditor.setModel({\r\n\toriginal: originalModel,\r\n\tmodified: modifiedModel,\r\n});\r\n'}}]);
//# sourceMappingURL=297.js.map