
let initState = {
    inputValue:'',
    notesArray:[],
    editValue:''
}

export const mainReducer = (state = initState, action) => {
    
    switch(action.type) {
        case "ADD":
            let {input,data} = action
            let newArray= [...data,input];  
          return {
            ...state,
            notesArray:newArray
          }
        case "EDIT":
            let {editValue,notesArray,i} = action
            let editArray = Object.assign([], notesArray, {[i]: editValue});
          return {
            ...state,
            notesArray:editArray
          }
        case "DELETE":
            let {iDeleted,deleteArray} = action
            let deletedArray = deleteArray.filter((item,index)=>{
                  return iDeleted !== index
            })
                  
          return {
            ...state,
            notesArray:deletedArray
          }
        default:
        return state;
    }
}
