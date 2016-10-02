require('is-nan').shim()
import Promise from 'promise-polyfill'

import ReactDOM from 'react-dom'
import {h} from 'react-markup'
import {bindEvents} from './redux-dom-binding'
import {merge} from 'functional-utils'
import {Provider} from 'react-redux'

import I18N from './i18n'
import {createStore} from '~/shared/redux-helpers'
import {LanguageType, ProvideType, CurrencyType} from '~/shared/definitions'
import {
    setCurrency,
    setProvider,
    setAmount,
    setTargets,
    setFormComment,
    setShortDesc,
} from '~/react/action-creators/main-donation-form'
import Popup from '~/react/container/donate-popup'
import {
    reducer as donateModalReducer,
    initialState as donateModalInitialState,
} from '~/react/reducers/donate-modal-reducer'

// Subscribe form
new Promise((resolve) => {
    document.addEventListener('DOMContentLoaded', resolve)
}).then(() => {
    return I18N.create({
        'strings': [],
        'texts': [],
    })
}).then((i18n) => {
    // Init store for popup
    const initialState = {
        modal: subscribeModalInitialState.modal,
    }
    const popupStore = createStore(subscribeModalReducer, initialState)
    ReactDOM.render(
        h(Provider, {store: popupStore},
            h(SubscribePopup(i18n))
        ),
        document.querySelector('#react-subscribe-popup-entry')
    )
    Array.prototype.slice.apply(document.querySelectorAll('.layout-footer_subscribe-button')).forEach((button) => {
        button.addEventListener('click', (e) => {
            popupStore.dispatch({
                type: 'SET_MODAL_DISPLAYED',
                displayed: true,
            })
        })
    })
})
