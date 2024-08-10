let password = document.getElementById("password");
    
        function genPassword(){
            let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let passwordLength = 10; 
            let password = "";
            // herE we define the variables , all of them are strings , they all have  ""
            // password = is undefined so "" stays empty 

        

            for (let i = 0; i < passwordLength; i++){
                let randomNumber = Math.floor(Math.random() * chars.length) ;
                password += chars.substring(randomNumber, randomNumber +1);
            }

            // this is a for loop
            // it keeps running as long as a value is presented in the prompt
            // Each character in a JavaScript string can be accessed by an index number,
            // as long as i is less than or = to password length increment by 1
            // this will run itertions of the code  X number of times . if 5 it will run for 5 random letters 
            //  randomnumber - is the new variable for random number selected - idex selected .
            // line 14 - is string concatenation  - substring selects 1 character of the chars string.

         /*  
         - we have a for loop within a function 
         - the  first part declares variables 
         - the password is undefined
         -the loop wil cycle as many time as the password length - index
         - for each cycle randomnumber willl be created , it is selecting the bu index. 
          - nwo we need to select the index number from the list 
          we only want 1 character at a time so the argument for the substring is betwen 
          randomnumber and random number +1
          - 


         */
            

            // now apply it
            document.getElementById("password").value = password;     
             //    tis is the syntax for retreiving info to link it with the html 
        }

         //now activate copy button
         function copyPassword(){
            let copyText = document.getElementById("password");
            copyText.select();
            copyText.setSelectionRange(0,999);
            navigator.clipboard.writeText(copyText.value);

            } 








        //  not explained well, need some work !
        // https://www.youtube.com/watch?v=w6-9PfboI2g


    



        


