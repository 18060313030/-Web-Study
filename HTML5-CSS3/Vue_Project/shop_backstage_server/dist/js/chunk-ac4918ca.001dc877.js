(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac4918ca"],{"00b4":function(e,t,r){"use strict";r("ac1f");var a=r("23e7"),s=r("da84"),n=r("c65b"),o=r("e330"),i=r("1626"),l=r("861d"),u=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),c=s.Error,m=o(/./.test);a({target:"RegExp",proto:!0,forced:!u},{test:function(e){var t=this.exec;if(!i(t))return m(this,e);var r=n(t,this,e);if(null!==r&&!l(r))throw new c("RegExp exec method returned something other than an Object or null");return!!r}})},4270:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("用户管理")]),r("el-breadcrumb-item",[e._v("用户列表")])],1),r("el-card",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:9}},[r("div",[r("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{input:e.initUserList},model:{value:e.queryParams.query,callback:function(t){e.$set(e.queryParams,"query",t)},expression:"queryParams.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.initUserList},slot:"append"})],1)],1)]),r("el-col",{attrs:{span:4,offset:11}},[r("div",[r("el-button",{attrs:{type:"primary",icon:"el-icon-user"},on:{click:function(t){e.addUserFormVisible=!0}}},[e._v("添加用户")])],1)])],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.userList,border:""}},[r("el-table-column",{attrs:{type:"index",label:"#"}}),r("el-table-column",{attrs:{prop:"username",label:"用户名"}}),r("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),r("el-table-column",{attrs:{prop:"mobile",label:"电话"}}),r("el-table-column",{attrs:{prop:"role_name",label:"角色"}}),r("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{on:{change:function(r){return e.changeStatus(t.row)}},model:{value:t.row.mg_state,callback:function(r){e.$set(t.row,"mg_state",r)},expression:"scope.row.mg_state"}})]}}])}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return e.showEditUserVisible(t.row.id)}}}),r("el-button",{attrs:{type:"danger ",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return e.deleteUser(t.row.id)}}}),r("el-tooltip",{attrs:{effect:"dark",content:"分配角色",placement:"top",enterable:!1}},[r("el-button",{attrs:{type:"warning",icon:"el-icon-setting",size:"mini"},on:{click:function(r){return e.allotRole(t.row)}}})],1)]}}])})],1),r("el-pagination",{attrs:{"current-page":e.queryParams.pagenum,"page-sizes":[1,2,5,10],"page-size":e.queryParams.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"添加用户",visible:e.addUserFormVisible},on:{"update:visible":function(t){e.addUserFormVisible=t},close:e.addUserClose}},[r("el-form",{ref:"addUserRef",attrs:{model:e.addUserForm,rules:e.addUserRules}},[r("el-form-item",{attrs:{label:"用户名",prop:"username","label-width":e.formLabelWidth}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.addUserForm.username,callback:function(t){e.$set(e.addUserForm,"username",t)},expression:"addUserForm.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password","label-width":e.formLabelWidth}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.addUserForm.password,callback:function(t){e.$set(e.addUserForm,"password",t)},expression:"addUserForm.password"}})],1),r("el-form-item",{attrs:{label:"邮箱地址",prop:"email","label-width":e.formLabelWidth}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.addUserForm.email,callback:function(t){e.$set(e.addUserForm,"email",t)},expression:"addUserForm.email"}})],1),r("el-form-item",{attrs:{label:"手机号",prop:"mobile","label-width":e.formLabelWidth}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.addUserForm.mobile,callback:function(t){e.$set(e.addUserForm,"mobile",t)},expression:"addUserForm.mobile"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addUserFormVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.submitAddUserForm}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"编辑用户",visible:e.editUserFormVisible},on:{"update:visible":function(t){e.editUserFormVisible=t},close:e.editUserClose}},[r("el-form",{ref:"editUserRef",staticClass:"demo-ruleForm",attrs:{model:e.editUserForm,rules:e.editUserRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"用户名","label-width":e.formLabelWidth}},[r("el-input",{attrs:{disabled:""},model:{value:e.editUserForm.username,callback:function(t){e.$set(e.editUserForm,"username",t)},expression:"editUserForm.username"}})],1),r("el-form-item",{attrs:{label:"邮箱地址",prop:"email","label-width":e.formLabelWidth}},[r("el-input",{model:{value:e.editUserForm.email,callback:function(t){e.$set(e.editUserForm,"email",t)},expression:"editUserForm.email"}})],1),r("el-form-item",{attrs:{label:"手机号",prop:"mobile","label-width":e.formLabelWidth}},[r("el-input",{model:{value:e.editUserForm.mobile,callback:function(t){e.$set(e.editUserForm,"mobile",t)},expression:"editUserForm.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editUserFormVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitEditUserForm(e.editUserForm.id,e.editUserForm.email,e.editUserForm.mobile)}}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"分配角色",visible:e.allotRoleVisible},on:{"update:visible":function(t){e.allotRoleVisible=t},close:e.setRoleClose}},[r("el-form",{attrs:{model:e.allotRoleForm,"label-width":e.formLabelWidth}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{attrs:{disabled:""},model:{value:e.allotRoleForm.username,callback:function(t){e.$set(e.allotRoleForm,"username",t)},expression:"allotRoleForm.username"}})],1),r("el-form-item",{attrs:{label:"用户角色"}},[r("el-input",{attrs:{disabled:""},model:{value:e.allotRoleForm.role_name,callback:function(t){e.$set(e.allotRoleForm,"role_name",t)},expression:"allotRoleForm.role_name"}})],1),r("el-form-item",{attrs:{label:"修改角色"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.selectRole,callback:function(t){e.selectRole=t},expression:"selectRole"}},e._l(e.roleList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.roleName,value:e.id}})})),1)],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.allotRoleVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.allotRoleSure}},[e._v("确 定")])],1)],1)],1)},s=[],n=r("1da1"),o=(r("96cf"),r("ac1f"),r("00b4"),r("d9e2"),r("99af"),{created:function(){this.initUserList()},data:function(){var e=function(e,t,r){var a=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;a.test(t)?r():r(new Error("请输入合法的邮箱"))},t=function(e,t,r){var a=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;a.test(t)?r():r(new Error("请输入合法的手机号"))};return{queryParams:{query:"",pagenum:1,pagesize:window.sessionStorage.getItem("pageSize")?parseInt(window.sessionStorage.getItem("pageSize")):2},userList:[],total:2,selectRole:"",roleList:[],addUserFormVisible:!1,editUserFormVisible:!1,allotRoleVisible:!1,formLabelWidth:"90px",addUserForm:{username:"",password:"",email:"",mobile:""},editUserForm:{id:"",username:"",role_id:"",email:"",mobile:""},allotRoleForm:{},addUserRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:4,max:15,message:"长度在 4 到 5 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:15,message:"长度在 6 到 15 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:t,trigger:"blur"}]},editUserRules:{email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:t,trigger:"blur"}]}}},methods:{initUserList:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("users",{params:e.queryParams});case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取用户信息失败！"));case 6:e.userList=a.data.users,e.total=a.data.total;case 8:case"end":return t.stop()}}),t)})))()},changeStatus:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.put("users/".concat(e.id,"/state/").concat(e.mg_state));case 2:if(a=r.sent,s=a.data,200===s.meta.status){r.next=7;break}return e.status=!e.status,r.abrupt("return",t.$message.error("更新用户状态失败!"));case 7:t.$message.success("更新用户状态成功!");case 8:case"end":return r.stop()}}),r)})))()},handleSizeChange:function(e){window.sessionStorage.setItem("pageSize",e),this.queryParams.pagesize=e,this.initUserList()},handleCurrentChange:function(e){this.queryParams.pagenum=e,this.initUserList()},addUserClose:function(){this.$refs.addUserRef.resetFields()},submitAddUserForm:function(){var e=this;this.$refs.addUserRef.validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,e.$http.post("users",e.addUserForm);case 4:if(a=t.sent,s=a.data,201===s.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("添加用户失败!"));case 8:e.$message.success("添加用户成功"),e.initUserList(),e.addUserFormVisible=!1;case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},editUserClose:function(){this.$refs.editUserRef.resetFields()},showEditUserVisible:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.editUserFormVisible=!0,r.next=3,t.$http.get("users/"+e);case 3:if(a=r.sent,s=a.data,200===s.meta.status){r.next=7;break}return r.abrupt("return",t.$message.error("获取用户信息失败!"));case 7:t.editUserForm=s.data;case 8:case"end":return r.stop()}}),r)})))()},submitEditUserForm:function(e,t,r){var a=this,s={id:e,email:t,mobile:r};this.$refs.editUserRef.validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,a.$http.put("users/"+e,s);case 4:if(n=t.sent,o=n.data,a.editUserFormVisible=!1,200===o.meta.status){t.next=9;break}return t.abrupt("return",a.$message.error("修改用户信息失败!"));case 9:a.$message.success("修改用户信息成功!"),a.initUserList();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},deleteUser:function(e){var t=this;this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(n["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("users/"+e);case 2:if(a=r.sent,s=a.data,200===s.meta.status){r.next=6;break}return r.abrupt("return",t.$message.error("删除用户失败!"));case 6:t.$message.success("删除用户成功!"),1===t.userList.length&&(t.queryParams.pagenum=1===t.queryParams.pagenum?1:t.queryParams.pagenum-1),t.initUserList();case 9:case"end":return r.stop()}}),r)})))).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},allotRole:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.allotRoleForm=e,r.next=3,t.$http.get("roles");case 3:if(a=r.sent,s=a.data,200===s.meta.status){r.next=7;break}return r.abrupt("return",t.$message.error("获取角色列表失败！"));case 7:t.roleList=s.data,t.allotRoleVisible=!0;case 9:case"end":return r.stop()}}),r)})))()},allotRoleSure:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.selectRole){t.next=2;break}return t.abrupt("return",e.$message.error("请选择角色权限"));case 2:return t.next=4,e.$http.put("users/".concat(e.allotRoleForm.id,"/role"),{rid:e.selectRole});case 4:if(r=t.sent,a=r.data,200===a.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("修改用户角色失败！"));case 8:e.$message.success("修改用户角色成功！"),e.initUserList(),e.allotRoleVisible=!1;case 11:case"end":return t.stop()}}),t)})))()},setRoleClose:function(){this.selectRole="",this.allotRoleForm={}}}}),i=o,l=(r("525d"),r("2877")),u=Object(l["a"])(i,a,s,!1,null,"5ee33fba",null);t["default"]=u.exports},"525d":function(e,t,r){"use strict";r("9853")},7156:function(e,t,r){var a=r("1626"),s=r("861d"),n=r("d2bb");e.exports=function(e,t,r){var o,i;return n&&a(o=t.constructor)&&o!==r&&s(i=o.prototype)&&i!==r.prototype&&n(e,i),e}},9853:function(e,t,r){},"99af":function(e,t,r){"use strict";var a=r("23e7"),s=r("da84"),n=r("d039"),o=r("e8b5"),i=r("861d"),l=r("7b0b"),u=r("07fa"),c=r("8418"),m=r("65f0"),d=r("1dde"),f=r("b622"),p=r("2d00"),b=f("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",v=s.TypeError,w=p>=51||!n((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),U=d("concat"),x=function(e){if(!i(e))return!1;var t=e[b];return void 0!==t?!!t:o(e)},R=!w||!U;a({target:"Array",proto:!0,forced:R},{concat:function(e){var t,r,a,s,n,o=l(this),i=m(o,0),d=0;for(t=-1,a=arguments.length;t<a;t++)if(n=-1===t?o:arguments[t],x(n)){if(s=u(n),d+s>g)throw v(h);for(r=0;r<s;r++,d++)r in n&&c(i,d,n[r])}else{if(d>=g)throw v(h);c(i,d++,n)}return i.length=d,i}})},ab36:function(e,t,r){var a=r("861d"),s=r("9112");e.exports=function(e,t){a(t)&&"cause"in t&&s(e,"cause",t.cause)}},b980:function(e,t,r){var a=r("d039"),s=r("5c6c");e.exports=!a((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",s(1,7)),7!==e.stack)}))},c770:function(e,t,r){var a=r("e330"),s=a("".replace),n=function(e){return String(Error(e).stack)}("zxcasd"),o=/\n\s*at [^:]*:[^\n]*/,i=o.test(n);e.exports=function(e,t){if(i&&"string"==typeof e)while(t--)e=s(e,o,"");return e}},d9e2:function(e,t,r){var a=r("23e7"),s=r("da84"),n=r("2ba4"),o=r("e5cb"),i="WebAssembly",l=s[i],u=7!==Error("e",{cause:7}).cause,c=function(e,t){var r={};r[e]=o(e,t,u),a({global:!0,forced:u},r)},m=function(e,t){if(l&&l[e]){var r={};r[e]=o(i+"."+e,t,u),a({target:i,stat:!0,forced:u},r)}};c("Error",(function(e){return function(t){return n(e,this,arguments)}})),c("EvalError",(function(e){return function(t){return n(e,this,arguments)}})),c("RangeError",(function(e){return function(t){return n(e,this,arguments)}})),c("ReferenceError",(function(e){return function(t){return n(e,this,arguments)}})),c("SyntaxError",(function(e){return function(t){return n(e,this,arguments)}})),c("TypeError",(function(e){return function(t){return n(e,this,arguments)}})),c("URIError",(function(e){return function(t){return n(e,this,arguments)}})),m("CompileError",(function(e){return function(t){return n(e,this,arguments)}})),m("LinkError",(function(e){return function(t){return n(e,this,arguments)}})),m("RuntimeError",(function(e){return function(t){return n(e,this,arguments)}}))},e391:function(e,t,r){var a=r("577e");e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:a(e)}},e5cb:function(e,t,r){"use strict";var a=r("d066"),s=r("1a2d"),n=r("9112"),o=r("3a9b"),i=r("d2bb"),l=r("e893"),u=r("7156"),c=r("e391"),m=r("ab36"),d=r("c770"),f=r("b980"),p=r("c430");e.exports=function(e,t,r,b){var g=b?2:1,h=e.split("."),v=h[h.length-1],w=a.apply(null,h);if(w){var U=w.prototype;if(!p&&s(U,"cause")&&delete U.cause,!r)return w;var x=a("Error"),R=t((function(e,t){var r=c(b?t:e,void 0),a=b?new w(e):new w;return void 0!==r&&n(a,"message",r),f&&n(a,"stack",d(a.stack,2)),this&&o(U,this)&&u(a,this,R),arguments.length>g&&m(a,arguments[g]),a}));if(R.prototype=U,"Error"!==v&&(i?i(R,x):l(R,x,{name:!0})),l(R,w),!p)try{U.name!==v&&n(U,"name",v),U.constructor=R}catch(F){}return R}}}}]);
//# sourceMappingURL=chunk-ac4918ca.001dc877.js.map