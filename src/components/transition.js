import React from "react"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

const timeout = 300
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    left: 0,
    right: 0,
    margin: "auto",
    opacity: 0,
    transform: `translate3d(0, -50px, 0)`,
  },
  entered: {
    position: `absolute`,
    left: 0,
    right: 0,
    margin: "auto",
    transition: `all 600ms ease-out`,
    opacity: 1,
    transform: `translate3d(0, 0px, 0)`,
  },
  exiting: {
    position: `absolute`,
    left: 0,
    right: 0,
    margin: "auto",
    transition: `all ${timeout}ms ease-in`,
    opacity: 0,
    transform: `translate3d(0, 50px, 0)`,
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
          onExit={node => {
            node.style.position = "fixed"
            node.style.top = -1 * window.scrollY + "px"
          }}
        >
          {status => (
            <main
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
