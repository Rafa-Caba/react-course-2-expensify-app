import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

// Should add an expense
test('Should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'Netflix',
            note: '',
            amount: 5500,
            createdAt: 3500
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, action.expense])
    // expect(state[3]).toEqual({
    //     id: '4',
    //     description: 'Netflix',
    //     note: '',
    //     amount: 5500,
    //     createdAt: 3500
    // })
})

// Should edit an expense
test('Should edit an expense', () => {
    const description = 'Netflix bill'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[2].description).toBe(description)
})

// Should not edit an expense if expense is not found
test('Should not edit an expense if expense is not found', () => {
    const description = 'Netflix bill'
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-5',
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})