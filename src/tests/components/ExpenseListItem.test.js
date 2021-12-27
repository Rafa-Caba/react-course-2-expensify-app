import React from "react"
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

test('should render ExpenseListItem with a expense', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})