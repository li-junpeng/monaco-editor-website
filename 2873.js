"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[2873],{2873:(n,r,t)=>{t.r(r),t.d(r,{default:()=>o});const o="F0 := IMDB.File_actors;\r\nCountActors := RECORD\r\nF0.ActorName;\r\nUNSIGNED C := COUNT(GROUP);\r\nEND;\r\nMoviesIn := TABLE(F0,CountActors,ActorName);\r\nOUTPUT(TOPN(MoviesIn,100,-C));\r\n"}}]);
//# sourceMappingURL=2873.js.map