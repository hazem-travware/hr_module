import{_ as p}from"./GoBackNavLink-db60fb6d.js";import{o as S,c,a as u,b as f,d as o,u as b,Z as g,e as n,f as e,t,h as i,i as v,q as y,s as Y,F as k}from"./app-398ad6d1.js";import{i as E}from"./index-7c45f06a.js";import{_ as D}from"./AttendanceTabs-507b98d5.js";import{_ as T}from"./ToolTip-384c4e78.js";import{_ as h}from"./Card-915d2e9b.js";import"./_plugin-vue_export-helper-c27b6911.js";const A={class:"py-8"},w={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},H={class:"text-2xl"},F={class:"text-2xl mb-6"},M={class:"mt-4"},O={class:"font-bold mb-1"},W={class:"mb-2"},C=e("hr",{class:"my-3 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"},null,-1),N={class:"mt-4"},V={class:"font-bold mb-1 mt-4"},$={class:"mb-2"},q=e("hr",{class:"my-3 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"},null,-1),B={class:"mt-4"},P={class:"inline font-bold mt-8"},j={class:"mb-2 mt-1"},U={class:"mb-2 mt-1"},z={class:"mb-2 mt-1"},I={key:0},L={class:"text-2xl mb-6"},R={class:"mt-4"},Z={class:"font-bold mb-1"},G={class:"mb-2"},J={class:"w-full bg-gray-200 rounded-full dark:bg-gray-700"},K={class:"mt-4"},Q={class:"font-bold mb-1 mt-4"},X={class:"mb-2"},x={class:"w-full bg-gray-200 rounded-full dark:bg-gray-700"},ee=e("hr",{class:"my-6 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"},null,-1),te={class:"mt-4"},se={class:"font-bold mb-1 mt-4"},ae={class:"block mt-4"},oe={class:"inline"},ne={class:"mb-2 inline"},le={class:"block mt-2"},ie={class:"inline"},de={class:"mb-2 inline"},re={class:"block mt-2"},ce={class:"inline"},he={class:"mb-2 inline"},_e={class:"block mt-2"},me={class:"inline"},ue={class:"mb-2 inline"},fe=e("hr",{class:"my-6 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"},null,-1),be={class:"mt-5"},ye={class:"font-bold mb-2"},Te={__name:"AttendanceDashboard",props:{EmployeeStats:Object},setup(a){const l=a;S(()=>{E()});const _=c(()=>l.EmployeeStats.YearStats.workingDaysThisYear-l.EmployeeStats.YearStats.WeekendOffDaysThisYear-l.EmployeeStats.YearStats.HolidaysThisYear),d=c(()=>(l.EmployeeStats.totalAttendanceSoFar/_.value*100).toFixed(0)),r=c(()=>(l.EmployeeStats.totalAbsenceSoFar/l.EmployeeStats.YearStats.absence_limit*100).toFixed(0));return(s,pe)=>(u(),f(k,null,[o(b(g),{title:s.__("Attendance Dashboard")},null,8,["title"]),o(p,null,{tabs:n(()=>[o(D)]),default:n(()=>[e("div",A,[e("div",w,[o(h,{class:"!mt-0"},{default:n(()=>[e("h1",H,t(s.__("Attendance Dashboard")),1)]),_:1}),o(h,null,{default:n(()=>[e("h1",F,t(s.__("Your Attendance This Month (:attendance)",{attendance:new Date().toLocaleString("default",{month:"long"})})),1),e("div",M,[e("h2",O,t(s.__("Attendance")),1),e("p",W,t(s.__("Attended"))+" "+t(a.EmployeeStats.attendedThisMonth)+" "+t(s.__("of"))+" "+t(a.EmployeeStats.attendableThisMonth)+" "+t(s.__("Days"))+".",1)]),C,e("div",N,[e("h2",V,t(s.__("Absence")),1),e("p",$,t(s.__("Absented"))+" "+t(a.EmployeeStats.absentedThisMonth)+" "+t(s.__("Days"))+".",1)]),q,e("div",B,[e("h2",P,t(s.__("Hour Compensation")),1),o(T,null,{default:n(()=>[e("div",null,t(s.__("Compensation Hours are the hours you have worked more/less than the required hours"))+".",1),e("div",null,t(s.__("Extra Hours are rewarded, while negative hours will result in deduction..")),1),e("div",null,t(s.__("The final numbers are cleared and accounted in the payroll by the end of the month.")),1)]),_:1}),e("p",j,t(s.__("Worked :worked of :of Hours",{worked:a.EmployeeStats.actualHoursThisMonth.toFixed(2),of:a.EmployeeStats.expectedHoursThisMonth})),1),e("p",U,t(s.__("Progress So Far: :hoursDifference Hours",{hoursDifference:a.EmployeeStats.hoursDifferenceSoFar.toFixed(2)})),1),e("p",z,[i(t(s.__("Remaining Until Month's End"))+": ",1),a.EmployeeStats.hoursDifference>0?(u(),f("span",I,"+")):v("",!0),i(" "+t(a.EmployeeStats.hoursDifference.toFixed(2))+" "+t(s.__("Hours"))+".",1)])])]),_:1}),o(h,null,{default:n(()=>[e("h1",L,t(s.__("Your Attendance This Year")),1),e("div",R,[e("h2",Z,t(s.__("Attendance")),1),e("p",G,t(s.__("Attended :attended from :from",{attended:a.EmployeeStats.totalAttendanceSoFar,from:_.value})),1),e("div",J,[e("div",{class:"bg-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full",style:y("width:"+(d.value>100?100:d.value)+"%")},t(d.value+"%"),5)])]),e("div",K,[e("h2",Q,t(s.__("Absence")),1),e("p",X,t(s.__("Absented :absented of :of",{absented:a.EmployeeStats.totalAbsenceSoFar,of:a.EmployeeStats.YearStats.absence_limit})),1),e("div",x,[e("div",{class:"bg-red-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full",style:y("width:"+(r.value>100?100:r.value)+"%")},t(r.value+"%"),5)])]),ee,e("div",te,[e("h2",se,t(s.__("Your Year's Data")),1),e("div",ae,[e("span",oe,t(s.__("Weekend Off Days"))+": ",1),e("p",ne,t(a.EmployeeStats.YearStats.weekendOffDays.map(m=>m.charAt(0).toUpperCase()+m.slice(1)).join(", "))+".",1)]),e("div",le,[e("span",ie,t(s.__("Your Total Weekend Days Off This Year"))+": ",1),e("p",de,t(a.EmployeeStats.YearStats.WeekendOffDaysThisYear)+" "+t(s.__("Days"))+".",1)]),e("div",re,[e("span",ce,t(s.__("Your Total National Holidays Days"))+": ",1),e("p",he,t(a.EmployeeStats.YearStats.HolidaysThisYear)+" "+t(s.__("Days"))+".",1)]),e("div",_e,[e("span",me,t(s.__("Your Total Off Days This Year (Weekends + Holidays)"))+": ",1),e("p",ue,t(a.EmployeeStats.YearStats.WeekendOffDaysThisYear+a.EmployeeStats.YearStats.HolidaysThisYear)+" "+t(s.__("Days"))+".",1)])]),fe,e("div",be,[e("p",ye,t(s.__("Something's Wrong?")),1),e("p",null,[i(t(s.__("If there is anything wrong in the presented data above please"))+" ",1),o(b(Y),{href:s.route("requests.create"),class:"underline text-purple-700"},{default:n(()=>[i(t(s.__("Submit a Complaint Here")),1)]),_:1},8,["href"]),i(". ")])])]),_:1})])])]),_:1})],64))}};export{Te as default};
