
function load() {
	fetch('./colleges.json')
     .then(res=>  res.json())
     .then(data=>{
          console.log(data[0]["Rating"])
     })
     
}

function loadDropDown(){
     fetch('http://localhost:8083/api/college/all')
     .then(res=>  res.json())
     .then(data=>{
          //console.log("WORKED>>"+data[0]['id'])
          $.each(data, function(i,obj)
        { 
            console.log(obj);
            $("#dropdown1").append(
                 $('<option></option>')
                        .val(obj["college_name"])
                        .html(obj["college_name"]));
            
        });

        $.each(data, function(i,obj)
        { 
           //console.log(obj);
            $("#dropdown2").append(
                 $('<option></option>')
                        .val(obj["college_name"])
                        .html(obj["college_name"]));
        });

     })
     //alert("DROP DOWN")
}


function clickDropDownBtn(){
     var  text = $(this).val()
     $("#dropdownbtn1").val('Hi')
            .html('hi')
}


async function getCollegeDetails(name){
     //console.log("CHECK>>"+name)
     var College = null;
     fetch('./colleges.json')
     .then(res=>  res.json())
     .then(data=>{
          for(i=0;i< data.length;i++){
               if(data[i]["College Name"] == name){
                    return data[i];
                    //console.log(data[i]+"<<<")
               }
          }
     })
              
}