"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[2942],{2942:(n,r,e)=>{e.r(r),e.d(r,{default:()=>l});const l='// http://www.ats-lang.org/\r\n(* Say Hello! once *)\r\nval () = print"Hello!\\n"\r\n//\r\n(* Say Hello! 3 times *)\r\nval () = 3*delay(print"Hello!")\r\nval () = print_newline((*void*))\r\n//\r\n\r\n//\r\n(* Build a list of 3 *)\r\nval xs = $list{int}(0, 1, 2)\r\n//\r\nval x0 = xs[0] // legal\r\nval x1 = xs[1] // legal\r\nval x2 = xs[2] // legal\r\nval x3 = xs[3] // illegal\r\n//\r\n\r\n//\r\nextern\r\nfun{} f0 (): int\r\nextern\r\nfun{} f1 (int): int\r\nextern\r\nfun{} repeat_f0f1 (int): int\r\n//\r\nimplement\r\n{}(*tmp*)\r\nrepeat_f0f1(n) =\r\n  if n = 0\r\n    then f0()\r\n    else f1(repeat_f0f1(n-1))\r\n  // end of [if]\r\n//\r\nfun\r\ntimes (\r\n  m:int, n:int\r\n) : int = // m*n\r\n  repeat_f0f1 (m) where\r\n{\r\n  implement f0<> () = 0\r\n  implement f1<> (x) = x + n\r\n}\r\n//\r\nfun\r\npower (\r\n  m:int, n:int\r\n) : int = // m^n\r\n  repeat_f0f1 (n) where\r\n{\r\n  implement f0<> () = 1\r\n  implement f1<> (x) = m * x\r\n}\r\n//\r\nval () =\r\nprintln! ("5*5 = ", times(5,5))\r\nval () =\r\nprintln! ("5^2 = ", power(5,2))\r\nval () =\r\nprintln! ("2^10 = ", power(2,10))\r\nval () =\r\nprintln! ("3^10 = ", power(3,10))\r\n//\r\n'}}]);
//# sourceMappingURL=2942.js.map