
const initialState = [
    {
        title: "IN PROGRESS",
        id: 0,
        cards: [
            {
                id: 0,
                text: "created static 1"
            },
            {
                id: 1,
                text: "created static 2"
            },
            {
                id: 2,
                text: "created static 3"
            },
        ]
    },
    {
        title: "TO DO",
        id: 1,
        cards: [
            {
                id: 0,
                text: "created static 1"
            },
            {
                id: 1,
                text: "created static 2"
            },
            {
                id: 2,
                text: "created static 3"
            },
            {
                id: 3,
                text: "created static 4"
            },
            {
                id: 4,
                text: "created static 5"
            }
        ]
    },  
    {
        title: "DONE",
        id: 2,
        cards: [
            {
                id: 0,
                text: "created static 1"
            },
            {
                id: 1,
                text: "created static 2"
            },
            {
                id: 2,
                text: "created static 3"
            },
        ]
    },  
]

const listsReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state;
    }
}

export default listsReducer;