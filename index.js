 // Additional demo-specific code
 const dropzone = document.getElementById('dropzone');
 const successMessage = document.getElementById('success');

 dropzone.addEventListener('dragover', function(e) {
     e.preventDefault();
     this.classList.add('dragover');
 });

 dropzone.addEventListener('dragleave', function(e) {
     this.classList.remove('dragover');
 });

 dropzone.addEventListener('drop', function(e) {
     e.preventDefault();
     this.classList.remove('dragover');
     successMessage.style.display = 'block';
     setTimeout(() => {
         successMessage.style.display = 'none';
     }, 3000);
 });