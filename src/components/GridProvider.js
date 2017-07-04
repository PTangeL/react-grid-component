import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from 'flexboxgrid/dist/flexboxgrid.css'

class GridProvider extends Component {
  getChildContext () {
    return {
      flexboxgrid: {
        styles
      }
    }
  }

  render () {
    return this.props.children
  }
}

GridProvider.childContextTypes = {
  flexboxgrid: PropTypes.object
}

export default GridProvider
