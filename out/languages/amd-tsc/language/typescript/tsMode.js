var __createBinding=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t);var i=Object.getOwnPropertyDescriptor(r,t);i&&!("get"in i?!r.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,n,i)}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),__exportStar=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||__createBinding(r,e,t)};define(["require","exports","./workerManager","./languageFeatures","../../fillers/monaco-editor-core","./workerManager","./languageFeatures"],(function(e,r,t,n,i,a,o){"use strict";var s,u;function g(e,r){var a=[],o=[],s=new t.WorkerManager(r,e);a.push(s);var u,g=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return s.getLanguageServiceWorker.apply(s,e)},c=new n.LibFiles(g);return u=e.modeConfiguration,p(o),u.completionItems&&o.push(i.languages.registerCompletionItemProvider(r,new n.SuggestAdapter(g))),u.signatureHelp&&o.push(i.languages.registerSignatureHelpProvider(r,new n.SignatureHelpAdapter(g))),u.hovers&&o.push(i.languages.registerHoverProvider(r,new n.QuickInfoAdapter(g))),u.documentHighlights&&o.push(i.languages.registerDocumentHighlightProvider(r,new n.DocumentHighlightAdapter(g))),u.definitions&&o.push(i.languages.registerDefinitionProvider(r,new n.DefinitionAdapter(c,g))),u.references&&o.push(i.languages.registerReferenceProvider(r,new n.ReferenceAdapter(c,g))),u.documentSymbols&&o.push(i.languages.registerDocumentSymbolProvider(r,new n.OutlineAdapter(g))),u.rename&&o.push(i.languages.registerRenameProvider(r,new n.RenameAdapter(c,g))),u.documentRangeFormattingEdits&&o.push(i.languages.registerDocumentRangeFormattingEditProvider(r,new n.FormatAdapter(g))),u.onTypeFormattingEdits&&o.push(i.languages.registerOnTypeFormattingEditProvider(r,new n.FormatOnTypeAdapter(g))),u.codeActions&&o.push(i.languages.registerCodeActionProvider(r,new n.CodeActionAdaptor(g))),u.inlayHints&&o.push(i.languages.registerInlayHintsProvider(r,new n.InlayHintsAdapter(g))),u.diagnostics&&o.push(new n.DiagnosticsAdapter(c,e,r,g)),a.push(function(e){return{dispose:function(){return p(e)}}}(o)),g}function p(e){for(;e.length;)e.pop().dispose()}Object.defineProperty(r,"__esModule",{value:!0}),r.WorkerManager=r.getTypeScriptWorker=r.getJavaScriptWorker=r.setupJavaScript=r.setupTypeScript=void 0,r.setupTypeScript=function(e){u=g(e,"typescript")},r.setupJavaScript=function(e){s=g(e,"javascript")},r.getJavaScriptWorker=function(){return new Promise((function(e,r){if(!s)return r("JavaScript not registered!");e(s)}))},r.getTypeScriptWorker=function(){return new Promise((function(e,r){if(!u)return r("TypeScript not registered!");e(u)}))},Object.defineProperty(r,"WorkerManager",{enumerable:!0,get:function(){return a.WorkerManager}}),__exportStar(o,r)}));