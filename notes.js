
import React from 'react';
import ReactDOM  from 'react-dom/client';
 
const heading= React.createElement(
    "h1",
    {
        id:"title",
    }
    ,
    "heading 1 from parcel"
);

// this is similer to <h1> heading 1</h1>
const heading_2= React.createElement("h2",
{
    id:"titile",
},
"Heading_2");




let container= React.createElement("div",

    {
        id:"container"// this is props  we can send it like atributs and we can say this is id and anthung  
    },
    [heading,heading_2]
)


// why jsx cane in picture it seems very messy when every time we write react create element so facbook enginers use jsx which is fancy way to write html type of syntax which is jsx
const heading_4= <h1>namste</h1>;// this is jsx ite reudc so  much mess for react.create_element

// we can give classname in react jsx
// babale is used for jsx compiler for brouswer can not read
// bable is not come with react it come with parcel amd it is not in packaaj.lock json
const root= ReactDOM.createRoot(document.getElementById("root"))

// jsx=> React.createElememt so jsx used this feature behind from them 
// bable convert into jsx 
//passing a react element inside the root 
// async order

root.render(container); 

// we cam,t say this is prodction level apps so what we need to do we have to bundel everyhhing 

// and minifty files reduce reusbale function remove unusede code 






<!-- 🚨 "A production level apps add value in your code trying to build a smalll app but is should be in a good way " 🚨

a parcel is a module and a pice of javascript code for that package then we need a package manager

so that's why use npm and we can use yarn instead of npm
(There is one fun fact is the full form of npm is not node package manager you can find a lot of joke)

npm install -D (This is cmd) parcel used to install the package but -D is useful to install the package on the developer machine but not on the deployed version

dependency means some dependent package that is required for the project for the development

caret is used to put a miner update whenever required deployed project will help to automatically update in your server(deployed project)

the package-lock json lock your current version which version you used currently and don,t put  in gitignore

packagelock-----> server(this is not posiible)
<!-- packagelock------>git----->server(this is fine)

<!-- integrity maintain the local version and production should be similer

node moldules should not be put in  github is is show havey beacuse package-lock json have enough things 
to regrneate the same things

don,t use cdn for react may be version has been chnaged then we can,t reupddate on server
ans node modules on server so ftech from cdn is taking time so we don,t need to use cdn

npm install  react we are not using npm install d react beacuse we want to install react on whole project 
not on only devloper machine

exexute using npm (npx) 
  -->

  have you ever think what how our react app reflects chnages on liver srever 
  so when we try to chnage somthing on our projcts then paracl is there which is used as bundlers
  
  and it used hot module reloading
  AND FILE WATECHER ALOGORITHM  AND IT IS WRIITEN IN C++ 

  

  it is also bundling
  minify  (put all js file at one place )
  cleaning our code
  bulil is also fast when you change somthing 
  so parcel is beast 
  super fast build algoeith,
  image optmization 
  cahing while development
  compression
  change the veriable name 
  compatible witn older verison of brouseer
  port number
  trastive dependecny
  tree sheking --> removing unwanted code
  

  we should parcale.cache in git--ignore beacuse we don,t want 
  auto genmrade may be he cam take some data 


  which takes more time to load om our macine 



   brouser list is used for give a order to all brouser


