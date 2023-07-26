"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[2055],{2055:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n='$SelectedObjectNames=@();\r\n$XenCenterNodeSelected = 0;\r\n#the object info array contains hashmaps, each of which represent a parameter set and describe a target in the XenCenter resource list\r\nforeach($parameterSet in $ObjInfoArray)\r\n{\r\n\tif ($parameterSet["class"] -eq "blank")\r\n\t{\r\n\t\t#When the XenCenter node is selected a parameter set is created for each of your connected servers with the class and objUuid keys marked as blank\r\n\t\tif ($XenCenterNodeSelected)\r\n\t\t{\r\n\t\t\tcontinue\r\n\t\t}\r\n\t\t$XenCenterNodeSelected = 1;\r\n\t\t$SelectedObjectNames += "XenCenter"\r\n\t}\r\n\telseif ($parameterSet["sessionRef"] -eq "null")\r\n\t{\r\n\t\t#When a disconnected server is selected there is no session information, we get null for everything except class\r\n\t}\r\n\t\t$SelectedObjectNames += "a disconnected server"\r\n\telse\r\n\t{\r\n\t\tConnect-XenServer -url $parameterSet["url"] -opaqueref $parameterSet["sessionRef"]\r\n\t\t#Use $class to determine which server objects to get\r\n\t\t#-properties allows us to filter the results to just include the selected object\r\n\t\t$exp = "Get-XenServer:{0} -properties @{{uuid=\'{1}\'}}" -f $parameterSet["class"], $parameterSet["objUuid"]\r\n\t\t$obj = Invoke-Expression $exp\r\n\t\t$SelectedObjectNames += $obj.name_label;\r\n\t} \r\n}'}}]);
//# sourceMappingURL=2055.js.map