$(document).ready(function () {
  // ===== CAROUSEL =====
  let index = 0;
  let slides = $(".slide");
  let total = slides.length;

  function showSlide(i) {
    slides.removeClass("active");
    slides.eq(i).addClass("active");
  }

  $(".next").click(function () {
    index = (index + 1) % total;
    showSlide(index);
  });

  $(".prev").click(function () {
    index = (index - 1 + total) % total;
    showSlide(index);
  });

  // ===== TODO LIST =====
  $("#addTodo").click(function () {
    let todo = $("#todoInput").val().trim();
    if (todo === "") return;

    let item = `
      <li>
        <span class="text">${todo}</span>
        <div>
          <input type="checkbox" class="check">
          <button class="delete">X</button>
        </div>
      </li>
    `;

    $("#todoList").append(item);
    $("#todoInput").val("");
  });

  $(document).on("change", ".check", function () {
    $(this).closest("li").find(".text").toggleClass("done");
  });

  $(document).on("click", ".delete", function () {
    $(this).closest("li").remove();
  });
});
