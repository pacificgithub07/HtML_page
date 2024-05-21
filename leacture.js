function toggleForm() {
    var form = document.getElementById("form-container");
    if (form.style.display === "none") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }

  // Event listener for the link
  document.getElementById("showForm").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior of the link
    toggleForm(); // Call the function to toggle form visibility
  });

// --------------------------------------------------

  function toggleFormButton2() {
    var form = document.getElementById("form-container-Button2");
    if (form.style.display === "none") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }

  // Event listener for the link
  document.getElementById("showForm-Button2").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior of the link
    toggleFormButton2(); // Call the function to toggle form visibility
  });
  // ----------------------------------------
  function toggleFormButton6() {
    var form = document.getElementById("form-container-Button3");
    if (form.style.display === "none") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }

  // Event listener for the link
  document.getElementById("showForm-Button3").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior of the link
    toggleFormButton6(); // Call the function to toggle form visibility
  });
  // --------------------------------------
  function toggleFormButton3() {
    var form = document.getElementById("form-container-Button4");
    if (form.style.display === "none") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }

  // Event listener for the link
  document.getElementById("showForm-Button4").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior of the link
    toggleFormButton3(); // Call the function to toggle form visibility
  });
  // -------------------------------
  function toggleFormButton4() {
    var form = document.getElementById("form-container-Button5");
    if (form.style.display === "none") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }

  // Event listener for the link
  document.getElementById("showForm-Button5").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior of the link
    toggleFormButton4(); // Call the function to toggle form visibility
  });


  // --------------------------------
  const box = document.getElementById('myBox');

    box.addEventListener('click', function() {
        this.classList.toggle('clicked');
    });

    // -------------------------
    var currentPageId = null;

function showPage(pageId) {
    // Hide the currently visible page
    if (currentPageId !== null) {
        document.getElementById(currentPageId).classList.remove('active');
    }

    // Show the selected page
    var page = document.getElementById(pageId);
    if (page) {
        page.classList.add('active');
        currentPageId = pageId;
    }
}
