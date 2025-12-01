import { config, library } from '@fortawesome/fontawesome-svg-core';
// Import the CSS once and disable autoAddCss to avoid double-injection (SSR safe)
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// Import the specific icons you need
import { faHome, faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Add them to the library
library.add(faHome, faCheck, faSpinner, faEnvelope, faGithub);