"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[2694],{2694:(t,n,e)=>{e.r(n),e.d(n,{default:()=>r});const r='var jsCode = [\r\n\t\'"use strict";\',\r\n\t"function Person(age) {",\r\n\t"\tif (age) {",\r\n\t"\t\tthis.age = age;",\r\n\t"\t}",\r\n\t"}",\r\n\t"Person.prototype.getAge = function () {",\r\n\t"\treturn this.age;",\r\n\t"};",\r\n].join("\\n");\r\n\r\nvar editor = monaco.editor.create(document.getElementById("container"), {\r\n\tvalue: jsCode,\r\n\tlanguage: "javascript",\r\n\tglyphMargin: true,\r\n\tcontextmenu: false,\r\n});\r\n\r\nvar decorations = editor.createDecorationsCollection([\r\n\t{\r\n\t\trange: new monaco.Range(3, 1, 3, 1),\r\n\t\toptions: {\r\n\t\t\tisWholeLine: true,\r\n\t\t\tclassName: "myContentClass",\r\n\t\t\tglyphMarginClassName: "myGlyphMarginClass",\r\n\t\t},\r\n\t},\r\n]);\r\n\r\n// Add a zone to make hit testing more interesting\r\nvar viewZoneId = null;\r\neditor.changeViewZones(function (changeAccessor) {\r\n\tvar domNode = document.createElement("div");\r\n\tdomNode.style.background = "lightgreen";\r\n\tviewZoneId = changeAccessor.addZone({\r\n\t\tafterLineNumber: 3,\r\n\t\theightInLines: 3,\r\n\t\tdomNode: domNode,\r\n\t});\r\n});\r\n\r\n// Add a content widget (scrolls inline with text)\r\nvar contentWidget = {\r\n\tdomNode: (function () {\r\n\t\tvar domNode = document.createElement("div");\r\n\t\tdomNode.innerHTML = "My content widget";\r\n\t\tdomNode.style.background = "grey";\r\n\t\treturn domNode;\r\n\t})(),\r\n\tgetId: function () {\r\n\t\treturn "my.content.widget";\r\n\t},\r\n\tgetDomNode: function () {\r\n\t\treturn this.domNode;\r\n\t},\r\n\tgetPosition: function () {\r\n\t\treturn {\r\n\t\t\tposition: {\r\n\t\t\t\tlineNumber: 7,\r\n\t\t\t\tcolumn: 8,\r\n\t\t\t},\r\n\t\t\tpreference: [\r\n\t\t\t\tmonaco.editor.ContentWidgetPositionPreference.ABOVE,\r\n\t\t\t\tmonaco.editor.ContentWidgetPositionPreference.BELOW,\r\n\t\t\t],\r\n\t\t};\r\n\t},\r\n};\r\neditor.addContentWidget(contentWidget);\r\n\r\n// Add an overlay widget\r\nvar overlayWidget = {\r\n\tdomNode: (function () {\r\n\t\tvar domNode = document.createElement("div");\r\n\t\tdomNode.innerHTML = "My overlay widget";\r\n\t\tdomNode.style.background = "grey";\r\n\t\tdomNode.style.right = "30px";\r\n\t\tdomNode.style.top = "50px";\r\n\t\treturn domNode;\r\n\t})(),\r\n\tgetId: function () {\r\n\t\treturn "my.overlay.widget";\r\n\t},\r\n\tgetDomNode: function () {\r\n\t\treturn this.domNode;\r\n\t},\r\n\tgetPosition: function () {\r\n\t\treturn null;\r\n\t},\r\n};\r\neditor.addOverlayWidget(overlayWidget);\r\n\r\nvar output = document.getElementById("output");\r\nfunction showEvent(str) {\r\n\twhile (output.childNodes.length > 6) {\r\n\t\toutput.removeChild(output.firstChild.nextSibling.nextSibling);\r\n\t}\r\n\toutput.appendChild(document.createTextNode(str));\r\n\toutput.appendChild(document.createElement("br"));\r\n}\r\n\r\neditor.onMouseMove(function (e) {\r\n\tshowEvent("mousemove - " + e.target.toString());\r\n});\r\neditor.onMouseDown(function (e) {\r\n\tshowEvent("mousedown - " + e.target.toString());\r\n});\r\neditor.onContextMenu(function (e) {\r\n\tshowEvent("contextmenu - " + e.target.toString());\r\n});\r\neditor.onMouseLeave(function (e) {\r\n\tshowEvent("mouseleave");\r\n});\r\n'}}]);
//# sourceMappingURL=2694.js.map