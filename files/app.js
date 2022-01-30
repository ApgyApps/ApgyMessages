$("#signupBTN").click(function(){
    $("#loginform").hide();
    $("#signupform").show();
});

$("#loginBTN").click(function(){
    $("#loginform").show();
    $("#signupform").hide();
});

$("#login").click(function(){
    var phnumber = $('#num').val();
    var password = $('#password').val();
    if(phnumber && password !== ""){
        alert("not empty");
        $("#result").load("/demodata.html");
    }
    else{
        $("#result").html(`<h3 class="text-center">Enter Data First</h3><br/>`);
    }
});