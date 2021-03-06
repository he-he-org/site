require('is-nan').shim()

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import DonateModal from '~/react/presentational/shared/donate-modal'
import * as formActionCreators from '~/react/action-creators/main-donation-form'
import * as modalActionCreators from '~/react/action-creators/modal'

const mapStateToProps = (i18n) => (state) => {
    return {...state, i18n}
}
const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(formActionCreators, dispatch),
        ...bindActionCreators(modalActionCreators, dispatch),
    }
}

export default (i18n) => connect(mapStateToProps(i18n), mapDispatchToProps)(DonateModal)
