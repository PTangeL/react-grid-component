import React from 'react'
import PropTypes from 'prop-types'
import createProps from '../createProps'
import getClass from '../classNames'

const propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
}

export default function Grid (props, context = {}) {
  const styles = context.flexboxgrid ? context.flexboxgrid.styles : null
  const containerClass = getClass(props.fluid ? 'container-fluid' : 'container', styles)
  const classNames = [props.className, containerClass]

  return React.createElement(props.tagName || 'div', createProps(propTypes, props, classNames))
}

Grid.contextTypes = {
  flexboxgrid: PropTypes.object
}

Grid.propTypes = propTypes
