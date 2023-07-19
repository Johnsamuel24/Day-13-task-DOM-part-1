






var t = document.createElement("title");

t.setAttribute("id","title");



let h1 = document.createElement("h1");

h1.append(t);

t.innerText="Forms Using Only DOM";



document.head.append(h1);


let des = document.createElement("p");

des.setAttribute("id","description");

des.innerText="Forms Using DOM Only";

document.body.append(des);



























let a1 = document.createElement("div");


let r1 = document.createElement("div");







let c1 = document.createElement("div");

let c2 = document.createElement("div");

let f1 = document.createElement("form");

f1.setAttribute("id","form");




let f11 = document.createElement("div");

let l1 = document.createElement("label");

let i1 = document.createElement("input");


let f12 = document.createElement("div");

let l2 = document.createElement("label");

let i2 = document.createElement("input");


let f13 = document.createElement("div");

let l3 = document.createElement("label");

let i3 = document.createElement("input");


let f14 = document.createElement("div");

let l4 = document.createElement("label");

let i4 = document.createElement("input");


let f15 = document.createElement("div");

let l5 = document.createElement("label");

let i5 = document.createElement("input");


let f16 = document.createElement("div");

let l6 = document.createElement("label");

let i6 = document.createElement("input");


let f17 = document.createElement("div");

let l7 = document.createElement("label");

let i7 = document.createElement("input");


let f18 = document.createElement("div");

let l8 = document.createElement("label");

let i8 = document.createElement("input");


let f19 = document.createElement("div");

let l9 = document.createElement("label");


let f20 = document.createElement("div");





let l11 = document.createElement("label");




let f22 = document.createElement("div");

let l12 = document.createElement("label");

let i12 = document.createElement("input");


let f23 = document.createElement("div");

let l13 = document.createElement("label");

let i13 = document.createElement("input");


let f24 = document.createElement("div");

let l14 = document.createElement("label");

let i14 = document.createElement("input");


let f25 = document.createElement("div");

let l15 = document.createElement("label");

let i15 = document.createElement("input");


let f26 = document.createElement("div");

let l16 = document.createElement("label");

let i16 = document.createElement("input");


let form2 = document.createElement("form");

let form3 = document.createElement("form");


let a2 = document.createElement("div");
let input = document.createElement("input");

a1.setAttribute("class","container-fluid");
a2.setAttribute("class","container-fluid");
input.setAttribute("type","button");
input.setAttribute("class","btn btn-outline-success");
input.setAttribute("value","Submit");
input.addEventListener("click",submit);






function submit(){


    let row = document.createElement("div");
    let column = [];
    row.setAttribute("class","row");

    let z = [];
    let g = 0 ;

if(document.getElementById("first-name").value && document.getElementById("last-name").value && document.getElementById("address").value && document.getElementById("pincode").value && document.getElementById("state").value && document.getElementById("country").value && document.querySelector('input[name="gridRadios"]:checked') )
{
    z[0] = document.getElementById("first-name").value;
 
        z[1] = document.getElementById("last-name").value;
    
  
        z[2] = document.getElementById("address").value;

     z[3] = document.getElementById("pincode").value;
    

      z[4] = document.getElementById("state").value;
   

        z[5] = document.getElementById("country").value;
    

        z[6] = document.querySelector('input[name="gridRadios"]:checked').value;
}else{
    alert("Please Enter All The Details");
}
      
  
  
    
let z1 = [];
let z2 = [];



    z1[0] = document.getElementById("customControlValidation2");
    z1[1] = document.getElementById("customControlValidation3");
    z1[2] = document.getElementById("customControlValidation4");
    z1[3] = document.getElementById("customControlValidation5");
    z1[4] = document.getElementById("customControlValidation6");



    for(let i=0;i<5;i++)
    { 
       

        if(z1[i].checked !== false)
        { 
            g++;
            z.push(z1[i].value);
            z2.push(z1[i].id);
        }

        if(i == 4 && g < 2)
        {

            alert('Please Select Atleast Two Foods');

        }

    }





if( g >= 2 && z.length >= 6)
{


    for(let i=0;i<z.length;i++)
    {
 
    column[i] = document.createElement("div");
    column[i].setAttribute("class","col");
    column[i].append(z[i]);
    row.append(column[i]);
    }
        
    
c2.append(row);
}
   document.getElementById("first-name").value = "";
     
             document.getElementById("last-name").value = "";
        
      
            document.getElementById("address").value = "";
    
         document.getElementById("pincode").value = "";
        
    
          document.getElementById("state").value = "";
       
    
            document.getElementById("country").value = "";
        
    
            document.getElementById("gridRadios1").checked = false;

            document.getElementById("gridRadios2").checked = false;

            for(let i=0;i<z2.length;i++)
            {
                document.getElementById(z2[i]).checked= false;
            }
    

}







r1.setAttribute("class","row");

c1.setAttribute("class","col-4");

c2.setAttribute("class","col");


f11.setAttribute("class","form-group");

f12.setAttribute("class","form-group");



l1.setAttribute("for","formGroupExampleInput");

i1.setAttribute("type","text");

i1.setAttribute("class","form-control");

i1.setAttribute("id","first-name");

i1.setAttribute("placeholder","First Name");

var firstName = document.getElementById("first-name");







l2.setAttribute("for","formGroupExampleInput2");

i2.setAttribute("type","text");

i2.setAttribute("class","form-control");

i2.setAttribute("id","last-name");

i2.setAttribute("placeholder","Last Name");





f13.setAttribute("class","form-group");

f14.setAttribute("class","form-group");



l3.setAttribute("for","formGroupExampleInput");

i3.setAttribute("type","text");

i3.setAttribute("class","form-control");

i3.setAttribute("id","address");

i3.setAttribute("placeholder","address");



l4.setAttribute("for","formGroupExampleInput2");

i4.setAttribute("type","text");

i4.setAttribute("class","form-control");

i4.setAttribute("id","pincode");

i4.setAttribute("placeholder","pincode");


f15.setAttribute("class","form-group");

f16.setAttribute("class","form-group");


l5.setAttribute("for","formGroupExampleInput");

i5.setAttribute("type","text");

i5.setAttribute("class","form-control");

i5.setAttribute("id","state");

i5.setAttribute("placeholder","state");



l6.setAttribute("for","formGroupExampleInput2");

i6.setAttribute("type","text");

i6.setAttribute("class","form-control");

i6.setAttribute("id","country");

i6.setAttribute("placeholder","country");



f17.setAttribute("class","form-check");

f18.setAttribute("class","form-check");


l7.setAttribute("for","gridRadios1");

l7.setAttribute("class","form-check-label");



i7.setAttribute("type","radio");

i7.setAttribute("class","form-check-input");

i7.setAttribute("id","gridRadios1");

i7.setAttribute("name","gridRadios");

i7.setAttribute("value","Male");



l8.setAttribute("for","gridRadios2");

l8.setAttribute("class","form-check-label");


i8.setAttribute("type","radio");

i8.setAttribute("class","form-check-input");

i8.setAttribute("id","gridRadios2");

i8.setAttribute("name","gridRadios");

i8.setAttribute("value","Female");


f19.setAttribute("class","form-group");

l1.setAttribute("for","formGroupExampleInput");


f20.setAttribute("class","form-group");





l11.setAttribute("for","formGroupExampleInput");



f22.setAttribute("class","custom-control custom-checkbox mb-3");

l12.setAttribute("for","customControlValidation2");

l12.setAttribute("class","custom-control-label");



i12.setAttribute("type","checkbox");

i12.setAttribute("class","custom-control-input");

i12.setAttribute("id","customControlValidation2");

i12.setAttribute("value","Biriyani");



f23.setAttribute("class","custom-control custom-checkbox mb-3")

l13.setAttribute("for","customControlValidation3");

l13.setAttribute("class","custom-control-label");

i13.setAttribute("value","Curd Rice");



i13.setAttribute("type","checkbox");

i13.setAttribute("class","custom-control-input");

i13.setAttribute("id","customControlValidation3");



f24.setAttribute("class","custom-control custom-checkbox mb-3")

l14.setAttribute("for","customControlValidation4");

l14.setAttribute("class","custom-control-label");



i14.setAttribute("type","checkbox");

i14.setAttribute("class","custom-control-input");

i14.setAttribute("id","customControlValidation4");

i14.setAttribute("value","Fried Rice");

f25.setAttribute("class","custom-control custom-checkbox mb-3")

l15.setAttribute("for","customControlValidation5");

l15.setAttribute("class","custom-control-label");

i15.setAttribute("value","Noodles");




i15.setAttribute("type","checkbox");

i15.setAttribute("class","custom-control-input");

i15.setAttribute("id","customControlValidation5");


f26.setAttribute("class","custom-control custom-checkbox mb-3")


l16.setAttribute("for","customControlValidation6");

l16.setAttribute("class","custom-control-label");



i16.setAttribute("type","checkbox");

i16.setAttribute("class","custom-control-input");

i16.setAttribute("id","customControlValidation6");

i16.setAttribute("value","Idly");



form3.setAttribute("class","was-validated");


l1.innerText="First Name";

l2.innerText="Last Name";

l3.innerText="Address";

l4.innerText="Pincode";

l5.innerText="State";

l6.innerText="Country";

l7.innerText="Male";

l8.innerText="Female";

l9.innerText="Gender";



l11.innerText="Food";


l12.innerText="Biriyani";

l13.innerText="Curd Rice";

l14.innerText="Fried Rice";

l15.innerText="Noodles";

l16.innerText="Idly";




c1.append(f1);


f1.append(f11,f12,f13,f14,f15,f16,f19,f20,input);


f11.append(l1,i1);


f12.append(l2,i2);


f13.append(l3,i3);


f14.append(l4,i4);


f15.append(l5,i5);


f16.append(l6,i6);


f17.append(i7,l7);


f18.append(i8,l8);

f19.append(l9,f17,f18);


f20.append(l11,form3);



f22.append(i12,l12);

f23.append(i13,l13);

f24.append(i14,l14);

f25.append(i15,l15);

f26.append(i16,l16);



form3.append(f22,f23,f24,f25,f26);

c2.append(a2);

a1.append(r1);

r1.append(c1);

r1.append(c2);

document.body.append(a1);


