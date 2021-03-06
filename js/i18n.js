import Promise from 'promise-polyfill'
import {
    LanguageType,
} from './shared/definitions'


const I18N = class {
    constructor(data, settings = {}) {
        this.data = data
        this.settings = settings
    }

    static create(params = {}) {
        const extParams = {
            language: I18N.detectLanguage(),
        }

        const settingsP = new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.addEventListener('load', () => {
                const ST_OK = 200
                if (xhr.status === ST_OK) {
                    resolve(JSON.parse(xhr.responseText))
                }
                else {
                    reject(xhr.responseText)
                }
            })
            xhr.addEventListener('error', () => {
                reject(xhr.responseText)
            })
            xhr.open('POST', '/i18n/settings')
            xhr.setRequestHeader('Content-type', 'application/json')
            xhr.send('')
        })

        const translationsP = new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.addEventListener('load', () => {
                const ST_OK = 200
                if (xhr.status === ST_OK) {
                    resolve(JSON.parse(xhr.responseText))
                }
                else {
                    reject(xhr.responseText)
                }
            })
            xhr.addEventListener('error', () => {
                reject(xhr.responseText)
            })
            xhr.open('POST', '/i18n/translate')
            xhr.setRequestHeader('Content-type', 'application/json')
            xhr.send(JSON.stringify({...params, ...extParams}))
        })

        return Promise
            .all([translationsP, settingsP])
            .then(([translations, settings]) => new I18N(translations, settings))
    }

    static detectLanguage() {
        if (/^(\/en$)|(\/en\/)/.test(window.location.pathname)) {
            return LanguageType.EN
        }
        else if (/^(\/es$)|(\/es\/)/.test(window.location.pathname)) {
            return LanguageType.ES
        }
        else {
            return LanguageType.RU
        }
    }

    detectLanguage() {
        return I18N.detectLanguage()
    }

    t(cat, key) {
        const catData = this.data[cat]
        if (typeof catData === 'undefined') {
            throw new Error(`Wrong category ${cat}`)
        }
        if (!(key in catData)) {
            throw new Error(`Wrong key: ${cat}:${key}`)
        }
        return catData[key]
    }
}
export default I18N

