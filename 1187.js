"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[1187],{1187:(t,n,r)=>{r.r(n),r.d(n,{default:()=>e});const e='monaco.languages.register({\r\n\tid: "foldLanguage",\r\n});\r\n\r\nvar value = `1. Hit F1 to bring up the Command Palette\r\n2. Type \'fold\'\r\n3. Choose \'Fold All Block Comments\' or \'Fold All Regions\'\r\n\r\n5. comment1\r\n6. comment1\r\n7. comment1\r\n\r\n9. unfoldable text\r\n10. unfoldable text\r\n11. unfoldable text\r\n\r\n13. comment2\r\n14. comment2\r\n15. comment2\r\n16. comment2\r\n17. comment2\r\n\r\n19. foldable text\r\n20. foldable text\r\n21. foldable text\r\n\r\n23. region1\r\n24. region1\r\n25. region1\r\n\r\n27. region2\r\n28. region2\r\n29. region2`;\r\n\r\nmonaco.editor.create(document.getElementById("container"), {\r\n\tvalue: value,\r\n\tlanguage: "foldLanguage",\r\n});\r\n\r\nmonaco.languages.registerFoldingRangeProvider("foldLanguage", {\r\n\tprovideFoldingRanges: function (model, context, token) {\r\n\t\treturn [\r\n\t\t\t// comment1\r\n\t\t\t{\r\n\t\t\t\tstart: 5,\r\n\t\t\t\tend: 7,\r\n\t\t\t\tkind: monaco.languages.FoldingRangeKind.Comment,\r\n\t\t\t},\r\n\t\t\t// comment2\r\n\t\t\t{\r\n\t\t\t\tstart: 13,\r\n\t\t\t\tend: 17,\r\n\t\t\t\tkind: monaco.languages.FoldingRangeKind.Comment,\r\n\t\t\t},\r\n\t\t\t// foldable text\r\n\t\t\t{\r\n\t\t\t\tstart: 19,\r\n\t\t\t\tend: 21,\r\n\t\t\t},\r\n\t\t\t// region1\r\n\t\t\t{\r\n\t\t\t\tstart: 23,\r\n\t\t\t\tend: 25,\r\n\t\t\t\tkind: monaco.languages.FoldingRangeKind.Region,\r\n\t\t\t},\r\n\t\t\t// region2\r\n\t\t\t{\r\n\t\t\t\tstart: 27,\r\n\t\t\t\tend: 29,\r\n\t\t\t\tkind: monaco.languages.FoldingRangeKind.Region,\r\n\t\t\t},\r\n\t\t];\r\n\t},\r\n});\r\n'}}]);
//# sourceMappingURL=1187.js.map