import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// Tell Font Awesome to skip adding the CSS automatically since it's already imported above
config.autoAddCss = false

// Add all icons to the library so you can use them without importing individually
library.add(fab, fas, far)