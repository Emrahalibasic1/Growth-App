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
  function openModal(buttonNumber) {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';

    // Postavljamo sadržaj modalnog prozora na osnovu buttonNumber
    switch (buttonNumber) {
        case 1:
            document.getElementById('modalTitle').innerText = "Accelerate Your Startup Journey: Unleash Growth with Our Powerful Platform!";
            document.getElementById('modalContent').innerText = "  ";
            document.getElementById('modalContent').innerHTML = 
            "<ol>"+
            "<p>Transform your startup into a market powerhouse with our comprehensive growth tool! Open the doors to unlimited possibilities and boost productivity with our innovative platform that simplifies organization, fosters collaboration, and enables progress tracking in one central location.</p>"+
            "<br>"+
            " <li>Effortless Organization: Manage projects, tasks, and resources seamlessly, adapting to the needs of your growing startup.</li>"+
            "<br>"+
            "<li>Perfect Collaboration: Foster team synergy through easy sharing of ideas, documentation, and communication in an intuitive way.</li>"+
            "<br>"+
            "<li>Progress Tracking: Gain insight into key performance indicators (KPIs) and analyses to make informed decisions that drive your startup's growth.</li>"+
            "<br>"+
            "<li>Personalized Support: Our team of experts is always ready to help you harness the full potential of our growth tool.</li>"
            "</ol>";
          
            break;
        case 2:
          document.getElementById('modalTitle').innerText = "Accelerate Your Startup Journey: Unleash Growth with Our Powerful Platform!";
          document.getElementById('modalContent').innerText = "  ";
          document.getElementById('modalContent').innerHTML = 
          "<ol>"+
          "<p>Transform your startup into a market powerhouse with our comprehensive growth tool! Open the doors to unlimited possibilities and boost productivity with our innovative platform that simplifies organization, fosters collaboration, and enables progress tracking in one central location.</p>"+
          "<br>"+
          " <li>Effortless Organization: Manage projects, tasks, and resources seamlessly, adapting to the needs of your growing startup.</li>"+
          "<br>"+
          "<li>Perfect Collaboration: Foster team synergy through easy sharing of ideas, documentation, and communication in an intuitive way.</li>"+
          "<br>"+
          "<li>Progress Tracking: Gain insight into key performance indicators (KPIs) and analyses to make informed decisions that drive your startup's growth.</li>"+
          "<br>"+
          "<li>Personalized Support: Our team of experts is always ready to help you harness the full potential of our growth tool.</li>"
          "</ol>";
        
          break;
          case 3:
            document.getElementById('modalTitle').innerText = "Accelerate Your Startup Journey: Unleash Growth with Our Powerful Platform!";
            document.getElementById('modalContent').innerText = "  ";
            document.getElementById('modalContent').innerHTML = 
            "<ol>"+
            "<p>Transform your startup into a market powerhouse with our comprehensive growth tool! Open the doors to unlimited possibilities and boost productivity with our innovative platform that simplifies organization, fosters collaboration, and enables progress tracking in one central location.</p>"+
            "<br>"+
            " <li>Effortless Organization: Manage projects, tasks, and resources seamlessly, adapting to the needs of your growing startup.</li>"+
            "<br>"+
            "<li>Perfect Collaboration: Foster team synergy through easy sharing of ideas, documentation, and communication in an intuitive way.</li>"+
            "<br>"+
            "<li>Progress Tracking: Gain insight into key performance indicators (KPIs) and analyses to make informed decisions that drive your startup's growth.</li>"+
            "<br>"+
            "<li>Personalized Support: Our team of experts is always ready to help you harness the full potential of our growth tool.</li>"
            "</ol>";
          
            break;
        // Dodajte case-ove za dodatne buttone ako je potrebno
    }
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
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



