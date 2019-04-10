import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import * as queryString from 'query-string'


@observer class Email extends Component {
  static propTypes = {
    location: PropTypes.string,
  }
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const parsed = queryString.parse(location.search)
    window.location.href = `mailto:${parsed.subject}?subject=${parsed.subject}
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
