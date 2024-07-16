function scrollToSection(sectionId) {
   const section = document.getElementById(sectionId);
   if (section) {
     const scrollOptions = {
       behavior: 'smooth',
       block: 'start'
     };
 
     // Añadir un retraso de 100 milisegundos (o ajusta según necesites)
     setTimeout(() => {
       section.scrollIntoView(scrollOptions);
     }, 0.1);
   }
 }