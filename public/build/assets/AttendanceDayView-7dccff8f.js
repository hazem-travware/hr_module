import{a as d,b as _,f as i,d as e,u as a,_ as s,Z as v,e as t,t as n,j as w,h as r,F as g,l as B,g as $,T as k,p as S}from"./app-398ad6d1.js";import{_ as A}from"./GoBackNavLink-db60fb6d.js";import{_ as T}from"./FlexButton-28caee34.js";import{_ as N}from"./AttendanceTabs-507b98d5.js";import{S as b}from"./sweetalert2.all-e0b4b42d.js";import{P as C}from"./PrimaryButton-9082dc5b.js";import{_ as D}from"./Card-915d2e9b.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as V,a as u}from"./TableHead-3dcd847b.js";import{_ as x}from"./TableBodyHeader-26b36b0f.js";import{_ as c,T as j}from"./TableRow-fe137cf6.js";import{a as z}from"./useAttendanceTypes-b539793a.js";import"./Paginator-85e18341.js";const E={name:"TrashIcon"},I={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5 mr-2"},M=i("path",{"fill-rule":"evenodd",d:"M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z","clip-rule":"evenodd"},null,-1),O=[M];function R(l,p,h,f,m,o){return d(),_("svg",I,O)}const y=L(E,[["render",R]]),Y={class:"py-8"},F={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},H={class:"card-header !mb-6"},P={class:"flex justify-between items-center pb-4 gap-4"},W={class:"flex justify-center items-center inline"},U=["onSubmit"],oe={__name:"AttendanceDayView",props:{attendanceList:Object,day:String},setup(l){const p=l,h=()=>{b.mixin({customClass:{confirmButton:"mx-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",cancelButton:"text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"},buttonsStyling:!1}).fire({title:s("Are you sure?"),text:s("You won't be able to revert this!"),icon:"warning",showCancelButton:!0,confirmButtonText:s("Yes, Delete!"),cancelButtonText:s("No, Cancel!"),reverseButtons:!0}).then(m=>{m.isConfirmed&&k({}).delete(route("attendance.destroy",{date:p.day}),{preserveScroll:!0,onError:()=>{S().error(s("Error Deleting Attendance"))},onSuccess:()=>{b.fire(s("Attendance Removed!"),"","success")}})})};return(f,m)=>(d(),_(g,null,[e(a(v),{title:a(s)("Attendance View")},null,8,["title"]),e(A,null,{tabs:t(()=>[e(N)]),default:t(()=>[i("div",Y,[i("div",F,[e(D,{class:"!mt-0"},{default:t(()=>[i("h1",H,n(a(s)("Attendance List for :day",{day:l.day})),1),i("div",P,[i("div",W,[e(T,{href:f.route("attendances.create"),text:a(s)("Retake/Update Attendance")},{default:t(()=>[e(y)]),_:1},8,["href","text"])]),i("form",{onSubmit:w(h,["prevent"]),class:"flex justify-center items-center"},[e(C,{class:"bg-red-600 hover:bg-red-700 focus:bg-red-500 active:bg-red-900"},{default:t(()=>[e(y),r(" "+n(a(s)("Delete Day Attendance")),1)]),_:1})],40,U)]),e(V,{links:l.attendanceList.links,showingNumber:l.attendanceList.data.length,totalNumber:l.attendanceList.total},{Head:t(()=>[e(u,null,{default:t(()=>[r(n(a(s)("ID")),1)]),_:1}),e(u,null,{default:t(()=>[r(n(a(s)("Employee")),1)]),_:1}),e(u,null,{default:t(()=>[r(n(a(s)("Status")),1)]),_:1}),e(u,null,{default:t(()=>[r(n(a(s)("Sign In Time")),1)]),_:1}),e(u,null,{default:t(()=>[r(n(a(s)("Sign Off Time")),1)]),_:1}),e(u,null,{default:t(()=>[r(n(a(s)("Notes")),1)]),_:1})]),Body:t(()=>[(d(!0),_(g,null,B(l.attendanceList.data,o=>(d(),$(j,{key:o.id},{default:t(()=>[e(x,null,{default:t(()=>[r(n(o.id),1)]),_:2},1024),e(x,null,{default:t(()=>[r(n(o.employee_name),1)]),_:2},1024),e(c,null,{default:t(()=>[r(n(a(z)[o.status]),1)]),_:2},1024),e(c,null,{default:t(()=>[r(n(o.sign_in_time),1)]),_:2},1024),e(c,null,{default:t(()=>[r(n(o.sign_off_time??a(s)("Haven't Sign Off Yet")),1)]),_:2},1024),e(c,null,{default:t(()=>[r(n(o.notes),1)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["links","showingNumber","totalNumber"])]),_:1})])])]),_:1})],64))}};export{oe as default};
