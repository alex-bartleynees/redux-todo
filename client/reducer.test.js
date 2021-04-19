import todos from './reducer'

describe('reducer tests', () => {
    test('add todo', () => {
    const stateBefore = []
    const action = {
        type:'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        }
    ];

   Object.freeze(stateBefore)
   Object.freeze(stateAfter)

    expect(todos(stateBefore, action)).toEqual(stateAfter)
})

    test('test toggle todo', () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Go shopping',
            completed: false
        }
    ]

    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    }

    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Go shopping',
            completed: true
        }
    ]

    Object.freeze(stateBefore)
    Object.freeze(action)

    expect(todos(stateBefore, action)).toEqual(stateAfter)


    })
})