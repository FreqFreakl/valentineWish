document.addEventListener('DOMContentLoaded', function() {
    const openGalleryBtn = document.querySelector('.open-gallery');
    const landingPage = document.querySelector('.landing-page');
    const loveGallery = document.getElementById('gallery');
    if (openGalleryBtn && landingPage && loveGallery) {
        openGalleryBtn.addEventListener('click', function() {
            landingPage.style.display = 'none';
            loveGallery.style.display = 'block';
        });
    }

    // Add images to the gallery dynamically
    const images = [
        'image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.jpeg', 'image5.jpeg',
        'image6.jpeg', 'image7.jpeg', 'image8.jpeg', 'image9.jpeg', 'image10.jpeg',
    ];

    const gallery = document.querySelector('.image-gallery');
    if (gallery) {
        images.forEach((image, idx) => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.alt = `Romantic Image ${idx + 1}`;
            imgElement.style.width = '100%';
            imgElement.style.borderRadius = '10px';
            imgElement.onerror = function() {
                this.style.display = 'none'; // Hide if image not found
            };
            gallery.appendChild(imgElement);
        });
    }
});
