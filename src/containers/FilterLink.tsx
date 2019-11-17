import { Action } from 'redux'
import { connect } from 'react-redux'
import { setVisibilityFilterAction } from '../actions'
import { LinkView } from '../components/Link'
import { VisibilityFilterKinds } from '../types'

const mapStateToProps = (
  state: { visibilityFilter: VisibilityFilterKinds },
  ownProps: { filter: VisibilityFilterKinds }
): { active: boolean } => ({
  active: ownProps.filter === state.visibilityFilter,
})

const mapDispatchToProps = (
  dispatch: (arg0: Action) => void,
  ownProps: { filter: VisibilityFilterKinds }
): { onClick: () => void } => ({
  onClick: (): void => dispatch(setVisibilityFilterAction(ownProps.filter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LinkView)
