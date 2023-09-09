import React from 'react'


// const defaultclassName = {
//     className:'bg-green-300',
//     buttonText: 'add'
// }

function Button({btnText,onclick}) {

    const handleOnclick=()=>{
        console.log("clicked")
    }




  return (
    <>
      {/* <button ClassName={className?className:defaultclassName.className } style={}>
       {btnText?btnText:buttonText}
      </button> */}
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:`${btnText}`}} onClick={onclick}>
        {btnText}
      </button>
    </>
  )
}

export default Button
