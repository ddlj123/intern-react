
/*
<div id='parent'>
     <div id='child'>

     <h1>I am H1 Tag</h1>

     </div>
     </div>





*/ 
const parent=React.createElement('div',{id:'parent'},React.createElement('div',{id:'child'},[React.createElement('h1',{},'I am H1 tag'),React.createElement('h2',{},'I am H2 tag')]))

console.log(parent)




// const heading=React.createElement('h1',{id:'heading',xyz:'abc'},'Hello World From React')

// console.log(heading)
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)



/**
 * <div id='parent>
 *   <div id='child1'>
 *        <h1>I Am Vraj</h1>
 *        <h2>I AM PAtel</h2>
 * </div>
 * 
 * <div id='child2'>
 * <h1> I Am Vraj1</h1>
 * <h2>i Am Patel</h2>
 * 
 * </div>
 * 
 * 
 * </div>
 * 
 * 
 * 
 * 
 * 
 * 
 */

