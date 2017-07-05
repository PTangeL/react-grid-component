import React from 'react';
// import TestUtils from 'react-addons-test-utils';
import Col, { getColumnProps } from '../../src/components/Col';
import GridProvider from '../../src/components/GridProvider';
//import style from 'flexboxgrid';
import styles from 'flexboxgrid/dist/flexboxgrid.css';
import { shallow, mount } from 'enzyme'

console.log('stylesaaa', styles)
// const renderer = TestUtils.createRenderer();
const context = { flexboxgrid: { styles }}

describe('Col', () => {
  it('Should add classes equals to props', () => {
    /*
    renderer.render(
      <GridProvider>
        <Col xs={12} sm={8} md={6} lg={4} />
      </GridProvider>
    );
    */
    const wrapper = shallow(<Col xs={12} sm={8} md={6} lg={4} />, { context })

    expect(wrapper.props().className).toEqual(styles.container)

    const { className } = wrapper.props()
    const type = wrapper.type()

    expect(type).toBe('div');
    expect(className).toContain(style['col-xs-12']);
    expect(className).toContain(style['col-sm-8']);
    expect(className).toContain(style['col-md-6']);
    expect(className).toContain(style['col-lg-4']);
  });
/*
  it('Computes the column properties', () => {
    expect(getColumnProps({ className: 'test', xs: 12, unknown: 'foo' }, styles)).toEqual({
      unknown: 'foo', className: `${style['col-xs-12']} test`
    });
  });

  it('Should add "first-*" class if "first" property is set', () => {
    renderer.render(
      <GridProvider>
        <Col first="md"/>
      </GridProvider>
    );
    expect(renderer.getRenderOutput().props.className).toContain(style['first-md']);
  });

  it('Should not replace class', () => {
    renderer.render(
      <GridProvider>
        <Col className="foo" md={3} />
      </GridProvider>
    );

    const { className } = renderer.getRenderOutput().props;

    expect(className).toContain('foo');
    expect(className).toContain(style['col-md-3']);
  });

  it('Should support auto-width', () => {
    renderer.render(
      <GridProvider>
        <Col xs sm md lg />
      </GridProvider>
    );
    const { className } = renderer.getRenderOutput().props;
    expect(className).toContain(style['col-xs']);
    expect(className).toContain(style['col-sm']);
    expect(className).toContain(style['col-md']);
    expect(className).toContain(style['col-lg']);
  });

  it('Should support custom tag name', () => {
    renderer.render(
      <GridProvider>
        <Col xs sm md lg tagName="li" />
      </GridProvider>
    );

    expect(renderer.getRenderOutput().type).toBe('li');
  });
  */
});
