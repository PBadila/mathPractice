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
let dClass = document.querySelector(".dClass");
let mClass = document.querySelector(".mClass");
let sClass = document.querySelector(".sClass");
let bClass = document.querySelector(".bClass");
let aClass = document.querySelector(".aClass");
let iconBox = document.querySelector(".iconBox");
let icons = document.querySelector(".icons");
let num1 = document.getElementById("num1");
let inputBox = document.querySelector(".inputBox");
let enterAns = document.querySelector(".enterAns");
let topAns = document.querySelector(".topAns");
let multAns = document.querySelector(".multAns");
let subAns = document.querySelector(".subAns");
let divDiv = document.querySelector(".divDiv");
let multLine = document.querySelector(".multLine");
let bdArrow = document.querySelector(".bdArrow");
let mult2Ans = document.querySelector(".mult2Ans");
let sub2Ans = document.querySelector(".sub2Ans");


//variables
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
let helper;
let helperArray=["Hmmmm..Let's think about that...","Almost.  You're so smart, try it again - I know you'll get it.","Wellllllllll.....Not quite, but you're awesome!","Try again. You got this!!"];
let backColor;
let clickNum=0;
let ans=0;
let numCircled=0;
let step=0;
//this will allow the changeStep function to know x1 or x2
xFactor=0;
let item;
itemArray=["./imgs/bird.png","./imgs/bubbleTea.png","./imgs/cat.png","./imgs/coffee.png","./imgs/cookie.png","./imgs/football.png","./imgs/gp.png","./imgs/gummy.png","./imgs/makeup.png","./imgs/orange.png","./imgs/ramen.png",];
 

//functions

//this function sets the color for the border around the icons to create "sets" based on the divisor. This will only be done in the 10 example problems, not the do it yourself problems
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
        //this way any leftovers/remainders will not be included in a color set
        backColor="transparent";
    }
    return backColor;
}

//this funtion randomly selects an affirmation
let getAffirmation= () => {
    let randomNum = Math.floor(Math.random() * affirmationArray.length-1)+1;
    console.log("affirmation num = " +randomNum)
    affirmation=affirmationArray[randomNum];
    return affirmation;
}

//this funtion randomly selects a helper statement
let getHelper= () => {
    let randomNum = Math.floor(Math.random() * helperArray.length-1)+1;
    console.log("affirmation num = " +randomNum)
    helper=helperArray[randomNum];
    return helper;
}

//this function randomly selects the image to display with the math problem
let getImages = () => {
    let randomNum = Math.floor(Math.random() * 11);
    console.log("image num = "+ randomNum);
    item = itemArray[randomNum]
    console.log(item);
    return item;
}

//this function changes the step div instructions and highlights the proper step in the acronymn
//num is x1 or x2
let changeStepandHint = (num) =>{
    console.log("Step: "+step);
    stepBox.innerText="";
    switch (step){
        case 0:
            cClass.style.color="green";
            dClass.style.color="black";
            mClass.style.color="black";
            sClass.style.color="black";
            aClass.style.color="black";
            bClass.style.color="black";
            stepBox.innerText="STEP 1: CIRCLE - Circle what you are going to divide by "+ a+"."
            stepBox.style.visibility="visible";
            step++
        break;
        case 1:
            cClass.style.color="black";
            dClass.style.color="green";
            mClass.style.color="black";
            sClass.style.color="black";
            aClass.style.color="black";
            bClass.style.color="black";
            stepBox.innerText="STEP 2: DIVIDE - Divide the number you circled "+ num+ " by "+ a + "."+"\nWrite the answer above the last digit in your circled number.";
            stepBox.style.visibility="visible";
            setTimeout(() => {
                hintBox.classList.remove("affirm");
                hintBox.innerText= "\n So how many "+a+"'s are in "+num+"?"+ " \n How many times can "+a+ " go into " + num+"?";
                inputBox.style.display="flex";
            }, 2000);
            step++
        break;
        case 2:
            cClass.style.color="black";
            dClass.style.color="black";
            mClass.style.color="green";
            sClass.style.color="black";
            aClass.style.color="black";
            bClass.style.color="black";
            stepBox.innerText="STEP 3: MULTIPLY - Multiply the number you just wrote on top "+ ans+" by the number you are dividing by "+a+"."+"\nThen write that answer underneath the number you circled "+num+".";
            setTimeout(() => {
                hintBox.classList.remove("affirm");
                hintBox.innerText= "\n What is "+ ans+" x "+ a+" ?";
                inputBox.style.display="flex";
            }, 2000);
            step++
            break;    
        case 3:
            cClass.style.color="black";
            dClass.style.color="black";
            mClass.style.color="black";
            sClass.style.color="green";
            aClass.style.color="black";
            bClass.style.color="black";
            stepBox.innerText="STEP 4: SUBTRACT - Subtract the answer you wrote from the number you circled "+ num +".";
            setTimeout(() => {
                hintBox.classList.remove("affirm");
                hintBox.innerText= "\n What is "+ num+" - "+ ans+" ?";
                inputBox.style.display="flex";
            }, 2000);
            step++
        break;  

        case 4:
            cClass.style.color="black";
            dClass.style.color="black";
            mClass.style.color="black";
            sClass.style.color="black";
            aClass.style.color="green";
            bClass.style.color="black";
            stepBox.innerText="STEP 5: ANSWER-CHECK - Check your answer after you subtract.  That number should be less than the number you are dividing by.";
            setTimeout(() => {
                hintBox.classList.remove("affirm");
                hintBox.innerText= "Is "+ans+" < "+a+" ?"+ "\n If not, there are more groups of "+a+" in "+xFactor+".";
            }, 2000);
            setTimeout(() => {
            iconBox.innerHTML="";
            cClass.style.color="black";
            dClass.style.color="black";
            mClass.style.color="black";
            sClass.style.color="black";
            aClass.style.color="black";
            bClass.style.color="green";
            stepBox.innerText="STEP 6: BRING DOWN - If there is a number to bring down, bring it down next to your subtraction answer."+"\nIf not, you're done.";
            
            hintBox.classList.remove("affirm");
            hintBox.innerText= "If you are bringing a number down, enter it in the box.";
            inputBox.style.display="flex";}, 7500);
         

            step++
        break; 

        case 5:
            cClass.style.color="green";
            dClass.style.color="black";
            mClass.style.color="black";
            sClass.style.color="black";
            aClass.style.color="black";
            bClass.style.color="black";
            stepBox.innerText="STEP 5: CIRCLE - Back to CIRCLE. Circle what you are going to divide by "+ a+"."
            stepBox.style.visibility="visible";
            subAns.style.color="orange";
            step++
       
        setTimeout(() => {
            cClass.style.color="black";
            dClass.style.color="green";
            mClass.style.color="black";
            sClass.style.color="black";
            aClass.style.color="black";
            bClass.style.color="black";
            stepBox.innerText="STEP 2: DIVIDE - Divide the number you circled "+ num+ " by "+ a + "."+"\nWrite the answer above the last digit in your circled number.";
            stepBox.style.visibility="visible";
            setTimeout(() => {
                hintBox.classList.remove("affirm");
                hintBox.innerText= "\n So how many "+a+"'s are in "+num+"?"+ " \n How many times can "+a+ " go into " + num+"?";
                inputBox.style.display="flex";
            }, 2000);
            step++ 
            let pic = getImages();
            for(i=1;i<=num;i++){
                console.log(i);
                let img = document.createElement('img');
                img.src=pic;
                img.classList.add("icons")
                img.style.borderColor=colorCheck(num,i);
                iconBox.appendChild(img);
            };
        }, 2500);
        break;

        case 7:
            cClass.style.color="black";
            dClass.style.color="black";
            mClass.style.color="green";
            sClass.style.color="black";
            aClass.style.color="black";
            bClass.style.color="black";
            stepBox.innerText="STEP 3: MULTIPLY - Multiply the number you just wrote on top "+ ans+" by the number you are dividing by "+a+"."+"\nThen write that answer underneath the number you circled "+num+".";
            setTimeout(() => {
                hintBox.classList.remove("affirm");
                hintBox.innerText= "\n What is "+ ans+" x "+ a+" ?";
                inputBox.style.display="flex";
            }, 2000);
            step++
            break; 

        case 8:
            cClass.style.color="black";
            dClass.style.color="black";
            mClass.style.color="black";
            sClass.style.color="green";
            aClass.style.color="black";
            bClass.style.color="black";
            stepBox.innerText="STEP 4: SUBTRACT - Subtract the answer you wrote from the number you circled "+ num +".";
            setTimeout(() => {
                hintBox.classList.remove("affirm");
                hintBox.innerText= "\n What is "+ Number(subAns.textContent)+" - "+ ans+" ?";
                inputBox.style.display="flex";
            }, 2000);
            step++
        break;  

        case 9:
            cClass.style.color="black";
            dClass.style.color="black";
            mClass.style.color="black";
            sClass.style.color="black";
            aClass.style.color="green";
            bClass.style.color="black";
            stepBox.innerText="STEP 5: ANSWER-CHECK - Check your answer after you subtract.  That number should be less than the number you are dividing by.";
            setTimeout(() => {
                hintBox.classList.remove("affirm");
                hintBox.innerText= "Is "+ans+" < "+a+" ?"+ "\n If not, there are more groups of "+a+" in "+xFactor+".";
            }, 2000);
            setTimeout(() => {
            cClass.style.color="black";
            dClass.style.color="black";
            mClass.style.color="black";
            sClass.style.color="black";
            aClass.style.color="black";
            bClass.style.color="green";
            stepBox.innerText="STEP 6: BRING DOWN - If there is a number to bring down, bring it down next to your subtraction answer."+"\nIf not, you're done.";
            
            hintBox.classList.remove("affirm");
            hintBox.innerText= "If you are bringing a number down, enter it in the box.";
            inputBox.style.display="flex";}, 7500);
         

            step++
        break; 
   
        

    }
}

//Event Listeners

//when start button is clicked
start.addEventListener('click',()=>{
    console.log('clicked button')
    start.style.display="none";
    a=Math.floor((Math.random() * 8)+ 2);
    b=Math.floor((Math.random() * 980)+ 20);
    c=b.toString();
    console.log(typeof(b));
    console.log(typeof(c));
    console.log(c.length)
    console.log("a: "+a)
    console.log("b: "+b)
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
    divDiv.style.display="flex";
    setTimeout(() => {
        changeStepandHint(0);
    }, 1000);
    setTimeout(() => {
        console.log('displaying circleOptions')
        circleOptions.style.display="flex";
    }, 2000);
    
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
            // x3=bArray[2];
            // circleOption3.innerText="Circle "+x3;
            break;

    }

   
})
  
    


circleOption1.addEventListener('click', () =>{
    if(a<=Number(c[0])){
        xFactor=Number(x1);
        topAns.classList.remove("topAnsX2");
        topAns.classList.add("topAnsX1");
        subAns.classList.remove("subAnsX2");
        multLine.classList.remove("multAnsX2");
        if(b<100){
            subAns.classList.add("subAnsX1a");
            multLine.classList.add("multAnsX1a");
        }else{
            subAns.classList.add("subAnsX1");
            multLine.classList.add("multAnsX1");
        }
        
        
        circleOptions.style.display="none";
        numCircled=Number(x1);
        console.log(numCircled);
        d1.style.color="orange";
        hintBox.classList.add("affirm");
        hintBox.innerText=  getAffirmation();
        setTimeout(() => {
          changeStepandHint(xFactor);
        }, 1000);
        let pic = getImages();
        for(i=1;i<=Number(x1);i++){
            console.log(i);
            let img = document.createElement('img');
            img.src=pic;
            img.classList.add("icons")
            img.style.borderColor=colorCheck(xFactor,i);
            iconBox.appendChild(img);
            
        }
        
    }else{
        hintBox.innerText="Are you sure? Can "+a+" go into "+ c[0]+"?"
    }
})

circleOption2.addEventListener('click', () =>{
    if(a>Number(c[0])){
        xFactor=Number(x2);
        topAns.classList.remove("topAnsX1");
        topAns.classList.add("topAnsX2");
        subAns.classList.remove("subAnsX1");
        multLine.classList.remove("multAnsX1");
       
        if(b<100){
            topAns.classList.add("topAnsX2a");
            subAns.classList.add("subAnsX2a");
            multLine.classList.add("multAnsX2a");
        }else{
            subAns.classList.add("subAnsX2");
            multLine.classList.add("multAnsX2");
        }
        circleOptions.style.display="none";
        numCircled=Number(x2);
        console.log("Number circled= " +numCircled);
        d1.style.color="orange";
        d2.style.color="orange";
        hintBox.classList.add("affirm");
        hintBox.innerText=  getAffirmation();
        setTimeout(() => {
            changeStepandHint(xFactor);
          }, 1000);
        let pic = getImages();
        for(i=1;i<=Number(x2);i++){
            console.log(i);
            let img = document.createElement('img');
            img.src=pic;
            img.classList.add("icons")
            img.style.borderColor=colorCheck(xFactor,i);
            iconBox.appendChild(img);
            
        }
        inputBox.style.display="flex";
    }else{
        hintBox.innerText="Are you sure? "+ a + " can go into " +c[0]+c[1] + " but if it can go into "+ c[0]+ ", then you should just circle that.";
    }
 
})

enterAns.addEventListener('click', ()=>{
    console.log("step: "+step);
    ans=Number(num1.value);
    console.log("entered ans:  "+ans);
    num1.value="";
    inputBox.style.display="none";
    switch (step){
        case 2:
            console.log(numCircled/a)
            if(ans==Math.floor((numCircled/a))){
                console.log("correct");
                
                topAns.innerText=ans;
                hintBox.innerText="";
                hintBox.classList.add("affirm");
                hintBox.innerText=  getAffirmation();
                setTimeout(() => {
                    changeStepandHint(xFactor);
                }, 1000);
            }else{
                console.log("incorrect");
                    
            }
            break;
        //answer to multiplication question 
        //TO DO: go back and use classes to position answer based on x1 or x2, do same for division step
        case 3:
            console.log("Multiply step answer: "+Math.floor((numCircled/a))*a);
            if(ans==Math.floor((numCircled/a))*a){

                if(numCircled.toString().length ==2){
                    console.log("its 2 digit so repositioning");
                    if(ans.toString().length==1){
                        multLine.classList.add("digitOne");
                    }else{
                        multLine.classList.add("digitTwo");
                    }
                }

                console.log("correct");
                multAns.innerText="-"+ans;
                hintBox.innerText="";
                hintBox.classList.add("affirm");
                hintBox.innerText=  getAffirmation();
                setTimeout(() => {
                    changeStepandHint(xFactor);
                }, 1000);
            }else{
                console.log("incorrect");
            }
            break;
        //answer to subtraction question 
        case 4:
            console.log("ans = "+ans);
            console.log("Subtraction step answer: "+ (xFactor-(Math.floor((numCircled/a))*a)));
            console.log((Math.floor((numCircled/a))*a));
            console.log("xFactor = "+xFactor);
            if(ans==xFactor-(Math.floor((numCircled/a))*a)){
                console.log("correct");
                subAns.innerText=ans;
                hintBox.innerText="";
                hintBox.classList.add("affirm");
                hintBox.innerText=  getAffirmation();
                setTimeout(() => {
                    changeStepandHint(xFactor);
                    // iconBox.innerHTML="";
                }, 1000);
            }else{
                console.log("incorrect");
            }
            break;
        //answer to bring down question 
        case 5:
            console.log("ans = "+ans);
            console.log(xFactor);
            console.log(typeof(xFactor));
            if(xFactor.toString().length==1){
                console.log("length xFactor= " +xFactor.toString().length)
                //we are only on the first digit, so bring down the second
                if(ans.toString()==d2.innerText){
                    console.log("correct");
                    
                    hintBox.innerText="";
                    hintBox.classList.add("affirm");
                    hintBox.innerText=  getAffirmation();
                    console.log("show arrow");
                    bdArrow.style.visibility="visible";
                    subAns.textContent += d2.textContent;
                    console.log(typeof(subAns.textContent));
                    console.log(Number(subAns.textContent));
                    setTimeout(() => {
                        changeStepandHint(Number(subAns.textContent));
                    }, 1000);
                    // console.log("show arrow");
                    // bdArrow.style.visibility="visible";
                    // subAns.textContent += d2.textContent;
                  
    
                }else{
                    console.log("uh oh");
                }
            }else{
                //we are on the second digit, so bring down the third
                console.log( ans.toString());
                console.log(d3.innerText);
                if(ans.toString()==d3.innerText){
                    console.log("correct");
                    
                    hintBox.innerText="";
                    hintBox.classList.add("affirm");
                    hintBox.innerText=  getAffirmation();
                    bdArrow.style.visibility="visible";
                    subAns.textContent += d3.textContent;
                    console.log(typeof(subAns));
                    console.log(Number(subAns));
                    setTimeout(() => {
                        changeStepandHint(Number(subAns.textContent));
                    }, 1000);
                    // bdArrow.style.visibility="visible";
                    // subAns.textContent += d3.textContent;
    
                }else{
                    console.log("uh oh");
                }
            }
        
        
            break;

            case 7:
                console.log("ans = "+ans);
                console.log("subAns = "+Number(subAns.textContent));
                if(ans == Math.floor(Number(subAns.textContent/a))){
                    console.log("correct");
                    topAns.textContent += ans;
                    hintBox.innerText="";
                    hintBox.classList.add("affirm");
                    hintBox.innerText=  getAffirmation();
                    setTimeout(() => {
                        changeStepandHint(ans);
                    }, 1000);
                }
            break;

            case 8:
                console.log("ans = "+ans);
                if( ans = topAns.textContent[1] * a ){
                    console.log("correct");
                    if (ans.toString().length == 1){
                        mult2Ans.classList.add("mult2Ansa");
                    }
                    else{
                        mult2Ans.classList.add("mult2Ansb");
                    }
                hintBox.innerText="";
                hintBox.classList.add("affirm");
                hintBox.innerText=  getAffirmation();
                setTimeout(() => {
                    changeStepandHint(ans);
                }, 1000);
                mult2Ans.innerText = "-"+ans;
                mult2Ans.style.visibility="visible";

                }

            case 9:
                console.log("ans = " +ans);
                console.log(Number(subAns.textContent));
                let subNum = Number(mult2Ans.textContent.slice(1,mult2Ans.textContent.length));
                console.log("subNum : "+subNum)
                if(ans == Number(subAns.textContent) - subNum){
                    console.log("Correct answer");
                    sub2Ans.innerText=ans;
                }
    }

})







