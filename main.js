let flight_details = fetch("flights.json");
flight_details.then(response => response.json()).then(data=>{ 

    console.log(data);
            
    /**for(let i = 0; i < data.length; i++) {
        let obj = data[i];
        const today=new Date(obj.departTime)
        console.log(today.toUTCString());
    }**/


    for(let i = 0; i < data.length; i++) {
    //     let obj = data[i];
    //     let deptime = new Date(obj.departTime);
    // var card = document.createElement("div");
    // card.className="card";
    // var flno =document.createElement("h4");
    // flno.className="card-header";
    // flno.innerHTML=obj.flightNum
    // var timee=document.createElement("h5");
    // timee.className="card-header";
    // timee.innerHTML=deptime.toUTCString( );

    // card.appendChild(flno);
    // card.appendChild(timee);
    
    // // document.getElementById("cards-wrapper").appendChild(div);

    // var cardwrapper = document.createElement("div");
    // cardwrapper.className="cards-wrapper";
    
    // cardwrapper.appendChild(card);

    // var carouselitem = document.createElement("div");
    // carouselitem.className="carousel-item";
    
    // var carouselitem2 = document.createElement("div");
    // carouselitem2.className="carousel-item active";

    // // if(i==0||i==1)
    // //     carouselitem2.appendChild(cardwrapper);

    // // else
    //     carouselitem.appendChild(cardwrapper);
    
    //     document.getElementById("carousel-inner").appendChild(carouselitem);

    let obj = data[i];
        var box = document.createElement("div");
        box.className="card border-dark mb-3";
        box.style.width="98%";
        box.style.alignContent = "space-between";
        var flno =document.createElement("div");
        flno.className="card-header";
        var flnoh3=document.createElement("h3");
        flnoh3.innerHTML=obj.flightNum+" "+obj.origin+" ---> "+obj.destination;

        var detail=document.createElement("div");
        detail.className="card-body text-dark"
        var depttime=document.createElement("h5");
        depttime.className="card-title";
        const dtime=new Date(obj.departTime);
        depttime.innerHTML="Deaparture Time: "+dtime.toUTCString();
        var arrivetime=document.createElement("h5");
        arrivetime.className="card-title";
        const atime=new Date(obj.ArrivalTime);
        arrivetime.innerHTML="Arrival: "+atime.toUTCString();
        
        var price=document.createElement("h5");
        price.className="card-title"
        price.innerHTML="Price: "+obj.price;

        var proceed=document.createElement("a");
        proceed.className="btn btn-primary";
        proceed.innerHTML="Proceed to Book";
        proceed.style.color="white";
        proceed.href = "booking.html";
        // proceed.style.transform = "translate(1100%, 0)";
        
        
        box.appendChild(flno);
        flno.appendChild(flnoh3);
        box.appendChild(detail);
        detail.appendChild(depttime);
        detail.appendChild(arrivetime);
        detail.appendChild(price);
        detail.appendChild(proceed);

        var carouselitem = document.createElement("div");
        carouselitem.className="carousel-item";

        carouselitem.appendChild(box);

        document.getElementById("carousel-inner").appendChild(carouselitem);

    
    }

});