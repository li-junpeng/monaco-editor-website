"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[3863],{3863:(n,r,e)=>{e.r(r),e.d(r,{default:()=>t});const t='"""\r\nA CoffeeScript sample.\r\n"""\r\n\r\nclass Vehicle\r\n  constructor: (@name) =>\r\n  \r\n  drive: () =>\r\n    alert "Conducting #{@name}"\r\n\r\nclass Car extends Vehicle\r\n  drive: () =>\r\n    alert "Driving #{@name}"\r\n\r\nc = new Car "Brandie"\r\n\r\nwhile notAtDestination()\r\n  c.drive()\r\n\r\nraceVehicles = (new Car for i in [1..100])\r\n\r\nstartRace = (vehicles) -> [vehicle.drive() for vehicle in vehicles]\r\n\r\nfancyRegExp = ///\r\n\t(\\d+)\t# numbers\r\n\t(\\w*)\t# letters\r\n\t$\t\t# the end\r\n///\r\n'}}]);
//# sourceMappingURL=3863.js.map