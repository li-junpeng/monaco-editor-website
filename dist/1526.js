"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[1526],{1526:(n,e,r)=>{r.r(e),r.d(e,{default:()=>a});const a="class Random < Liquid::Block\r\n  def initialize(tag_name, markup, tokens)\r\n     super\r\n     @rand = markup.to_i\r\n  end\r\n\r\n  def render(context)\r\n    value = rand(@rand)\r\n    super.sub('^^^', value.to_s)  # calling `super` returns the content of the block\r\n  end\r\nend\r\n\r\nLiquid::Template.register_tag('random', Random)\r\ntext = \" {% random 5 %} you have drawn number ^^^, lucky you! {% endrandom %} \"\r\n@template = Liquid::Template.parse(text)\r\n@template.render  # will return \"you have drawn number 1, lucky you!\" in 20% of cases\r\n"}}]);
//# sourceMappingURL=1526.js.map