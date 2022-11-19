import React from 'react'

function Alert(props) {
  return (
    // as first time its NULL, it wont show alert
    props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{props.alert.type}</strong>: {props.alert.msg}
    </div>
  )
}
export default Alert