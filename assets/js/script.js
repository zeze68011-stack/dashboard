let sidebar = document.getElementById('sidebar');
let content = document.querySelector('#content');
let sidebar_toggle = document.querySelector('#sidebar-toggle');



sidebar_toggle.addEventListener("click",() => {
  let sidebarRight = window.getComputedStyle(sidebar).right;


  if(window.innerWidth > 767 ) {


  if (sidebarRight == "0px") {
    sidebar.style.right = "-250px";
    content.style.marginRight = "0";
  } else {
    sidebar.style.right = "0";
    content.style.marginRight = "250px";
  }
}

  else {
  if (sidebarRight == "0px") {
    sidebar.style.right = "-250px"
  }


  else {
    sidebar.style.right = "0"
  }
}
}
);



// sidebar_toggle.addEventListener("click", () => {
//   let sidebarwidth = window.getComputedStyle(sidebar).width;
//   if (sidebarwidth == "250px") {
//     sidebar.style.width = "0";

//     content.style.marginRight = "0";
//   }
//   else {
//     sidebar.style.width = "250px";

//     content.style.marginRight = "250px";
//   }
// });



// datatables



//  dropdown عند النقر على الرسائل
let messagescontainer = document.getElementById("messages-container");
let messagesarea = document.getElementById("messages-area");

messagescontainer.addEventListener("click", function () {
  messagesarea.style.display = messagesarea.style.display === "block" ? "none" : "block";
});

// new DataTable('#example');


new DataTable('#example', {
  responsive: 'true',
  buttons: [
    {
      extend: 'copy',
      text: 'نسخ'
    }, {
      extend: 'excel',
      text: 'أكسل'
    }, {
      extend: 'pdf',
      text: 'ملف pdf'
    }, {
      extend: 'print',
      text: 'طباعة'
    }

  ],
  layout: {
    topStart: 'buttons'
  }
});