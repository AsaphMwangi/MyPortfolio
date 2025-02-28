
     
        const menu_button = document.getElementById("menu_btn");
        const close_button = document.getElementById("close_btn");       
        const side_bar = document.getElementById("sidebar_container");
        const device_width = window.innerWidth;
        const paragraph_container = document.getElementById("intro_paragraph_container");
        

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
       
        paragraph_container.addEventListener("click", ()=>{
            if(!side_bar.contains(event.target))
                {
                    side_bar.style.display = "none";
                    menu_button.style.display = "block";
                    close_button.style.display = "none"
                }
        });
        
      

        