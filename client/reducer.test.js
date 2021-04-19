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
})