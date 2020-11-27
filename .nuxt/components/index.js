export { default as Carousel } from '../../components/Carousel.vue'
export { default as ToggleButton } from '../../components/ToggleButton.vue'

export const LazyCarousel = import('../../components/Carousel.vue' /* webpackChunkName: "components/Carousel" */).then(c => c.default || c)
export const LazyToggleButton = import('../../components/ToggleButton.vue' /* webpackChunkName: "components/ToggleButton" */).then(c => c.default || c)
