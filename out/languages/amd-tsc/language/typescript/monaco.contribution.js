define(["require","exports","./lib/typescriptServicesMetadata","../../fillers/monaco-editor-core"],(function(t,e,i,n){"use strict";var o,r,s,a,c;Object.defineProperty(e,"__esModule",{value:!0}),e.getJavaScriptWorker=e.getTypeScriptWorker=e.javascriptDefaults=e.typescriptDefaults=e.typescriptVersion=e.ModuleResolutionKind=e.ScriptTarget=e.NewLineKind=e.JsxEmit=e.ModuleKind=void 0,function(t){t[t.None=0]="None",t[t.CommonJS=1]="CommonJS",t[t.AMD=2]="AMD",t[t.UMD=3]="UMD",t[t.System=4]="System",t[t.ES2015=5]="ES2015",t[t.ESNext=99]="ESNext"}(o||(e.ModuleKind=o={})),function(t){t[t.None=0]="None",t[t.Preserve=1]="Preserve",t[t.React=2]="React",t[t.ReactNative=3]="ReactNative",t[t.ReactJSX=4]="ReactJSX",t[t.ReactJSXDev=5]="ReactJSXDev"}(r||(e.JsxEmit=r={})),function(t){t[t.CarriageReturnLineFeed=0]="CarriageReturnLineFeed",t[t.LineFeed=1]="LineFeed"}(s||(e.NewLineKind=s={})),function(t){t[t.ES3=0]="ES3",t[t.ES5=1]="ES5",t[t.ES2015=2]="ES2015",t[t.ES2016=3]="ES2016",t[t.ES2017=4]="ES2017",t[t.ES2018=5]="ES2018",t[t.ES2019=6]="ES2019",t[t.ES2020=7]="ES2020",t[t.ESNext=99]="ESNext",t[t.JSON=100]="JSON",t[t.Latest=99]="Latest"}(a||(e.ScriptTarget=a={})),function(t){t[t.Classic=1]="Classic",t[t.NodeJs=2]="NodeJs"}(c||(e.ModuleResolutionKind=c={}));var p=function(){function t(t,e,i,o,r){this._onDidChange=new n.Emitter,this._onDidExtraLibsChange=new n.Emitter,this._extraLibs=Object.create(null),this._removedExtraLibs=Object.create(null),this._eagerModelSync=!1,this.setCompilerOptions(t),this.setDiagnosticsOptions(e),this.setWorkerOptions(i),this.setInlayHintsOptions(o),this.setModeConfiguration(r),this._onDidExtraLibsChangeTimeout=-1}return Object.defineProperty(t.prototype,"onDidChange",{get:function(){return this._onDidChange.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onDidExtraLibsChange",{get:function(){return this._onDidExtraLibsChange.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"modeConfiguration",{get:function(){return this._modeConfiguration},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"workerOptions",{get:function(){return this._workerOptions},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"inlayHintsOptions",{get:function(){return this._inlayHintsOptions},enumerable:!1,configurable:!0}),t.prototype.getExtraLibs=function(){return this._extraLibs},t.prototype.addExtraLib=function(t,e){var i,n=this;if(i=void 0===e?"ts:extralib-".concat(Math.random().toString(36).substring(2,15)):e,this._extraLibs[i]&&this._extraLibs[i].content===t)return{dispose:function(){}};var o=1;return this._removedExtraLibs[i]&&(o=this._removedExtraLibs[i]+1),this._extraLibs[i]&&(o=this._extraLibs[i].version+1),this._extraLibs[i]={content:t,version:o},this._fireOnDidExtraLibsChangeSoon(),{dispose:function(){var t=n._extraLibs[i];t&&t.version===o&&(delete n._extraLibs[i],n._removedExtraLibs[i]=o,n._fireOnDidExtraLibsChangeSoon())}}},t.prototype.setExtraLibs=function(t){for(var e in this._extraLibs)this._removedExtraLibs[e]=this._extraLibs[e].version;if(this._extraLibs=Object.create(null),t&&t.length>0)for(var i=0,n=t;i<n.length;i++){var o=n[i],r=(e=o.filePath||"ts:extralib-".concat(Math.random().toString(36).substring(2,15)),o.content),s=1;this._removedExtraLibs[e]&&(s=this._removedExtraLibs[e]+1),this._extraLibs[e]={content:r,version:s}}this._fireOnDidExtraLibsChangeSoon()},t.prototype._fireOnDidExtraLibsChangeSoon=function(){var t=this;-1===this._onDidExtraLibsChangeTimeout&&(this._onDidExtraLibsChangeTimeout=window.setTimeout((function(){t._onDidExtraLibsChangeTimeout=-1,t._onDidExtraLibsChange.fire(void 0)}),0))},t.prototype.getCompilerOptions=function(){return this._compilerOptions},t.prototype.setCompilerOptions=function(t){this._compilerOptions=t||Object.create(null),this._onDidChange.fire(void 0)},t.prototype.getDiagnosticsOptions=function(){return this._diagnosticsOptions},t.prototype.setDiagnosticsOptions=function(t){this._diagnosticsOptions=t||Object.create(null),this._onDidChange.fire(void 0)},t.prototype.setWorkerOptions=function(t){this._workerOptions=t||Object.create(null),this._onDidChange.fire(void 0)},t.prototype.setInlayHintsOptions=function(t){this._inlayHintsOptions=t||Object.create(null),this._onDidChange.fire(void 0)},t.prototype.setMaximumWorkerIdleTime=function(t){},t.prototype.setEagerModelSync=function(t){this._eagerModelSync=t},t.prototype.getEagerModelSync=function(){return this._eagerModelSync},t.prototype.setModeConfiguration=function(t){this._modeConfiguration=t||Object.create(null),this._onDidChange.fire(void 0)},t}();e.typescriptVersion=i.typescriptVersion;var u={completionItems:!0,hovers:!0,documentSymbols:!0,definitions:!0,references:!0,documentHighlights:!0,rename:!0,diagnostics:!0,documentRangeFormattingEdits:!0,signatureHelp:!0,onTypeFormattingEdits:!0,codeActions:!0,inlayHints:!0};function d(){return AMD?new Promise((function(e,i){t(["vs/language/typescript/tsMode"],e,i)})):new Promise((function(e,i){t(["./tsMode"],e,i)}))}e.typescriptDefaults=new p({allowNonTsExtensions:!0,target:a.Latest},{noSemanticValidation:!1,noSyntaxValidation:!1,onlyVisible:!1},{},{},u),e.javascriptDefaults=new p({allowNonTsExtensions:!0,allowJs:!0,target:a.Latest},{noSemanticValidation:!0,noSyntaxValidation:!1,onlyVisible:!1},{},{},u),e.getTypeScriptWorker=function(){return d().then((function(t){return t.getTypeScriptWorker()}))},e.getJavaScriptWorker=function(){return d().then((function(t){return t.getJavaScriptWorker()}))},n.languages.typescript={ModuleKind:o,JsxEmit:r,NewLineKind:s,ScriptTarget:a,ModuleResolutionKind:c,typescriptVersion:e.typescriptVersion,typescriptDefaults:e.typescriptDefaults,javascriptDefaults:e.javascriptDefaults,getTypeScriptWorker:e.getTypeScriptWorker,getJavaScriptWorker:e.getJavaScriptWorker},n.languages.onLanguage("typescript",(function(){return d().then((function(t){return t.setupTypeScript(e.typescriptDefaults)}))})),n.languages.onLanguage("javascript",(function(){return d().then((function(t){return t.setupJavaScript(e.javascriptDefaults)}))}))}));