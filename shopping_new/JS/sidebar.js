$(document).ready(function () {

  $("#show_one_product").trigger("refresh.owl.carousel");

  $("#bar_side_click").click(function (e) {

    e.preventDefault();

    if ($(".section_main_header").hasClass("open")) {

      $(".section_main_header").removeClass("open");

      $(".section_sidebar").removeClass("open");

    } else {

      $(".section_main_header").addClass("open");

      $(".section_sidebar").addClass("open");

    }

    setTimeout(function () {

      $("#show_one_product").trigger("refresh.owl.carousel");

    }, 310);

    setTimeout(function () {

      $("#show_multi_product").trigger("refresh.owl.carousel");

    }, 310);

  });

  $(".block_list_div").click(function(){

    if($(this).hasClass("selected"))

      {

      $(this).removeClass("selected");

    }

    else{

      $(this).addClass("selected");

    }

    if ($(".block_list_div.selected").length > 0) {

      $(".continue_btn").show();
      $(".select_btn ").hide();

    } else {

      $(".continue_btn").hide();
      $(".select_btn").show();

    }

  })

  $('#image-input').on('change', function() {

    //$('#image-preview').empty(); // Clear previous previews

    const files = this.files;

    for (let i = 0; i < files.length; i++) {

        const file = files[i];

        const reader = new FileReader();

        reader.onload = function(e) {

            const imgPreview = $('<div class="image-preview"></div>');

            imgPreview.append(`<img src="${e.target.result}" alt="Image Preview" class="img_preview">`);

            // imgPreview.append('<button class="remove-image">&times;</button>');

            $('#image-preview').append(imgPreview);

            $("#upload_image_button").before(imgPreview);

        };

        reader.readAsDataURL(file);

    }

});
// -------------------share by me pop us js --------------------------
        var modal = document.getElementById("myModal");
        // Get all buttons that open the modal
        var btns = document.getElementsByClassName("add_product_btn");
        // Get the <span> element that closes the modal

        // Loop through all buttons to add click event
        for (var i = 0; i < btns.length; i++) {
        btns[i].onclick = function() {
            modal.style.display = "block";
        }
        }


        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }
//-----------------------onclick sidebar menu add active----------------------
        $(".click_show_page").click(function(e){
            e.preventDefault();
            console.log("hah");
            var href = $(this).attr('href');
            window.location.href = href;
            setTimeout(function() {
              $('.hover_products').addClass('active');
          }, 300); 
        })
        
});
//------------------------------onclick sidebar menu add active--------------------
//-----------------------------Category list add ---------------------------------
        var modal_1 = document.getElementById("myModal_category");
        // Get all buttons that open the modal
        var btn_1 = document.getElementById("add_category_list");
        var cross_btn=document.querySelector(".cross_popup");
        // Get the <span> element that closes the modal
        var body = document.body;
        btn_1.onclick = function(e) {
            e.preventDefault();
            modal_1.style.display = "block";
            body.style.background = "rgba(28, 139, 150, 0.5)";
        }


        // When the user clicks anywhere outside of the modal, close it
        cross_btn.onclick = function(event) {
            modal_1.style.display = "none";
            body.style.background = "none";
        }
//-----------------------------Category list add  end---------------------------------
