   Swal.fire({
        icon: 'success',
        title: 'Your message has been sent',
        showConfirmButton: false,
        timer: 800,
      });
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to send message. Please try again later.',
      });