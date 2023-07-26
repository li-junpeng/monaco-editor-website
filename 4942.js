"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[4942],{4942:(n,r,e)=>{e.r(r),e.d(r,{default:()=>i});const i='(ns game-of-life\r\n  "Conway\'s Game of Life, based on the work of\r\n  Christophe Grand (http://clj-me.cgrand.net/2011/08/19/conways-game-of-life)\r\n  and Laurent Petit (https://gist.github.com/1200343).")\r\n\r\n;;; Core game of life\'s algorithm functions\r\n\r\n(defn neighbors\r\n  "Given a cell\'s coordinates `[x y]`, returns the coordinates of its\r\n  neighbors."\r\n  [[x y]]\r\n  (for [dx [-1 0 1]\r\n        dy (if (zero? dx)\r\n             [-1 1]\r\n             [-1 0 1])]\r\n    [(+ dx x) (+ dy y)]))\r\n\r\n(defn step\r\n  "Given a set of living `cells`, computes the new set of living cells."\r\n  [cells]\r\n  (set (for [[cell n] (frequencies (mapcat neighbors cells))\r\n             :when (or (= n 3)\r\n                       (and (= n 2)\r\n                            (cells cell)))]\r\n         cell)))\r\n\r\n;;; Utility methods for displaying game on a text terminal\r\n\r\n(defn print-grid\r\n  "Prints a `grid` of `w` columns and `h` rows, on *out*, representing a\r\n  step in the game."\r\n  [grid w h]\r\n  (doseq [x (range (inc w))\r\n          y (range (inc h))]\r\n    (when (= y 0) (println))\r\n    (print (if (grid [x y])\r\n             "[X]"\r\n             " . "))))\r\n\r\n(defn print-grids\r\n  "Prints a sequence of `grids` of `w` columns and `h` rows on *out*,\r\n  representing several steps."\r\n  [grids w h]\r\n  (doseq [grid grids]\r\n    (print-grid grid w h)\r\n    (println)))\r\n\r\n;;; Launches an example grid\r\n\r\n(def grid\r\n  "`grid` represents the initial set of living cells"\r\n  #{[2 1] [2 2] [2 3]})\r\n\r\n(print-grids (take 3 (iterate step grid)) 5 5)'}}]);
//# sourceMappingURL=4942.js.map