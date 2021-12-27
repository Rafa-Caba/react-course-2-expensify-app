import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'

const store = configureStore()

store.dispatch(addExpense({ 
    description: 'Water bill', 
    note: 'This is the bill for water', 
    amount: 250, 
    createdAt: 2000 
}))

store.dispatch(addExpense({ 
    description: 'Gas bill', 
    note: 'This is the bill for gas', 
    amount: 150, 
    createdAt: 3000 
}))

store.dispatch(addExpense({ 
    description: 'Netflix bill', 
    note: 'This is the bill for Video Streaming Service', 
    amount: 1550, 
    createdAt: 5005 
}))

store.dispatch(setTextFilter('Netflix'))

setTimeout(() => {
    store.dispatch(setTextFilter('bill'))
}, 3000)

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
