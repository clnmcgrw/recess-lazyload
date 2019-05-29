# Image Lazy Loading

Code Recess covering the basics of image lazy loading.

### Basic Example

* What is lazy loaading?
  * async image loading (after load event)
  * can triggered by user events (hover, scroll, etc.) or duration (timeout) 
  * general approach of deferred loading can be used with iframes and videos
  * native lazy-loading 

* Why lazy loading
  * performance and page weight
  * images account for roughly 50% of a site's traffic

* Use cases
  * image galleries, sliders, modals, tooltips, etc. - anytime an image isn't imediately in view
  * highly interactive sites or games (preloading)

* pitfalls
  * src-swapping is not enough
  * SEO implications
  * A11Y


* binding to an image load event to show an image after it has downloaded
  * background-image techniques ()

* loading images and applying effects as they come into view (IntersectionObserver)
  * intro to IntersectionObserver api vs. calculating element heights
  * css techniques for lazy images

* Advanced techniques
  * placeholder images/icons, blur-up technique

* More resources
  * [Complete Guide to Lazy Loading Images](https://css-tricks.com/the-complete-guide-to-lazy-loading-images/) from CSS-Tricks
  * [How To Build Your Own Progressive Image Loader](https://www.sitepoint.com/how-to-build-your-own-progressive-image-loader/) from Google 
  * [Lazy Loading Images and Video](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/) from SitePoint






