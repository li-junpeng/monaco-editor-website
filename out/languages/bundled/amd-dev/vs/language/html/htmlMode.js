/*! For license information please see htmlMode.js.LICENSE.txt */
"use strict";define("vs/language/html/htmlMode",["require"],(e=>(()=>{var t,n,r=Object.create,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(t=>void 0!==e?e:"undefined"!=typeof Proxy?new Proxy(t,{get:(t,n)=>(void 0!==e?e:t)[n]}):t)((function(t){if(void 0!==e)return e.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')})),d=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of a(t))u.call(e,s)||s===n||i(e,s,{get:()=>t[s],enumerable:!(r=o(t,s))||r.enumerable});return e},g=(e,t,n)=>(n=null!=e?r(s(e)):{},d(!t&&e&&e.__esModule?n:i(n,"default",{value:e,enumerable:!0}),e)),l=(t={"src/fillers/monaco-editor-core-amd.ts"(e,t){var n=g(c("vs/editor/editor.api"));t.exports=n}},function(){return n||(0,t[a(t)[0]])((n={exports:{}}).exports,n),n.exports}),h={};((e,t)=>{for(var n in t)i(e,n,{get:t[n],enumerable:!0})})(h,{CompletionAdapter:()=>vt,DefinitionAdapter:()=>At,DiagnosticsAdapter:()=>ft,DocumentColorAdapter:()=>Ot,DocumentFormattingEditProvider:()=>Ft,DocumentHighlightAdapter:()=>Ct,DocumentLinkAdapter:()=>Mt,DocumentRangeFormattingEditProvider:()=>Lt,DocumentSymbolAdapter:()=>Tt,FoldingRangeAdapter:()=>Nt,HoverAdapter:()=>yt,ReferenceAdapter:()=>Rt,RenameAdapter:()=>Pt,SelectionRangeAdapter:()=>Ut,WorkerManager:()=>de,fromPosition:()=>mt,fromRange:()=>_t,setupMode:()=>Ht,setupMode1:()=>Vt,toRange:()=>wt,toTextEdit:()=>kt});var f={};((e,t,n)=>{d(e,t,"default")})(f,g(l()));var p,v,m,_,w,b,k,y,E,x,C,I,A,S,R,P,T,D,M,F,L,j,O,N,U,W,V,H,K,z,X,q,B,$,Q,G,J,Y,Z,ee,te,ne,re,ie,oe,ae,se,ue,ce,de=class{_defaults;_idleCheckInterval;_lastUsedTime;_configChangeListener;_worker;_client;constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=f.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}};(v=p||(p={})).MIN_VALUE=-2147483648,v.MAX_VALUE=2147483647,(_=m||(m={})).MIN_VALUE=0,_.MAX_VALUE=2147483647,(b=w||(w={})).create=function(e,t){return e===Number.MAX_VALUE&&(e=m.MAX_VALUE),t===Number.MAX_VALUE&&(t=m.MAX_VALUE),{line:e,character:t}},b.is=function(e){var t=e;return dt.objectLiteral(t)&&dt.uinteger(t.line)&&dt.uinteger(t.character)},(y=k||(k={})).create=function(e,t,n,r){if(dt.uinteger(e)&&dt.uinteger(t)&&dt.uinteger(n)&&dt.uinteger(r))return{start:w.create(e,t),end:w.create(n,r)};if(w.is(e)&&w.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")},y.is=function(e){var t=e;return dt.objectLiteral(t)&&w.is(t.start)&&w.is(t.end)},(x=E||(E={})).create=function(e,t){return{uri:e,range:t}},x.is=function(e){var t=e;return dt.defined(t)&&k.is(t.range)&&(dt.string(t.uri)||dt.undefined(t.uri))},(I=C||(C={})).create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},I.is=function(e){var t=e;return dt.defined(t)&&k.is(t.targetRange)&&dt.string(t.targetUri)&&(k.is(t.targetSelectionRange)||dt.undefined(t.targetSelectionRange))&&(k.is(t.originSelectionRange)||dt.undefined(t.originSelectionRange))},(S=A||(A={})).create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},S.is=function(e){var t=e;return dt.numberRange(t.red,0,1)&&dt.numberRange(t.green,0,1)&&dt.numberRange(t.blue,0,1)&&dt.numberRange(t.alpha,0,1)},(P=R||(R={})).create=function(e,t){return{range:e,color:t}},P.is=function(e){var t=e;return k.is(t.range)&&A.is(t.color)},(D=T||(T={})).create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},D.is=function(e){var t=e;return dt.string(t.label)&&(dt.undefined(t.textEdit)||$.is(t))&&(dt.undefined(t.additionalTextEdits)||dt.typedArray(t.additionalTextEdits,$.is))},(F=M||(M={})).Comment="comment",F.Imports="imports",F.Region="region",(j=L||(L={})).create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return dt.defined(n)&&(o.startCharacter=n),dt.defined(r)&&(o.endCharacter=r),dt.defined(i)&&(o.kind=i),o},j.is=function(e){var t=e;return dt.uinteger(t.startLine)&&dt.uinteger(t.startLine)&&(dt.undefined(t.startCharacter)||dt.uinteger(t.startCharacter))&&(dt.undefined(t.endCharacter)||dt.uinteger(t.endCharacter))&&(dt.undefined(t.kind)||dt.string(t.kind))},(N=O||(O={})).create=function(e,t){return{location:e,message:t}},N.is=function(e){var t=e;return dt.defined(t)&&E.is(t.location)&&dt.string(t.message)},(W=U||(U={})).Error=1,W.Warning=2,W.Information=3,W.Hint=4,(H=V||(V={})).Unnecessary=1,H.Deprecated=2,(K||(K={})).is=function(e){var t=e;return null!=t&&dt.string(t.href)},(X=z||(z={})).create=function(e,t,n,r,i,o){var a={range:e,message:t};return dt.defined(n)&&(a.severity=n),dt.defined(r)&&(a.code=r),dt.defined(i)&&(a.source=i),dt.defined(o)&&(a.relatedInformation=o),a},X.is=function(e){var t,n=e;return dt.defined(n)&&k.is(n.range)&&dt.string(n.message)&&(dt.number(n.severity)||dt.undefined(n.severity))&&(dt.integer(n.code)||dt.string(n.code)||dt.undefined(n.code))&&(dt.undefined(n.codeDescription)||dt.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(dt.string(n.source)||dt.undefined(n.source))&&(dt.undefined(n.relatedInformation)||dt.typedArray(n.relatedInformation,O.is))},(B=q||(q={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return dt.defined(n)&&n.length>0&&(i.arguments=n),i},B.is=function(e){var t=e;return dt.defined(t)&&dt.string(t.title)&&dt.string(t.command)},(Q=$||($={})).replace=function(e,t){return{range:e,newText:t}},Q.insert=function(e,t){return{range:{start:e,end:e},newText:t}},Q.del=function(e){return{range:e,newText:""}},Q.is=function(e){var t=e;return dt.objectLiteral(t)&&dt.string(t.newText)&&k.is(t.range)},(J=G||(G={})).create=function(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r},J.is=function(e){var t=e;return void 0!==t&&dt.objectLiteral(t)&&dt.string(t.label)&&(dt.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(dt.string(t.description)||void 0===t.description)},(Y||(Y={})).is=function(e){return"string"==typeof e},(ee=Z||(Z={})).replace=function(e,t,n){return{range:e,newText:t,annotationId:n}},ee.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}},ee.del=function(e,t){return{range:e,newText:"",annotationId:t}},ee.is=function(e){var t=e;return $.is(t)&&(G.is(t.annotationId)||Y.is(t.annotationId))},(ne=te||(te={})).create=function(e,t){return{textDocument:e,edits:t}},ne.is=function(e){var t=e;return dt.defined(t)&&pe.is(t.textDocument)&&Array.isArray(t.edits)},(ie=re||(re={})).create=function(e,t,n){var r={kind:"create",uri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},ie.is=function(e){var t=e;return t&&"create"===t.kind&&dt.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||dt.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||dt.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||Y.is(t.annotationId))},(ae=oe||(oe={})).create=function(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(i.options=n),void 0!==r&&(i.annotationId=r),i},ae.is=function(e){var t=e;return t&&"rename"===t.kind&&dt.string(t.oldUri)&&dt.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||dt.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||dt.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||Y.is(t.annotationId))},(ue=se||(se={})).create=function(e,t,n){var r={kind:"delete",uri:e};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},ue.is=function(e){var t=e;return t&&"delete"===t.kind&&dt.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||dt.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||dt.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||Y.is(t.annotationId))},(ce||(ce={})).is=function(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return dt.string(e.kind)?re.is(e)||oe.is(e)||se.is(e):te.is(e)})))};var ge,le,he,fe,pe,ve,me,_e,we,be,ke,ye,Ee,xe,Ce,Ie,Ae,Se,Re,Pe,Te,De,Me,Fe,Le,je,Oe,Ne,Ue,We,Ve,He,Ke,ze,Xe,qe,Be,$e,Qe,Ge,Je,Ye,Ze,et,tt,nt,rt,it,ot,at,st,ut=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=$.insert(e,t):Y.is(n)?(i=n,r=Z.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=Z.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=$.replace(e,t):Y.is(n)?(i=n,r=Z.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=Z.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=$.del(e):Y.is(t)?(r=t,n=Z.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=Z.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),ct=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(Y.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw new Error("Id "+n+" is already in use.");if(void 0===t)throw new Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new ct(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(te.is(e)){var n=new ut(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}}))):e.changes&&Object.keys(e.changes).forEach((function(n){var r=new ut(e.changes[n]);t._textEditChanges[n]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(pe.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version};if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:i=[]};this._workspaceEdit.documentChanges.push(n),r=new ut(i,this._changeAnnotations),this._textEditChanges[t.uri]=r}return r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new ut(i),this._textEditChanges[e]=r}return r},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new ct,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(G.is(t)||Y.is(t)?r=t:n=t,void 0===r?i=re.create(e,n):(o=Y.is(r)?r:this._changeAnnotations.manage(r),i=re.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(G.is(n)||Y.is(n)?i=n:r=n,void 0===i?o=oe.create(e,t,r):(a=Y.is(i)?i:this._changeAnnotations.manage(i),o=oe.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(G.is(t)||Y.is(t)?r=t:n=t,void 0===r?i=se.create(e,n):(o=Y.is(r)?r:this._changeAnnotations.manage(r),i=se.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}(),(le=ge||(ge={})).create=function(e){return{uri:e}},le.is=function(e){var t=e;return dt.defined(t)&&dt.string(t.uri)},(fe=he||(he={})).create=function(e,t){return{uri:e,version:t}},fe.is=function(e){var t=e;return dt.defined(t)&&dt.string(t.uri)&&dt.integer(t.version)},(ve=pe||(pe={})).create=function(e,t){return{uri:e,version:t}},ve.is=function(e){var t=e;return dt.defined(t)&&dt.string(t.uri)&&(null===t.version||dt.integer(t.version))},(_e=me||(me={})).create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},_e.is=function(e){var t=e;return dt.defined(t)&&dt.string(t.uri)&&dt.string(t.languageId)&&dt.integer(t.version)&&dt.string(t.text)},(be=we||(we={})).PlainText="plaintext",be.Markdown="markdown",function(e){e.is=function(t){var n=t;return n===e.PlainText||n===e.Markdown}}(we||(we={})),(ke||(ke={})).is=function(e){var t=e;return dt.objectLiteral(e)&&we.is(t.kind)&&dt.string(t.value)},(Ee=ye||(ye={})).Text=1,Ee.Method=2,Ee.Function=3,Ee.Constructor=4,Ee.Field=5,Ee.Variable=6,Ee.Class=7,Ee.Interface=8,Ee.Module=9,Ee.Property=10,Ee.Unit=11,Ee.Value=12,Ee.Enum=13,Ee.Keyword=14,Ee.Snippet=15,Ee.Color=16,Ee.File=17,Ee.Reference=18,Ee.Folder=19,Ee.EnumMember=20,Ee.Constant=21,Ee.Struct=22,Ee.Event=23,Ee.Operator=24,Ee.TypeParameter=25,(Ce=xe||(xe={})).PlainText=1,Ce.Snippet=2,(Ie||(Ie={})).Deprecated=1,(Se=Ae||(Ae={})).create=function(e,t,n){return{newText:e,insert:t,replace:n}},Se.is=function(e){var t=e;return t&&dt.string(t.newText)&&k.is(t.insert)&&k.is(t.replace)},(Pe=Re||(Re={})).asIs=1,Pe.adjustIndentation=2,(Te||(Te={})).create=function(e){return{label:e}},(De||(De={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},(Fe=Me||(Me={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},Fe.is=function(e){var t=e;return dt.string(t)||dt.objectLiteral(t)&&dt.string(t.language)&&dt.string(t.value)},(Le||(Le={})).is=function(e){var t=e;return!!t&&dt.objectLiteral(t)&&(ke.is(t.contents)||Me.is(t.contents)||dt.typedArray(t.contents,Me.is))&&(void 0===e.range||k.is(e.range))},(je||(je={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(Oe||(Oe={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return dt.defined(t)&&(i.documentation=t),dt.defined(n)?i.parameters=n:i.parameters=[],i},(Ue=Ne||(Ne={})).Text=1,Ue.Read=2,Ue.Write=3,(We||(We={})).create=function(e,t){var n={range:e};return dt.number(t)&&(n.kind=t),n},(He=Ve||(Ve={})).File=1,He.Module=2,He.Namespace=3,He.Package=4,He.Class=5,He.Method=6,He.Property=7,He.Field=8,He.Constructor=9,He.Enum=10,He.Interface=11,He.Function=12,He.Variable=13,He.Constant=14,He.String=15,He.Number=16,He.Boolean=17,He.Array=18,He.Object=19,He.Key=20,He.Null=21,He.EnumMember=22,He.Struct=23,He.Event=24,He.Operator=25,He.TypeParameter=26,(Ke||(Ke={})).Deprecated=1,(ze||(ze={})).create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o},(qe=Xe||(Xe={})).create=function(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},qe.is=function(e){var t=e;return t&&dt.string(t.name)&&dt.number(t.kind)&&k.is(t.range)&&k.is(t.selectionRange)&&(void 0===t.detail||dt.string(t.detail))&&(void 0===t.deprecated||dt.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))},($e=Be||(Be={})).Empty="",$e.QuickFix="quickfix",$e.Refactor="refactor",$e.RefactorExtract="refactor.extract",$e.RefactorInline="refactor.inline",$e.RefactorRewrite="refactor.rewrite",$e.Source="source",$e.SourceOrganizeImports="source.organizeImports",$e.SourceFixAll="source.fixAll",(Ge=Qe||(Qe={})).create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},Ge.is=function(e){var t=e;return dt.defined(t)&&dt.typedArray(t.diagnostics,z.is)&&(void 0===t.only||dt.typedArray(t.only,dt.string))},(Ye=Je||(Je={})).create=function(e,t,n){var r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):q.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r},Ye.is=function(e){var t=e;return t&&dt.string(t.title)&&(void 0===t.diagnostics||dt.typedArray(t.diagnostics,z.is))&&(void 0===t.kind||dt.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||q.is(t.command))&&(void 0===t.isPreferred||dt.boolean(t.isPreferred))&&(void 0===t.edit||ce.is(t.edit))},(et=Ze||(Ze={})).create=function(e,t){var n={range:e};return dt.defined(t)&&(n.data=t),n},et.is=function(e){var t=e;return dt.defined(t)&&k.is(t.range)&&(dt.undefined(t.command)||q.is(t.command))},(nt=tt||(tt={})).create=function(e,t){return{tabSize:e,insertSpaces:t}},nt.is=function(e){var t=e;return dt.defined(t)&&dt.uinteger(t.tabSize)&&dt.boolean(t.insertSpaces)},(it=rt||(rt={})).create=function(e,t,n){return{range:e,target:t,data:n}},it.is=function(e){var t=e;return dt.defined(t)&&k.is(t.range)&&(dt.undefined(t.target)||dt.string(t.target))},(at=ot||(ot={})).create=function(e,t){return{range:e,parent:t}},at.is=function(e){var t=e;return void 0!==t&&k.is(t.range)&&(void 0===t.parent||at.is(t.parent))},function(e){function t(e,n){if(e.length<=1)return e;var r=e.length/2|0,i=e.slice(0,r),o=e.slice(r);t(i,n),t(o,n);for(var a=0,s=0,u=0;a<i.length&&s<o.length;){var c=n(i[a],o[s]);e[u++]=c<=0?i[a++]:o[s++]}for(;a<i.length;)e[u++]=i[a++];for(;s<o.length;)e[u++]=o[s++];return e}e.create=function(e,t,n,r){return new ht(e,t,n,r)},e.is=function(e){var t=e;return!!(dt.defined(t)&&dt.string(t.uri)&&(dt.undefined(t.languageId)||dt.string(t.languageId))&&dt.uinteger(t.lineCount)&&dt.func(t.getText)&&dt.func(t.positionAt)&&dt.func(t.offsetAt))},e.applyEdits=function(e,n){for(var r=e.getText(),i=t(n,(function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),o=r.length,a=i.length-1;a>=0;a--){var s=i[a],u=e.offsetAt(s.range.start),c=e.offsetAt(s.range.end);if(!(c<=o))throw new Error("Overlapping edit");r=r.substring(0,u)+s.newText+r.substring(c,r.length),o=u}return r}}(st||(st={}));var dt,gt,lt,ht=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return w.create(0,e);for(;n<r;){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return w.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();gt=dt||(dt={}),lt=Object.prototype.toString,gt.defined=function(e){return void 0!==e},gt.undefined=function(e){return void 0===e},gt.boolean=function(e){return!0===e||!1===e},gt.string=function(e){return"[object String]"===lt.call(e)},gt.number=function(e){return"[object Number]"===lt.call(e)},gt.numberRange=function(e,t,n){return"[object Number]"===lt.call(e)&&t<=e&&e<=n},gt.integer=function(e){return"[object Number]"===lt.call(e)&&-2147483648<=e&&e<=2147483647},gt.uinteger=function(e){return"[object Number]"===lt.call(e)&&0<=e&&e<=2147483647},gt.func=function(e){return"[object Function]"===lt.call(e)},gt.objectLiteral=function(e){return null!==e&&"object"==typeof e},gt.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)};var ft=class{constructor(e,t,n){this._languageId=e,this._worker=t;const r=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent((()=>{window.clearTimeout(t),t=window.setTimeout((()=>this._doValidate(e.uri,n)),500)})),this._doValidate(e.uri,n))},i=e=>{f.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(f.editor.onDidCreateModel(r)),this._disposables.push(f.editor.onWillDisposeModel(i)),this._disposables.push(f.editor.onDidChangeModelLanguage((e=>{i(e.model),r(e.model)}))),this._disposables.push(n((e=>{f.editor.getModels().forEach((e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))}))}))),this._disposables.push({dispose:()=>{f.editor.getModels().forEach(i);for(let e in this._listener)this._listener[e].dispose()}}),f.editor.getModels().forEach(r)}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables.length=0}_doValidate(e,t){this._worker(e).then((t=>t.doValidation(e.toString()))).then((n=>{const r=n.map((e=>function(e,t){let n="number"==typeof t.code?String(t.code):t.code;return{severity:pt(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}(0,e)));let i=f.editor.getModel(e);i&&i.getLanguageId()===t&&f.editor.setModelMarkers(i,t,r)})).then(void 0,(e=>{console.error(e)}))}};function pt(e){switch(e){case U.Error:return f.MarkerSeverity.Error;case U.Warning:return f.MarkerSeverity.Warning;case U.Information:return f.MarkerSeverity.Info;case U.Hint:return f.MarkerSeverity.Hint;default:return f.MarkerSeverity.Info}}var vt=class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doComplete(i.toString(),mt(t)))).then((n=>{if(!n)return;const r=e.getWordUntilPosition(t),i=new f.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map((e=>{const t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(n=e.command,n&&"editor.action.triggerSuggest"===n.command?{id:n.command,title:n.title,arguments:n.arguments}:void 0),range:i,kind:bt(e.kind)};var n,r;return e.textEdit&&(void 0!==(r=e.textEdit).insert&&void 0!==r.replace?t.range={insert:wt(e.textEdit.insert),replace:wt(e.textEdit.replace)}:t.range=wt(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(kt)),e.insertTextFormat===xe.Snippet&&(t.insertTextRules=f.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:n.isIncomplete,suggestions:o}}))}};function mt(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function _t(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function wt(e){if(e)return new f.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function bt(e){const t=f.languages.CompletionItemKind;switch(e){case ye.Text:return t.Text;case ye.Method:return t.Method;case ye.Function:return t.Function;case ye.Constructor:return t.Constructor;case ye.Field:return t.Field;case ye.Variable:return t.Variable;case ye.Class:return t.Class;case ye.Interface:return t.Interface;case ye.Module:return t.Module;case ye.Property:return t.Property;case ye.Unit:return t.Unit;case ye.Value:return t.Value;case ye.Enum:return t.Enum;case ye.Keyword:return t.Keyword;case ye.Snippet:return t.Snippet;case ye.Color:return t.Color;case ye.File:return t.File;case ye.Reference:return t.Reference}return t.Property}function kt(e){if(e)return{range:wt(e.range),text:e.newText}}var yt=class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.doHover(r.toString(),mt(t)))).then((e=>{if(e)return{range:wt(e.range),contents:xt(e.contents)}}))}};function Et(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function xt(e){if(e)return Array.isArray(e)?e.map(Et):[Et(e)]}var Ct=class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDocumentHighlights(r.toString(),mt(t)))).then((e=>{if(e)return e.map((e=>({range:wt(e.range),kind:It(e.kind)})))}))}};function It(e){switch(e){case Ne.Read:return f.languages.DocumentHighlightKind.Read;case Ne.Write:return f.languages.DocumentHighlightKind.Write;case Ne.Text:return f.languages.DocumentHighlightKind.Text}return f.languages.DocumentHighlightKind.Text}var At=class{constructor(e){this._worker=e}provideDefinition(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDefinition(r.toString(),mt(t)))).then((e=>{if(e)return[St(e)]}))}};function St(e){return{uri:f.Uri.parse(e.uri),range:wt(e.range)}}var Rt=class{constructor(e){this._worker=e}provideReferences(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.findReferences(i.toString(),mt(t)))).then((e=>{if(e)return e.map(St)}))}},Pt=class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doRename(i.toString(),mt(t),n))).then((e=>function(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){const r=f.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,versionId:void 0,textEdit:{range:wt(i.range),text:i.newText}})}return{edits:t}}(e)))}},Tt=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentSymbols(n.toString()))).then((e=>{if(e)return e.map((e=>({name:e.name,detail:"",containerName:e.containerName,kind:Dt(e.kind),range:wt(e.location.range),selectionRange:wt(e.location.range),tags:[]})))}))}};function Dt(e){let t=f.languages.SymbolKind;switch(e){case Ve.File:return t.Array;case Ve.Module:return t.Module;case Ve.Namespace:return t.Namespace;case Ve.Package:return t.Package;case Ve.Class:return t.Class;case Ve.Method:return t.Method;case Ve.Property:return t.Property;case Ve.Field:return t.Field;case Ve.Constructor:return t.Constructor;case Ve.Enum:return t.Enum;case Ve.Interface:return t.Interface;case Ve.Function:return t.Function;case Ve.Variable:return t.Variable;case Ve.Constant:return t.Constant;case Ve.String:return t.String;case Ve.Number:return t.Number;case Ve.Boolean:return t.Boolean;case Ve.Array:return t.Array}return t.Function}var Mt=class{constructor(e){this._worker=e}provideLinks(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentLinks(n.toString()))).then((e=>{if(e)return{links:e.map((e=>({range:wt(e.range),url:e.target})))}}))}},Ft=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.format(r.toString(),null,jt(t)).then((e=>{if(e&&0!==e.length)return e.map(kt)}))))}},Lt=class{constructor(e){this._worker=e}canFormatMultipleRanges=!1;provideDocumentRangeFormattingEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.format(i.toString(),_t(t),jt(n)).then((e=>{if(e&&0!==e.length)return e.map(kt)}))))}};function jt(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var Ot=class{constructor(e){this._worker=e}provideDocumentColors(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentColors(n.toString()))).then((e=>{if(e)return e.map((e=>({color:e.color,range:wt(e.range)})))}))}provideColorPresentations(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getColorPresentations(r.toString(),t.color,_t(t.range)))).then((e=>{if(e)return e.map((e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=kt(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(kt)),t}))}))}},Nt=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getFoldingRanges(r.toString(),t))).then((e=>{if(e)return e.map((e=>{const t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case M.Comment:return f.languages.FoldingRangeKind.Comment;case M.Imports:return f.languages.FoldingRangeKind.Imports;case M.Region:return f.languages.FoldingRangeKind.Region}}(e.kind)),t}))}))}},Ut=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getSelectionRanges(r.toString(),t.map(mt)))).then((e=>{if(e)return e.map((e=>{const t=[];for(;e;)t.push({range:wt(e.range)}),e=e.parent;return t}))}))}},Wt=class extends vt{constructor(e){super(e,[".",":","<",'"',"=","/"])}};function Vt(e){const t=new de(e),n=(...e)=>t.getLanguageServiceWorker(...e);let r=e.languageId;f.languages.registerCompletionItemProvider(r,new Wt(n)),f.languages.registerHoverProvider(r,new yt(n)),f.languages.registerDocumentHighlightProvider(r,new Ct(n)),f.languages.registerLinkProvider(r,new Mt(n)),f.languages.registerFoldingRangeProvider(r,new Nt(n)),f.languages.registerDocumentSymbolProvider(r,new Tt(n)),f.languages.registerSelectionRangeProvider(r,new Ut(n)),f.languages.registerRenameProvider(r,new Pt(n)),"html"===r&&(f.languages.registerDocumentFormattingEditProvider(r,new Ft(n)),f.languages.registerDocumentRangeFormattingEditProvider(r,new Lt(n)))}function Ht(e){const t=[],n=[],r=new de(e);t.push(r);const i=(...e)=>r.getLanguageServiceWorker(...e);return function(){const{languageId:t,modeConfiguration:r}=e;zt(n),r.completionItems&&n.push(f.languages.registerCompletionItemProvider(t,new Wt(i))),r.hovers&&n.push(f.languages.registerHoverProvider(t,new yt(i))),r.documentHighlights&&n.push(f.languages.registerDocumentHighlightProvider(t,new Ct(i))),r.links&&n.push(f.languages.registerLinkProvider(t,new Mt(i))),r.documentSymbols&&n.push(f.languages.registerDocumentSymbolProvider(t,new Tt(i))),r.rename&&n.push(f.languages.registerRenameProvider(t,new Pt(i))),r.foldingRanges&&n.push(f.languages.registerFoldingRangeProvider(t,new Nt(i))),r.selectionRanges&&n.push(f.languages.registerSelectionRangeProvider(t,new Ut(i))),r.documentFormattingEdits&&n.push(f.languages.registerDocumentFormattingEditProvider(t,new Ft(i))),r.documentRangeFormattingEdits&&n.push(f.languages.registerDocumentRangeFormattingEditProvider(t,new Lt(i)))}(),t.push(Kt(n)),Kt(t)}function Kt(e){return{dispose:()=>zt(e)}}function zt(e){for(;e.length;)e.pop().dispose()}return(e=>d(i({},"__esModule",{value:!0}),e))(h)})()));