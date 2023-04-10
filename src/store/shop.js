const initialState  = [
    {
        id: undefined,
        name:'',
        lastName:''
    },
    {
        phone: null,
        age:null,
    },
    {
        city: '',
        country: ''
    }
]

const user = (state= initialState, action)=>{
    switch (action.type) {
        case 'fullName':
            state[0] = action.payload
            return state
        case "phoneNumber":
            state[1] = action.payload
            return state
         case "city":
             state[2] = action.payload
            return state
        default:
        return state
    }
}

export default user