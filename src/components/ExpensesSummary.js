import React from "react"
import { connect } from "react-redux"
import numeral from "numeral"
import selectExpenses from "../selectors/expenses"
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => (
    <div>
        { 
            <p>
                Viewing {expensesCount} {expensesCount === 1 ? 'expense' : 'expenses'} totalling {numeral(expensesTotal / 100).format('$0,00.00')}
            </p>
        }  
    </div>
)

const mapStateProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)

    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateProps)(ExpensesSummary)