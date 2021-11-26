let count=0;

let result=0

fetch('https://quiz-app-safcsp.herokuapp.com/api/v1/questions')
.then((res)=>res.json())

// .then((res)=>{
//     console.log(res)
// })

        .then(function(data){

            

           data.map((get)=>{

        // const elm = document.getElementsByClassName('child')
        const elm = document.createElement('div');
            
                    elm.innerHTML=`

                    <p>${get.question}</p>

         ${get.answers.map((answer)=>{
 
                  return `
                <button onclick="Answer('${answer.correct}')">
            
                ${answer.text}</button>

                 
                                ` })} 
<br>
             `;
         document.getElementById('parent').appendChild(elm);
            
            

})
})


function Answer(correct){
     
    if(correct == 'true'){
       
        count=count+1;
        result=count
        console.log('Good Answer '+ count)

        swal({
            title: "Good Answer",
            text: "You answer is "+correct,
            icon: "success",
          });
            }

            else{  
                result=count
                swal({
                    title: "too bad",
                    text: "You answer is "+correct,
                    icon: "error",
                  });
     console.log("incorrect answer")

                  }
        }



// ///////////////////////////////

 

/////////////////////////

const element=document.getElementById('done')

element.addEventListener('click',Result)

function Result(){

    if(result==0){
        document.body.style.backgroundColor = "red";
        swal({
            title: "your Result is "+result+" / 4",
            text: "you fill in quiz ",
            icon: "error",
          });
    }
  else  if(result <=2 ){
    document.body.style.backgroundColor = "yellow";
        swal({
            title: "your Result is "+result+" / 4",
            text: "you shoud dtudy very well !",
            icon: "warning",
          });
    }
    else {
        document.body.style.backgroundColor = "green";
        swal({
            title: "Good job!",
            text: "your Result is "+result+" / 4",
            icon: "success",
          });
    }
    
}






// const Quize = async () =>{
    
//     const req =  await fetch('https://quiz-app-safcsp.herokuapp.com/api/v1/questions');

//     const data = await req.json();

   
//     const quez = 
    
//     data.map((item)=>{
 

//       return `
//             <div class="child">
    
//             <p>${item.question}</p>
//           ${item.answers.map((answer)=>{
 
//             return `
//             <button onclick="Answer(${count},'${answer.correct}')">

//             ${answer.text}</button>
//                     ` })} 
         
//                </div>
 
//                `;
//          }) 
   
//  document.body.innerHTML=quez.join(' ')

//     console.log(data)
    
// }
//  Quize();
 
  
    //  console.log(correct)
    

 
  