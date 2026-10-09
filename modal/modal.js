
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
// Code to show modal  - Use event parameter 'e'   
    console.log(e.target);
    console.log("currentTarget", e.currentTarget);

    //what image was clicked?
    const imgClicked = e.target;
    const filename = imgClicked.getAttribute("src");
    const alt = imgClicked.alt

    //get the name of the large image
const largeImg = filename.replace("-sm", "-full")

    //put the correct source path in the dialog 
    modalImage.src = largeImg;
    modalImage.alt = alt;

    //show the dialog
    modal.showModal();

}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          