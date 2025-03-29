import 'virtual:anyframe.css'
import './welcome.js'
import './lib/theme.js'

//# dev mode only! removed on build!
if (import.meta.env.MODE === 'development') {
  const classNames = [...document.querySelectorAll('html, body, body *:not(script)')].flatMap(
    (element) => element.getAttribute('class')?.split(/\s+/).filter(Boolean) || []
  )

  Promise.all([import('@anyframe/css'), import('../.config/anyframe.js')])
    .then(([anyCSSModule, configModule]) => {
      const AnyCSS = anyCSSModule.AnyCSS
      const config = configModule.default
      const styleTag = document.createElement('style')
      styleTag.textContent = new AnyCSS(config).render(classNames.join(' '))
      document.head.appendChild(styleTag)
    })
    .catch((error) => {
      console.error('Failed to load Anyframe modules:', error)
    })
}
