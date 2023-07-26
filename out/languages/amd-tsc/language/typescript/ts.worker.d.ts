import { initialize } from 'monaco-editor-core/esm/vs/editor/editor.worker';
import * as ts from './lib/typescriptServices';
import { TypeScriptWorker, create } from './tsWorker';
import { libFileMap } from './lib/lib';
export { TypeScriptWorker, create, initialize, libFileMap, ts };
