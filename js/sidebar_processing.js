//Function to open and close the sidebar
        const sidebar = document.getElementById("sidebar_container"); 
        const menu_button = document.getElementById("menu_btn");
        const close_button = document.getElementById("close_btn");       
        const side_bar = document.getElementById("sidebar_container");
        const device_width = window.innerWidth;
        menu_button.addEventListener("click", () =>{
            
            side_bar.style.display = "block";
            menu_button.style.display = "none";
            close_button.style.display = "block"
        });
        close_button.addEventListener("click", () =>{
            
            side_bar.style.display = "none";
            menu_button.style.display = "block";
            close_button.style.display = "none"
        });

        