"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[6],{6:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t='`include "first_counter.v"\r\nmodule first_counter_tb();\r\n// Declare inputs as regs and outputs as wires\r\nreg clock, reset, enable;\r\nwire [3:0] counter_out;\r\n\r\n// Initialize all variables\r\ninitial begin\r\n  $display ("time\\t clk reset enable counter");\r\n  $monitor ("%g\\t %b   %b     %b      %b",\r\n\t  $time, clock, reset, enable, counter_out);\r\n  clock = 1;       // initial value of clock\r\n  reset = 0;       // initial value of reset\r\n  enable = 0;      // initial value of enable\r\n   #5  reset = 1;    // Assert the reset\r\n   #10  reset = 0;   // De-assert the reset\r\n   #10  enable = 1;  // Assert enable\r\n   #100  enable = 0; // De-assert enable\r\n   #5  $finish;      // Terminate simulation\r\nend\r\n\r\n// Clock generator\r\nalways begin\r\n   #5  clock = ~clock; // Toggle clock every 5 ticks\r\nend\r\n\r\n// Connect DUT to test bench\r\nfirst_counter U_counter (\r\nclock,\r\nreset,\r\nenable,\r\ncounter_out\r\n);\r\n\r\nendmodule\r\n'}}]);
//# sourceMappingURL=6.js.map