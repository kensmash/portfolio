import React from "react"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

const timeout = 300
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
    transform: `translate3d(0, -100px, 0)`,
  },
  entered: {
    transition: `all 600ms ease-out`,
    opacity: 1,
    transform: `translate3d(0, 0px, 0)`,
  },
  exiting: {
    transition: `all ${timeout}ms ease-in`,
    opacity: 0,
    transform: `translate3d(0, 150px, 0)`,
  },
}

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props

    return (
      <TransitionGroup component={null}>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {status => (
            <main
              className="content-container"
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </main>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}

export default Transition
