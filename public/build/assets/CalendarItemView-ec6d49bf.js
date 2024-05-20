import{c as f,a as p,b as _,d as t,u as o,_ as e,Z as h,e as s,f as r,t as n,j as x,h as b,F as g,T as I,p as v}from"./app-398ad6d1.js";import{_ as y}from"./GoBackNavLink-db60fb6d.js";import{_ as B}from"./GenericDescriptionList-41e75cb1.js";import{P as w}from"./PrimaryButton-9082dc5b.js";import{_ as D}from"./CalendarTabs-3ba65f78.js";import{S as d}from"./sweetalert2.all-e0b4b42d.js";import{_ as k}from"./FlexButton-28caee34.js";import{_ as C}from"./Card-915d2e9b.js";import{M as S}from"./ModifyIcon-3a0b4e86.js";import"./_plugin-vue_export-helper-c27b6911.js";const T={class:"py-8"},N={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},$={class:"flex justify-between items-center mb-4"},j={class:"card-header"},M={class:"flex inline-flex gap-4"},V={class:"mb-2 ml-1 font-semibold"},E=["onSubmit"],H={__name:"CalendarItemView",props:{calendarItem:Object},setup(l){const a=l,m=f(()=>({[e("ID")]:[a.calendarItem.id],[e("Type")]:[a.calendarItem.type],[e("Title")]:[a.calendarItem.title],"":" ",[e("From Date")]:[a.calendarItem.start_date],[e("To Date")]:[a.calendarItem.end_date??e("N/A")]})),u=()=>{d.mixin({customClass:{confirmButton:"mx-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",cancelButton:"text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"},buttonsStyling:!1}).fire({title:e("Are you sure?"),text:e("You won't be able to revert this!"),icon:"warning",showCancelButton:!0,confirmButtonText:e("Yes, Delete!"),cancelButtonText:e("No, Cancel!"),reverseButtons:!0}).then(c=>{c.isConfirmed&&I({}).delete(route("calendars.destroy",{id:a.calendarItem.id}),{preserveScroll:!0,onError:()=>{v().error(e("Error Deleting Item"))},onSuccess:()=>{d.fire(e("Item Deleted!"),"","success")}})})};return(i,c)=>(p(),_(g,null,[t(o(h),{title:o(e)("Calendar Item Data")},null,8,["title"]),t(y,null,{tabs:s(()=>[t(D)]),default:s(()=>[r("div",T,[r("div",N,[t(C,{class:"!mt-0"},{default:s(()=>[r("div",null,[r("div",$,[r("h1",j,n(o(e)("Calendar Item Details")),1),r("div",M,[t(k,{text:o(e)("Modify Item Data"),href:i.route("calendars.edit",{id:l.calendarItem.id})},{default:s(()=>[t(S)]),_:1},8,["text","href"])])]),r("h2",V,n(o(e)("Item Info")),1),t(B,{data:m.value,colNum:2},null,8,["data"]),r("form",{onSubmit:x(u,["prevent"]),class:"flex justify-end inline"},[t(w,{class:"bg-red-600 hover:bg-red-700 ml-4 mt-4 focus:bg-red-500 active:bg-red-900"},{default:s(()=>[b(n(o(e)("Delete Item")),1)]),_:1})],40,E)])]),_:1})])])]),_:1})],64))}};export{H as default};
