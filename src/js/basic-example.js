

// - start template
const htmlTarget = document.getElementById('main');
const imageKeywords = ['cat', 'dog', 'bear', 'moose', 'lion', 'tiger', 'horse', 'zebra', 'cow', 'bird'];
const getImageList = () => {
  return imageKeywords.map(keyword => {
    return `<li>
              <figure>
                <img class="lazy-img" data-src="https://source.unsplash.com/1600x900/?${keyword}" />
              </figure>
              <figcaption>${keyword} from unsplash</figcaption>
            </li>`
  }).join('');
};
htmlTarget.innerHTML = `<ul class="basic-example">${getImageList()}</ul>`;
// - end template




// Let the Lazy-Loading begin...

const images = document.querySelectorAll('.lazy-img');

const onImageLoaded = (el) => {
  el.classList.add('loaded');
};

const onImageError = (el) => {
  el.classList.add('error');
};

const loadImage = image => {
  const imageUrl = image.getAttribute('data-src');

  image.onload = onImageLoaded(image);
  image.onerror = onImageError(image);
  image.src = imageUrl;
};


const initObserver = () => {

  const observerEntryCallback = entry => {
    console.log(entry);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => observerEntryCallback(entry));
  }, {
    rootMargin: '0px',
    threshold: 1.0
  });

  [...images].forEach(element => observer.observe(element));
};





window.addEventListener('load', () => {

  initObserver();

  // Load all the images on the page
  //images.forEach(image => loadImage(image));
});









