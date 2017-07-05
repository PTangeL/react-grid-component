import React from 'react'
import { shallow, mount } from 'enzyme'
import styles from 'flexboxgrid/dist/flexboxgrid.css'

import Grid from '../../src/components/Grid'

const context = { flexboxgrid: { styles }}

describe('Grid', () => {
  it('Should add "container" class', () => {
    const wrapper = shallow(<Grid />, { context })

    expect(wrapper.props().className).toEqual(styles.container)
  });

  it('Should not replace class', () => {
    const wrapper = shallow(<Grid className="foo" />,  { context })
    const { className } = wrapper.props()

    expect(className).toContain('foo')
    expect(className).toContain(styles.container)
  });

  it('Should add "container-fluid" class if "fluid" property is true', () => {
    const wrapper = shallow(<Grid fluid />, { context })
    expect( wrapper.props().className).toEqual(styles['container-fluid'])
  })

  it('Should support custom tag name', () => {
    const wrapper = shallow(<Grid tagName="section" />, { context })
    expect(wrapper.type()).toBe('section')
  })
})
