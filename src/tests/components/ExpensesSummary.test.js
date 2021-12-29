import React from "react"
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should render one ExpenseSummary the total of the expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should render one ExpenseSummary the total of the multi expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={25} expensesTotal={12345612346} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})
