function displayCountryName (country, name) {
    document.getElementById("name-country").innerHTML="";
    let h3 = document.createElement("h3")
    h3.innerText = country +"-" + name
    document.getElementById("name-country").appendChild(h3)

}

// displayCountryName("Viet Namm", "Ho Chi Minh City")

function displayCondition(temp_c, status, icon){
    document.getElementById("condition").innerHTML="";
    let img = document.createElement("img")
    img.setAttribute("src", icon)

    let h3Temp =document.createElement("h3")
    h3Temp.innerText = temp_c + "độ C"

    let h3Status = document.createElement("h3")
    h3Status.innerText = "Trạng thái"+ status

    let div = document.createElement("div")
    div.appendChild(h3Temp)
    div.appendChild(h3Status)

    document.getElementById("condition").appendChild(img)
    document.getElementById("condition").appendChild(div)
}

function search () {
    let searchInput = document.getElementById("searchInput").value 
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q='+searchInput;
    console.log(document.getElementById("searchInput").value)
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ff1f17375emsh66d2357d27f0576p1124c4jsn8a2566eab1b5',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
       }
    };fetch (url, options).then((res)=> {
        return res.json();
    
    }).then ((data)=> {
        console.log(data)
        displayCountryName(data.location.country, data.location.name)
        displayCondition(data.current.temp_c, data.current.condition.text, data.current.condition.icon);
    })
        
}