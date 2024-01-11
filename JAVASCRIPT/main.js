// faq 

document.addEventListener('DOMContentLoaded', () => {
    
    const faqContainer = document.querySelector('.faq-content');
     
    faqContainer.addEventListener('click' ,(e) =>
    {
       const groupHeader = e.target.closest('.faq-group-header');
      
      
       if (!groupHeader) return;


    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');


    // toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');
    //Toggle visibility of body
    groupBody.classList.toggle('open');

    // close other open FAQ bodies
    const otherGroups = faqContainer.querySelectorAll('.faq-group');
   otherGroups.forEach((otherGroup)=>{
    if(otherGroup !== group){
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');

        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
    }
   })
    });
});
// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    hamburgerButton.addEventListener('click', () =>
      mobileMenu.classList.toggle('active')
    );
  });

  const sort = (li) =>{
      let catagry = li.getAttribute('data-category');
      let portofolioItems = document.querySelectorAll('.faq-group');
      portofolioItems.forEach((item) => {
          item.style.display = 'none';
      });
      if(catagry === 'All'){
        portofolioItems.forEach((item) => {
          item.style.display = 'block';
      });
      }

      portofolioItems.forEach((item) => {
          if(item.getAttribute('data-category').includes(catagry)){
            item.style.display = 'block';
          }
      });
  }

const openModal = () => {
  let modalWindow = document.querySelector('.popup-modal');
  let overlay = document.querySelector('.overlay');
  modalWindow.style.display = 'block';
  overlay.style.display = 'block';
}

const closeModal = () => {
  let modalWindow = document.querySelector('.popup-modal');
  let overlay = document.querySelector('.overlay');
  modalWindow.style.display = 'none';
  overlay.style.display = 'none';
}


/*
added switch function with button 
*/
document.addEventListener('DOMContentLoaded',  () => {
  var listItems = document.querySelectorAll('.faq-menu li');

  listItems.forEach(function (item) {
    item.addEventListener('click', function () {
      // Uklanjanje aktivne klase sa svih elemenata
      listItems.forEach(function (li) {
        li.classList.remove('active');
      });

      // Postavljanje aktivne klase na kliknuti element
      this.classList.add('active');
    });
  });
});
