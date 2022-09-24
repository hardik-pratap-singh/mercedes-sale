        let lowerblk = document.getElementById("lowerblk");
        let ull = document.getElementById("ull");

        let style1 = {
            width : "400px" ,
            display: "flex" , 
            justifyContent : "space-between", 
        }


        let addtocart = () => {
            lowerblk.style.width = "350px" ; 
            ull.style.width ="300px"; 
            lowerblk.style.backgroundColor = "white" ; 
            lowerblk.style.color = "black" ; 
            document.querySelector(".ul1 li:nth-child(1) img").setAttribute("src" , "success-emoji.png") ; 
            document.querySelector(".ul1 li:nth-child(2)").innerText = "Wohooo! Item Added to Cart.." ; 
             

        }
      let redcircle = document.getElementById("red");
      let greycircle = document.getElementById("grey");
      let blackcircle = document.getElementById("black");

      let btn1 = document.getElementById("btn-1");
      let img1 = document.getElementById("img-1");
      

      let funcred = () => {
        img1.setAttribute("src", "m-redd.png");
        img1.setAttribute("class", "dim");
        btn1.style.backgroundColor = "red";
        btn1.style.color = "white";
        lowerblk.style.backgroundColor = "red";
        lowerblk.style.color = "white";

        document.querySelector(".list li:nth-child(1) span").innerText = "Mileage: 5,000 miles";
        document.querySelector(".list li:nth-child(2) span").innerText = "Fuel: 50mpg";
        // document.querySelector(".list li:nth-child(3) span").innerText = "Fuel: 25mpg";


        // document.querySelector(".ul2 li:nth-child(1)").innerText = "$234,123" ; 
        // document.querySelector(".ul2 li:nth-child(2) span").innerHTML = "<strike>$270,124</strike>" ; 



        

        // let b = document.querySelectorAll(".innerlist li") ; 

        //this will return a nodelist containing 5 elements 
        //to convert it to array 
        // let arr = Array.from(b);
        // console.log(arr) ; 
        // console.log(b) ; 

        // for(let i = 0 ; i < 3 ; i++){
        //     console.log(arr[i]); 
        // }

        // document.querySelector("")


        // document.querySelector(".innerlist li:nth-child(4)").style.opacity = "0" ; 
        // document.querySelector(".innerlist li:nth-child(5)").style.opacity = "0" ; 

        document.querySelector(".list li:nth-child(1) span").innerText = "Mileage: 3,252 miles";
        document.querySelector(".list li:nth-child(2) span").innerText = "Fuel: 28.45mpg";

        document.querySelector(".ul2 li:nth-child(1)").innerHTML = "$344,123" ; 
        document.querySelector(".ul2 li:nth-child(2) span").innerHTML = "<strike>$406,124</strike>" ; 


        document.querySelector(".lower h3").innerText = "Mercedez Benz D-412 2021"; 
        let c = document.querySelectorAll(".innerlist li") ; 
        let d = Array.from(c) ; 

        for(let i = 0 ; i < d.length ; i++){
            if(i >= 3){
                d[i].style.opacity = "0" ; 
            }
            else{
                d[i].style.opacity = "1" ; 
            }
        }


      };
      let funcgrey = () => {
        img1.setAttribute("src", "m-grey.png");
        img1.setAttribute("class", "dim");
        btn1.style.backgroundColor = "grey";
        btn1.style.color = "white";
        lowerblk.style.backgroundColor = "grey";
        lowerblk.style.color = "white";

        // document.querySelector(".innerlist li:nth-child(4)").style.opacity = "0" ; 

        document.querySelector(".list li:nth-child(1) span").innerText = "Mileage: 3,456 miles";
        document.querySelector(".list li:nth-child(2) span").innerText = "Fuel: 30mpg";

        document.querySelector(".ul2 li:nth-child(1)").innerHTML = "$234,123";
        document.querySelector(".ul2 li:nth-child(2) span").innerHTML = "<strike>$270,124</strike>"; 

        document.querySelector(".lower h3").innerText = "Mercedez Benz A-345 2022"; 


        let c = document.querySelectorAll(".innerlist li") ; 
        let d = Array.from(c) ; 

        for(let i = 0 ; i < d.length ; i++){
            if(i >= 2){
                d[i].style.opacity = "0" ; 
            }
            else{
                d[i].style.opacity = "1" ; 
            }
        }

        

      };
      let funcblack = () => {
        img1.setAttribute("src", "m-black.png");
        img1.setAttribute("class", "dim");
        btn1.style.backgroundColor = "black";
        btn1.style.color = "white";
        lowerblk.style.backgroundColor = "black";
        lowerblk.style.color = "white";

        document.querySelector(".list li:nth-child(1) span").innerText = "Mileage: 4,000 miles";
        document.querySelector(".list li:nth-child(2) span").innerText = "Fuel: 25mpg";

        document.querySelector(".ul2 li:nth-child(1)").innerHTML = "$ 134,450";
        document.querySelector(".ul2 li:nth-child(2) span").innerHTML = "<strike>$ 140,500</strike>";

        document.querySelector(".lower h3").innerText = "Mercedez Benz C-300 2022"; 


        let c = document.querySelectorAll(".innerlist li") ; 
        let d = Array.from(c) ; 

        for(let i = 0 ; i < d.length ; i++){
            if(i >= 4){
                d[i].style.opacity = "0" ; 
            }

            else{
                d[i].style.opacity = "1" ; 
            }
        }
      };


      