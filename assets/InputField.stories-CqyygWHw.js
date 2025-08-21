import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-zNdaA9Sn.js";import"./preload-helper-D9Z9MdNV.js";const r=({value:a,onChange:h,label:p,placeholder:f,helperText:u,errorMessage:m,disabled:c=!1,invalid:g=!1,loading:s=!1,variant:v="outlined",size:x="md"})=>e.jsxs("div",{className:"input",children:[p&&e.jsx("label",{className:"input-label",children:p}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx("input",{value:a,onChange:h,placeholder:s?"Loading...":f,disabled:c||s,className:["input-box",`input-${x}`,`input-${v}`,g?"input-invalid":"",c||s?"input-disabled":""].join(" ")}),s&&e.jsx("span",{className:"spinner"})]}),g&&m?e.jsx("span",{className:"error-text",children:m}):u?e.jsx("span",{className:"helper-text",children:u}):null]});r.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'ghost'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const j={title:"Components/InputField",component:r,argTypes:{onChange:{action:"changed"}}},n={args:{label:"Username",placeholder:"uzence_design_studio",helperText:"This is the helper text",variant:"outlined",size:"md"}},l={args:{label:"Email",placeholder:"xyz@gmail.com",invalid:!0,errorMessage:"Invalid email address"}},t={args:{label:"Password",placeholder:"Enter password",disabled:!0}},i={args:{label:"Username",placeholder:"Enter username"},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...a,size:"sm"}),e.jsx(r,{...a,size:"md"}),e.jsx(r,{...a,size:"lg"})]})},d={args:{label:"Search",placeholder:"Type here..."},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...a,variant:"outlined"}),e.jsx(r,{...a,variant:"filled"}),e.jsx(r,{...a,variant:"ghost"})]})},o={args:{label:"Username",placeholder:"Enter username",loading:!0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "uzence_design_studio",
    helperText: "This is the helper text",
    variant: "outlined",
    size: "md"
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "xyz@gmail.com",
    invalid: true,
    errorMessage: "Invalid email address"
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    placeholder: "Enter password",
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter username"
  },
  render: args => <>\r
      <InputField {...args} size="sm" />\r
      <InputField {...args} size="md" />\r
      <InputField {...args} size="lg" />\r
    </>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Search",
    placeholder: "Type here..."
  },
  render: args => <>\r
      <InputField {...args} variant="outlined" />\r
      <InputField {...args} variant="filled" />\r
      <InputField {...args} variant="ghost" />\r
    </>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter username",
    loading: true
  }
}`,...o.parameters?.docs?.source}}};const E=["Default","Error","Disabled","Sizes","Variants","Loading"];export{n as Default,t as Disabled,l as Error,o as Loading,i as Sizes,d as Variants,E as __namedExportsOrder,j as default};
