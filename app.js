
import React from 'react';
import ReactDOM  from 'react-dom/client';
 



const heading_4 = <h1>namste</h1>;// this is jsx ite reudc so  much mess for react.create_element



// React component
// functional-NEW [used most of the times]
// class based component-OLD



const Title = ()=>(

<h1>amit</h1>
);

// there is many way to call function component under function componennt <Title/> {Title()} 
const HeaderComponent=()=>{
    return (<div className='header'>
        
         <Title/>
         <div className='Nav-items'>
            <ul>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
                <li>cart</li>
            </ul>
         </div>
    
    </div>)
};



const AppLayout=()=>{

    return (
        {
            /**
            Header
             -logo
             -nav
             -cart
            body
            returents 
            -image
            -Name
            -Rating
            footer
              -limks
              -copyright
            */
        }
    )
}


// when we go multiple html then we need use () bracket for wrap html
// funnctional component words statrt with captail

const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeaderComponent/>); 
