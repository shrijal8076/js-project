/*modal logic*/
const trigger = document.querySelector('#trigger');
const modalWrapper = document.querySelector('.modal_wrapper');
const input =document.querySelector(".inp") 
const close = document.querySelector(".close");
const p = document.querySelector("p");

trigger.addEventListener('click',function(){
    modalWrapper.classList.add('active');


});
close.addEventListener('click',function(){
    modalWrapper.classList.remove('active')
});
modalWrapper.addEventListener('click',function(e){
    if(e.target !==this)return;
    modalWrapper.classList.remove('active');

})
/* modal content autofocus  code logic */

$(document).ready(function(){
    $('html').keyup(function(e){if(e.keyCode == 8)$(".inp").prev().focus()})  
    $(".inp").on({
        "keyup" : function(e){
            if($(this).val()> 0 && $(this).val() <9 ){
            var number_input_value = parseInt($(this).val());
            console.log(typeof(number_input_value));
            $(this).next().focus();
        }else{
            if(e.keyCode != 8){
                $("p").text(" FILL NUMBER ");
            }
           
            
        }
        if(e.keyCode == 37){
            $(".inp").prev().focus(); //for left place using left arrow key

        }else if(e.keyCode == 38){
            $("this").next().focus(); ////for right place using left arrow key 

        }
        

        }
    });
   
    $("#trigger").click(function(){
        $("h2").append($("#mobilenumber").val()) // to display phone number

    });
    $(".otp").click(function(){
        $(".active").remove();
        $("#mobilenumber").val("");//to remove pre. phone number entered

    });
    
    
});
