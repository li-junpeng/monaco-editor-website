"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[2981],{2981:(r,n,t)=>{t.r(n),t.d(n,{default:()=>e});const e="@base: #f938ab;\r\n\r\n.box-shadow(@style, @c) when (iscolor(@c)) {\r\n\tborder-radius: @style @c;\r\n}\r\n\r\n.box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {\r\n\t.box-shadow(@style, rgba(0, 0, 0, @alpha));\r\n}\r\n\r\n.box { \r\n\tcolor: saturate(@base, 5%);\r\n\tborder-color: lighten(@base, 30%);\r\n\t\r\n\tdiv {\r\n\t\t.box-shadow((0 0 5px), 30%);\r\n\t}\r\n}\r\n\r\n#header {\r\n\th1 {\r\n\t\tfont-size: 26px;\r\n\t\tfont-weight: bold;\r\n\t}\r\n\t\r\n\tp { font-size: 12px;\r\n\t\ta { text-decoration: none;\r\n\t\t\t&:hover { border-width: 1px }\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@the-border: 1px;\r\n@base-color: #111;\r\n@red:        #842210;\r\n\r\n#header {\r\n\tcolor: (@base-color * 3);\r\n\tborder-left: @the-border;\r\n\tborder-right: (@the-border * 2);\r\n}\r\n\r\n#footer {\r\n\tcolor: (@base-color + #003300);\r\n\tborder-color: desaturate(@red, 10%);\r\n}\r\n"}}]);
//# sourceMappingURL=2981.js.map