"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[4260],{4260:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});const n='// Configures two JSON schemas, with references.\r\n\r\nvar jsonCode = ["{", \'    "p1": "v3",\', \'    "p2": false\', "}"].join("\\n");\r\nvar modelUri = monaco.Uri.parse("a://b/foo.json"); // a made up unique URI for our model\r\nvar model = monaco.editor.createModel(jsonCode, "json", modelUri);\r\n\r\n// configure the JSON language support with schemas and schema associations\r\nmonaco.languages.json.jsonDefaults.setDiagnosticsOptions({\r\n\tvalidate: true,\r\n\tschemas: [\r\n\t\t{\r\n\t\t\turi: "http://myserver/foo-schema.json", // id of the first schema\r\n\t\t\tfileMatch: [modelUri.toString()], // associate with our model\r\n\t\t\tschema: {\r\n\t\t\t\ttype: "object",\r\n\t\t\t\tproperties: {\r\n\t\t\t\t\tp1: {\r\n\t\t\t\t\t\tenum: ["v1", "v2"],\r\n\t\t\t\t\t},\r\n\t\t\t\t\tp2: {\r\n\t\t\t\t\t\t$ref: "http://myserver/bar-schema.json", // reference the second schema\r\n\t\t\t\t\t},\r\n\t\t\t\t},\r\n\t\t\t},\r\n\t\t},\r\n\t\t{\r\n\t\t\turi: "http://myserver/bar-schema.json", // id of the second schema\r\n\t\t\tschema: {\r\n\t\t\t\ttype: "object",\r\n\t\t\t\tproperties: {\r\n\t\t\t\t\tq1: {\r\n\t\t\t\t\t\tenum: ["x1", "x2"],\r\n\t\t\t\t\t},\r\n\t\t\t\t},\r\n\t\t\t},\r\n\t\t},\r\n\t],\r\n});\r\n\r\nmonaco.editor.create(document.getElementById("container"), {\r\n\tmodel: model,\r\n});\r\n'}}]);
//# sourceMappingURL=4260.js.map