import React, { Component, PropTypes } from 'react'
import * as queryString from 'query-string'


class Email extends Component {
  static propTypes = {
    location: PropTypes.string,
  }
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const parsed = queryString.parse(location.search)
    window.location.href = `mailto:${parsed.email}?subject=${parsed.subject}
    &body=`

  }

  componentDidMount() {
    setTimeout(()=>{
      window.close()
    },2000)

  }

  render() {
    return(<div></div>)
  }
  
}

export default Email
