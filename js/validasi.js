(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          else {
            window.alert("Terimakasih, Permintaan Pendaftaran Anda sukses. Silahkan cek SMS pada Nomor HP yang diinput untuk informasi lebih lanjut !")
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()

  