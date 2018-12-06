$(document).ready(function () {
    var myInt1 = null;
    var myInt2 = null;
    var myInt3 = null;
    var w = window.innerWidth;

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("brush");

    var c1 = document.getElementById("myCanvas1");
    var ctx1 = c1.getContext("2d");
    var img1 = document.getElementById("brush1");
   
    ctx.drawImage(img,10,10);
    ctx.globalCompositeOperation="source-out";
    ctx.fillStyle="white";
    ctx.fillRect(10,10,800,600);

    ctx1.drawImage(img1,10,10);
    ctx1.fillStyle="blue";
    ctx1.globalCompositeOperation="multiply";
    ctx1.fillRect(10,10,800,600);
  

    

   
   
 

 

  
    

    //////////////////////////////

    var searchResults = [];
    fetch('../assets/generated.json')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            for (let i in json) {
                if (json[i].numOfBedrooms == searchInput.numOfBedrooms ||
                    json[i].city == searchInput.location ||
                    json[i].propertyType == searchInput.propertyType ||
                    json[i].listingType == searchInput.listingType 
                    
                ) {

                    var result = {
                        city: null,
                        propertyType: null,
                        listingType: null,
                        numOfBedrooms: null
                    };

                    result.city = json[i].city;
                    result.propertyType = json[i].propertyType;
                    result.listingType = json[i].listingType;
                    result.numOfBedrooms = json[i].numOfBedrooms;
                    console.log(result);
                    searchResults.push(result);
                }

            }
        });

    $('#rooms').click(function () {
        searchResults.map(c => {
            return $('#rooms').append(`<li>${c.city},${c.propertyType},${c.listingType},${c.numOfBedrooms}</li>`);
        })

    });
    ///////////////////////////////////////////////////////


    //////////////////////////////////////////////

    $('.ourAdvantages').one('mouseenter', function () {
        var x1 = 1;
        myInt1 = setInterval(myCounter1, 8);

        function myCounter1() {
            if (x1 > 72) {
                clearInterval(myInt1);
            } else {
                x1 += 1;
                $('#rectangle1').text(x1);
            }
        };

        var x2 = 1;
        myInt2 = setInterval(myCounter2, 8);

        function myCounter2() {
            if (x2 > 85) {
                clearInterval(myInt2);
            } else {
                x2 += 1;
                $('#rectangle2').text(x2);
            }
        }

        var x3 = 1;
        myInt3 = setInterval(myCounter3, 8);

        function myCounter3() {
            if (x3 > 65) {
                clearInterval(myInt3);
            } else {
                x3 += 1;
                $('#rectangle3').text(x3);
            }
        }

        var x4 = 1;
        myInt4 = setInterval(myCounter4, 8);

        function myCounter4() {
            if (x4 > 55) {
                clearInterval(myInt4);
            } else {
                x4 += 1;
                $('#rectangle4').text(x4);
            }
        }
    });



    //////////////////////NAVIGATION TOP BUTTON///////////////////////////////////////////////

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        var vrednost = $('#inlineFormInputName2').val();
        console.log(vrednost + ' vrednost');
        var vrednost1 = $('#inlineFormCustomSelectPref').val();
        console.log(vrednost1 + ' vrednost1');

        if (scroll > 400) {
            $('.navigationArrow').addClass("showUp");
            $('.navigationArrow').removeClass("hideDown");
        } else if (scroll < 400) {
            $('.navigationArrow').addClass("hideDown");
            $('.navigationArrow').removeClass("showUp");
        }

    });

    ///////////////////////////////////////////////////////////////

    $("#pisiteNam").click(function () {
        $("#myForm2").slideDown("slow");
    });

    $("#closeForm").click(function () {
        event.preventDefault();
        $("#myForm2").slideUp("slow");
    });

    $('#emailQuestion').click(function () {
        $('#movingLabelemail').removeClass('movingLabel');
        $('#movingLabelemail').addClass('emailQuestion');
    })

    $('#pitanjeQuestion').click(function () {
        $('#movingLabelpitanje').removeClass('movingLabel');
        $('#movingLabelpitanje').addClass('pitanje');
    })


    $(window).resize(function () {
        var wWidth = window.innerWidth;
        if (wWidth < 576) {
            $('.bdtInform').text(" ");
        } else {
            $('.bdtInform').text("PRIJAVI SE");
        }
        this.console.log(wWidth + "siriiiiina");
    });

    $("#toggleBtn").click(function () {
        $(".menuBtnText").addClass("d-none");
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $("#menuClose").removeClass("d-none");
        } else {
            $(this).addClass("open");
            $("#menuOpen").removeClass("d-none");
        }

    })

    /////////////NAVBAR ################33
    $('#open').click(function () {
        $('#side-menu').toggleClass('active');
        $('.toogleIcon').toggleClass('active');
    });


    $('#iconsCont').click(function () {
        $('#user').toggleClass('active2');
        $('#close').toggleClass('active3');
        $('#logInBackGround').toggleClass('active');
        $('#logIn').toggleClass('active1');
    });

    ////////////////////////// FORM SUBMIT SEARCH ///////////////


    $("#BtnSubmit").click(function () {
        var location = $('#location').val();
        var propertyType = $('#propertyType').val();
        var listingType = $('#listingType').val();
        var numOfBedrooms = $('#noOfBedrooms').val();
        var query={};
        if($('#location').val() !== ''){
            query.location=$('#location').val();
        }
        if($('#propertyType').val() !== ''){
            query.propertyType=$('#propertyType').val();
        }
        // window.location.href = `search_results.html?location=${location}&propertyType=${propertyType}&listingType=${listingType}&noOfBedrooms=${numOfBedrooms}`;
        window.location.href = `search_results.html?query=${JSON.stringify(query)}`;
   
    });

    $.urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results[1] || 0;
    }

    var searchInput = {};

    searchInput = decodeURIComponent($.urlParam('query')); // name
    console.log(JSON.parse(searchInput));
    // searchInput.location = decodeURIComponent($.urlParam('location')); // name
    // searchInput.propertyType = decodeURIComponent($.urlParam('propertyType')); // 6
    // searchInput.listingType = decodeURIComponent($.urlParam('listingType')); // null
    // searchInput.numOfBedrooms = decodeURIComponent($.urlParam('numOfBedrooms')); // null
    // console.log(searchInput);

    
})