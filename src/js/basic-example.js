

// - start template
const htmlTarget = document.getElementById('main');
const getImageList = () => {
  return [...Array(10)].map((item, i) => {
    return `<li>
              <figure>
                <img class="lazy-img" data-src="https://cdn2.hubspot.net/hubfs/5273025/lazyload-demo/${i + 1}.jpeg" />
                <!--<div class="lazy-img lazy-bg" data-src="https://cdn2.hubspot.net/hubfs/5273025/lazyload-demo/${i + 1}.jpeg"></div>-->
              </figure>
              <figcaption>A caption for image number ${i + 1}</figcaption>
            </li>`
  }).join('');
};
htmlTarget.innerHTML = `<ul class="basic-example">${getImageList()}</ul>`;
// - end template




// Let the Lazy-Loading begin...

const images = document.querySelectorAll('.lazy-img');


// image event handlers
const onImageLoaded = (el) => {
  el.classList.add('loaded');
};
const onImageError = (el) => {
  el.classList.add('error');
};


// Lazy-loading occurs here
const loadImage = element => {
  const elementType = element.tagName.toLowerCase();
  const imageUrl = element.getAttribute('data-src');

  let image = elementType === 'img' ? element : new Image();

  image.onload = onImageLoaded(element);
  image.onerror = e => onImageError(e, element);
  image.src = imageUrl;

  if (elementType !== 'img') {
    element.style.backgroundImage = `url(${imageUrl})`;
  }
};


// Using Intersection Observer
const initObserver = () => {
  const observerEntryCallback = entry => {
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      observer.unobserve(entry.target);
      loadImage(entry.target);
    }
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => observerEntryCallback(entry));
  }, {
    root: null,
    rootMargin: '0px',
    threshold: [0]
  });

  [...images].forEach(element => observer.observe(element));
};



window.addEventListener('load', () => {
  //initObserver();

  // Load all the images on the page
  [...images].forEach(image => loadImage(image));
});









