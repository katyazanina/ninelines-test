import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {animation} from './modules/animation';
import {actualYear} from './modules/actualYear';
import {toRunPreloader} from './modules/preloader';
import {parallaxFooter} from './modules/parallaxFooter';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import {Share} from './modules/share';
import backToTop from './modules/backToTop';

ieFix();
vhFix();
actualYear();
animation();
scrollToAnchor.init();
header.init();
lazyLoading.init();
toRunPreloader();
parallaxFooter();
backToTop.init();
Share.init();

