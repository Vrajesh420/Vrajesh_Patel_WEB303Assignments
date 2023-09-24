// Task : Assignment 2
// Name : Vrajeshbhai Nimeshkumar Patel
// S-ID : 0825393 
// Class : B

$(document).ready(function()
{

    $("#prospect").click(function()
    {

        $("#content").css("height","500");
        $('div#content').load("prospect.html").hide().slideToggle("fast");
    });
    
    $("#convert").click(function()
    {
        $("#content").css("height","500");

        $('div#content').load("convert.html").hide().slideToggle("fast");
    });
     $("#retain").click(function()
    {
        $("#content").css("height","500");
        $('div#content').load("retain.html").hide().slideToggle("fast");
    });
});