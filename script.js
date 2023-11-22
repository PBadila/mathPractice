let start = document.querySelector(".start");
let divProb = document.querySelector(".divProb");
let divisor = document.querySelector(".divisor");
let dividend = document.querySelector(".dividend");
let circleOptions = document.querySelector(".circleOptions");
let circleOption1 = document.querySelector(".circleOption1");
let circleOption2 = document.querySelector(".circleOption2");
let circleOption3 = document.querySelector(".circleOption3");
let d1 = document.querySelector(".d1");
let d2 = document.querySelector(".d2");
let d3 = document.querySelector(".d3");
let hintBox = document.querySelector(".hintBox");
let stepBox = document.querySelector(".stepBox");
let cClass = document.querySelector(".cClass");
let iconBox = document.querySelector(".iconBox");
let icons = document.querySelector(".icons");
let num1 = document.getElementById("num1");
let inputBox = document.querySelector(".inputBox");
let enterAns = document.querySelector(".enterAns");
let topAns = document.querySelector(".topAns");



let numProb = 10;
let probCount = 0;
let a=0;
let b=0;
let bArray=[];
let x1=0;
let x2=0;
let x3=0;
let bHighlight=0;
let affirmationArray=["You are so amazing!","You are a math genius!","Okay! I see you!", "Brilliant...Absolutely Brilliant!", "So....you know you're super smart, right?"];
let affirmation;
let backColor;
let clickNum=0;
let ans=0;
let numCircled=0;

let colorCheck= (num,i) =>{
    console.log("Num= "+num+ " i= "+i)
    //the additional condition using num ensures that it is a complete set of 9 getting colored and any remainders will not be
    if (i<=a && (num/a >=1)){
        backColor = "purple";
    }else if (i > a && i <= (a*2) && (num/a >=2)){
        backColor = "yellow";
    }else
    if(i>(a*2) && i <= (a*3) && (num/a >=3)){
        backColor="green";
    }else
    if (i > (a*3) && i <= (a*4) && (num/a >=4)){
        backColor = "blue";
    }else
    if(i>(a*4) && i <= (a*5) && (num/a >=5)){
        backColor="pink";
    }else
    if (i > (a*5) && i <= (a*6) && (num/a >=6)){
    backColor = "turquoise";
    }else
    if(i>(a*6) && i <= (a*7) && (num/a >=7)){
    backColor="orange";
    }else
    if (i > (a*7) && i <= (a*8) && (num/a >=8)){
    backColor = "purple";
    }else
    if(i>(a*8) && i <= (a*9) && (num/a >=9)){
    backColor="green";
    }else{
        backColor="transparent";

    }
    
    return backColor;

}


let getAffirmation= () => {
    let randomNum = Math.floor(Math.random() * affirmationArray.length-1)+1;
    console.log("affirmation num = " +randomNum)
    affirmation=affirmationArray[randomNum];
    return affirmation;
}

start.addEventListener('click',()=>{
    console.log('clicked button')
    start.style.display="none";
    a=Math.floor((Math.random() * 8)+ 2);
    b=Math.floor((Math.random() * 1000)+ 20);
    c=b.toString();
    console.log(typeof(b));
    console.log(typeof(c));
    console.log(c.length)
    divisor.innerText=a;
    if(c.length==2){
    d1.innerText=c[0];
    d2.innerText=c[1];
    d3.innerText="";
    }
    if(c.length==3){
        d1.innerText=c[0];
        d2.innerText=c[1];
        d3.innerText=c[2]
    }
    divProb.style.display="flex";
    setTimeout(() => {
        cClass.style.color="green";
        stepBox.innerText="STEP 1: CIRCLE - Circle what you are going to divide by "+ a+"."
        stepBox.style.visibility="visible";
    }, 2000);
    setTimeout(() => {
        console.log('displaying circleOptions')
        circleOptions.style.display="flex";
    }, 1000);
    
    switch (c.length){
        case 2: 
            bArray.push(Number(c[0]));
            bArray.push(Number((c[0]+c[1])));
            console.log(bArray);
            x1=bArray[0];
            circleOption1.innerText="Circle "+x1;
            x2=bArray[1];
            circleOption2.innerText="Circle "+x2;
            circleOption3.innerText="";
            break;
        case 3: 
            bArray.push(Number(c[0]));
            bArray.push(Number((c[0]+c[1])));
            bArray.push(Number((c[0]+c[1]+c[2])));
            console.log(bArray);
            x1=bArray[0];
            circleOption1.innerText="Circle "+x1;
            x2=bArray[1];
            circleOption2.innerText="Circle "+x2;
            x3=bArray[2];
            circleOption3.innerText="Circle "+x3;
            break;

    }

   
})
  
    


circleOption1.addEventListener('click', () =>{
    if(a<=Number(c[0])){
        circleOptions.style.display="none";
        numCircled=Number(x1);
        console.log(numCircled);
        d1.style.color="orange";
        hintBox.classList.add("affirm");
        hintBox.innerText=  getAffirmation();
        setTimeout(() => {
            hintBox.classList.remove("affirm");
            hintBox.innerText= "\n So how many "+a+"'s are in "+c[0]+"?"+ " \n How many times can "+a+ " go into " + c[0]+"?";
            inputBox.style.display="flex";
        }, 2000);
        
    }else{
        hintBox.innerText="Are you sure? Can "+a+" go into "+ c[0]+"?"
    }
})

circleOption2.addEventListener('click', () =>{
    if(a>Number(c[0])){
        circleOptions.style.display="none";
        numCircled=Number(x2);
        console.log("Number circled= " +numCircled);
        d1.style.color="orange";
        d2.style.color="orange";
        hintBox.innerText=  getAffirmation() + "\n So how many "+a+"'s are in "+c[0]+c[1]+"?"+ " \n How many times can "+a+ " go into " + c[0]+c[1]+"?"
        for(i=1;i<=Number(x2);i++){
            console.log(i);
            let img = document.createElement('img');
            img.src="./imgs/gp.png";
            img.classList.add("icons")
            img.style.borderColor=colorCheck(Number(x2),i);
            iconBox.appendChild(img);
            
        }
        inputBox.style.display="flex";
    }else{
        hintBox.innerText="Are you sure? "+ a + " can go into " +c[0]+c[1] + " but if it can go into "+ c[0]+ ", then you should just circle that.";
    }
 
})

enterAns.addEventListener('click', ()=>{
    ans=Number(num1.value);
    console.log(ans);
    num1.value="";
    console.log(numCircled/a)
    if(ans==Math.floor((numCircled/a))){
        console.log("correct");
        topAns.innerText=ans;

    }else{
        console.log("incorrect");
    }

})





