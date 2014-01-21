$(window).load(function(){
 var  pathname = window.location.hash;
 var dif= pathname.split("/");
 if(dif[1]=="Regla"){
	   estatico();
	 }
	var ie = false;
    var aniButtonDuration = 350;
	 var defMh = 0, h = 0;
	 defMh = parseInt($('body').css('minHeight'));
    
	 var content=$('.wrapper'),
	 		header=$('.sections'),
		 content2=$('.container'),
			body=$('body');
	 $(window).resize(function (){
		 if (h < defMh) {h = defMh}
		 $('body').stop().animate({'minHeight':h})
		});		
	$('.page_spinner').fadeOut(1000);
});
function estatico(){	
	  $(".examples").html("<div class='group'> <div class='wrap-element'> <div class='elementsel custom position-1' data-type='1' style='opacity: 0.4;'><img src='img/gal/gen001.jpg' width='100%' height='100%' /> <div class='st' style='display:none' style='display: none;'></div></div></div> <div class='wrap-element center'> <div class='elementsel custom  position-2' data-type='2' style='opacity: 0.4;'><img src='img/gal/gen002.jpg' width='100%' height='100%' /><div class='st' style='display:none' style='display: none;'></div></div> </div><div class='wrap-element big'> <div class='elementsel custom  position-3' data-type='3' style='opacity: 0.4;'><img src='img/gal/gen003.jpg' width='100%' height='100%' /> <div class='st' style='display:none' ></div> </div></div></div> <div class='group'> <div class='wrap-element'><div class='elementsel custom position-1' data-type='4' style='opacity: 0.4;'> <img src='img/gal/gen004.jpg' width='100%' height='100%' /><div class='st' style='display:none'></div> </div></div><div class='wrap-element center'> <div class='elementsel custom position-2' data-type='5' style='opacity: 0.4;'> <img src='img/gal/gen005.jpg' width='100%' height='100%' />  <div class='st' style='display:none'></div></div> </div><div class='wrap-element big'> <div class='elementsel custom  position-3' data-type='6' style='opacity: 0.4;'> <img src='img/gal/gen006.jpg' width='100%' height='100%' /><div class='st' style='display:none'></div></div>  </div>  </div><div class='group'> <div class='wrap-element'><div class='elementsel custom  position-1' data-type='7' style='opacity: 0.4;'> <img src='img/gal/gen007.jpg' width='100%' height='100%' /> <div class='st' style='display:none'></div></div> </div>  <div class='wrap-element center'><div class='elementsel custom  position-2' data-type='8' style='opacity: 0.4;'> <img src='img/gal/gen008.jpg' width='100%'  height='100%'/> <div class='st' style='display:none'></div></div>  </div><div class='wrap-element big'> <div class='elementsel custom position-3' data-type='9' style='opacity: 0.4;'><img src='img/gal/gen009.jpg' width='100%' height='100%' /> <div class='st' style='display:none'></div></div>  </div></div> <div class='group'><div class='wrap-element'> <div class='elementsel custom  position-1' data-type='10' style='opacity: 0.4;'> <img src='img/gal/gen010.jpg' width='100%' height='100%' /><div class='st' style='display:none'></div></div> </div></div>"); 
	}
var countryData = [
    {"Id": 1, "Name": "Bolivia", "Region": 2},
    {"Id": 2, "Name": "Chile", "Region": 2},
    {"Id": 3, "Name": "Colombia", "Region": 2},
    {"Id": 4, "Name": "Costa Rica", "Region": 1},
    {"Id": 5, "Name": "Ecuador", "Region": 2},
    {"Id": 6, "Name": "El Salvador", "Region": 1},
    {"Id": 7, "Name": "Guatemala", "Region": 1},
    {"Id": 8, "Name": "Honduras", "Region": 1},
    {"Id": 9, "Name": "Nicaragua", "Region": 1},
    {"Id": 10, "Name": "Panamá", "Region": 1},
    {"Id": 11, "Name": "Paraguay", "Region": 2},
    {"Id": 12, "Name": "Perú", "Region": 2},
    {"Id": 13, "Name": "Puerto Rico", "Region": 1},
    {"Id": 14, "Name": "República Dominicana", "Region": 1},
    {"Id": 15, "Name": "Uruguay", "Region": 2},
    {"Id": 16, "Name": "Venezuela", "Region": 2}
];
var messageData = [
    {"id": 1, "text": "It is designed to mimic the MVC pattern of frameworks like Ruby on Rails", "tipo": 1},
    {"id": 2, "text": "It is designed to mimic the MVC pattern of frameworks like Ruby on Rails", "tipo": 2},
    {"id": 3, "text": "It is designed to mimic the MVC pattern of frameworks like Ruby on Rails", "tipo": 3},
    {"id": 4, "text": "It is designed to mimic the MVC pattern of frameworks like Ruby on Rails", "tipo": 5},
    {"id": 5, "text": "It is designed to mimic the MVC pattern of frameworks like Ruby on Rails", "tipo": 2},
    {"id": 6, "text": "It is designed to mimic the MVC pattern of frameworks like Ruby on Rails", "tipo": 8},
    {"id": 7, "text": "It is designed to mimic the MVC pattern of frameworks like Ruby on Rails", "tipo": 3},
    {"id": 8, "text": "It is designed to mimic the MVC pattern of frameworks like Ruby on Rails", "tipo": 7},
    {"id": 9, "text": "It is designed to mimic the MVC pattern of frameworks like Ruby on Rails", "tipo": 2},
    {"id": 10, "text": "It is designed to mimic the MVC pattern of frameworks like Ruby on Rails", "tipo": 6},
    {"id": 11, "text": "It is designed to mimic the MVC pattern of frameworks like Ruby on Rails", "tipo": 2},
    {"id": 12, "text": "It is designed to mimic the MVC pattern of frameworks like Ruby on Rails", "tipo": 6}
];

var selectedImg;
var userData = {};
var examplesCustom;
function resize() {
    if ($('body').hasClass('welcome')) {
        $('.wrapper').height($(window).height());
    }
    if ($('body').hasClass('rules')) {
        $('.wrap-overlay,.overlay').width($('#sections').width()).height($('#sections').height());
        $('.fullscreen').width($('#sections').width()).height($('#sections').height());
//        $('.fullscreen embed').height($('#sections').height());
        var limitX = $(window).width() - $('.examples').width();
        if (parseInt($('.examples').css('left')) < limitX) {
            $('.examples').stop().animate({
                left: limitX
            })
        }
        if ($(window).height() > 780) {
            $('body').removeClass('standard-height')
        } else {
            $('body').addClass('standard-height');
        }
    }
}

function showOverlay(elm) {
    var isIe = $('html').hasClass('lt-ie9');
    var wWin = $('.app').width(),
        hWin = $('.app').height();
    var showOverlayCb = function () {
        if (isIe) {
            elm.show();
        } else {
            elm.fadeIn('fast');
        }
    }

    if ($('.window:visible').length == 0) {
        if (isIe) {
            $('.wrap-overlay').show()
            showOverlayCb();
        } else {
            $('.wrap-overlay').fadeIn('fast', showOverlayCb);
        }
    }
    else {
        if (isIe) {
            $('.window:visible').hide();
        } else {
            $('.window:visible').fadeOut('fast');
        }
        showOverlayCb();
    }
    if (elm.hasClass('registration')) {

        $('.form-registration .country').val($.cookie('countryname'));
        $('.form-registration .country-id').val($.cookie('countrysel'));
    }
    if (elm.hasClass('share')) {

        $('#share-wrapper .text').text($('.form-registration .message-text').val())
        $('#share-wrapper').removeClass().addClass('model-' + $('.form-registration .message-type').val());

    }
    if (elm.hasClass('video')) {
        var video = '<object width="960" height="503">' +
            '<param name="movie" value="//www.youtube.com/v/OAWW0amAsVU?hl=es_ES&amp;version=3"></param>' +
            '<param name="allowFullScreen" value="true"></param>' +
            '<param name="allowscriptaccess" value="always"></param>' +
            '<param name="wmode" value="opaque"></param>' +
            '<embed src="//www.youtube.com/v/OAWW0amAsVU?hl=es_ES&amp;version=3" type="application/x-shockwave-flash" width="960" height="503" allowscriptaccess="always" allowfullscreen="true" wmode="opaque"></embed>' +
            '</object>';
        $('.object-video').html(video);

        $('#share-wrapper .text').text($('.form-registration .message-text').val())
        $('#share-wrapper').removeClass().addClass('model-' + $('.form-registration .message-type').val());

    }

}
function closeOverlay() {
    $('.object-video').html('');
    $('.wrap-overlay .share').removeClass('no-custom');
    $('.wrap-overlay .window').fadeOut();
    $('.wrap-overlay').fadeOut();
}
function resetRegistrationForm() {
    $('.form-registration').validate().resetForm();
    $('.form-registration')[0].reset();
}

function setActions() {
    var parameStep = 300;
    $('#sections section.video a.video').on('click', function () {
        showOverlay($('.wrap-overlay .video'));
		
    });

    $('.wrap-overlay .video .close').on('click', function () {
        closeOverlay();
    });

    $('.elements .create').on('click', function () {
		$('.examples').html("");
        $('.examples').html(examplesCustom);
        $('.examples .element').fadeTo('fast', 0.4);
        $('.form-message #your-message').val('');
        $('.wrap-examples .search').val('');
       // $('.wrap-examples .message').addClass('message-select');
	   $('.mensajetop2').show();
	    
        $('.create .header .elements').hide();
        $('.create .header .form').show();
    });

    $('.navigation .prev').on('click', function () {
        if (parseInt($('.examples').css('left')) + parameStep < 0) {
            $('.examples').stop().animate({
                left: parseInt($('.examples').css('left')) + parameStep
            })
        } else {
            $('.examples').stop().animate({
                left: 0
            })
        }
    });

    $('.navigation .next').on('click', function () {
        var limitX = $(window).width() - $('.examples').width();
        if ((parseInt($('.examples').css('left')) - parameStep) >= limitX) {
            $('.examples').stop().animate({
                left: parseInt($('.examples').css('left')) - parameStep
            })
        } else {
            $('.examples').stop().animate({
                left: limitX
            })
        }
    });

    $('.examples').on('click', '.element',function () {
		$(this).attr("id","elementsel");
		//generarimg();
        if ($(this).hasClass('custom')) {
            //console.log(userId); //@angel
            if (userId == "") { //@angel
                var rule = this;
                $.post("/register", {id: userId, 'message-text': $('.text', this).text(), 'message-ttype': $(this).data('type')}, function (data) {
                    if (data.result) {
                        $('.wrap-overlay .share .text').text($('.text', rule).text());
                        $('.wrap-overlay .share').addClass('no-custom')
                        showOverlay($('.wrap-overlay .share'));
                    } else {
                        $('.form-registration .message-type').val($(rule).data('type'));
                        $('.form-registration .message-text').val($('.form-message #your-message').val());
                        showOverlay($('.wrap-overlay .login'));
                    }
                });
            } else {
        $('.form-registration .message-type').val($(this).data('type'));
        $('.form-registration .message-text').val($('.form-message #your-message').val());
        showOverlay($('.wrap-overlay .login'));
            }
        } else {
            $('.wrap-overlay .share .text').text($('.text', this).text());
            $('.wrap-overlay .share').addClass('no-custom')
            showOverlay($('.wrap-overlay .share'));
        }
    }).on('mouseover', '.element',
		function () {
		    $(this).children(".share").on('mouseover',function(){
			$(this).css("opacity","1");
			});
        $(this).stop().fadeTo('fast', 1);
		$(this).children(".share").fadeIn(350);
		$(this).children(".st").fadeIn(350);
    }).on('mouseout', '.element', function () {
        $(this).stop().fadeTo('fast', 0.4);
		$(this).children(".share").fadeOut(350);
		$(this).children(".st").fadeOut(350);
    });
    $('.examples .element').fadeTo('fast', 0.4);

    $('.login-facebook .connect').on('click', function () {
		FB.login(getLoginStatus,{ scope: ' user_likes, publish_actions, offline_access,publish_stream,email'});
        function getLoginStatus(response) {
            if (response.status === 'connected') {
                loadFacebookUserData();
				
            } else {
                FB.login(function (response) {
                    if (response.authResponse) {
                        loadFacebookUserData();
                    }
                });
            }
        };
    });
    $('.login-email .continue').on('click', function () {
        if ($('.login-action').valid()) {
//            $.post(LOGIN_VALIDATE_PATH, $('.login-action').serialize(), function (data) {
//                showOverlay($('.wrap-overlay .registration'));
//            });


            $.post('/login', { fid: 0, email: $('.login-email .email').val() }, function (data) { //@angel
              
                if (data.val) {
                    $('.wrap-overlay .share .text').text($('.form-registration .message-text').val());
                    $('.wrap-overlay .share-wrapper').addClass('model-' + $('.form-registration .message-type').val());
                    showOverlay($('.wrap-overlay .share'));
                } else {
                    $('.userdata').addClass('facebook');
                    $('.form-registration .first-name').val(response.first_name);
                    $('.form-registration .last-name').val(response.last_name);
                    $('.form-registration .fid').val(response.id);
                    $('.userdata .photo').html(avatar);
                    $('.userdata .name').text(response.name);
                    showOverlay($('.wrap-overlay .registration'));
                }

            });


            $('.userdata .name').text($('.login-email .email').val());
            $('.form-registration .email').val($('.login-email .email').val());
            $('.userdata').removeClass('facebook');
            showOverlay($('.wrap-overlay .registration'));
        }
    });

    $('.registration-form .actions .cancel').on('click', function () {
        $('.login .email').val('');
        resetRegistrationForm();
        showOverlay($('.wrap-overlay .login'));
    });


    $('.registration-form .actions .continue').on('click', function () {
        if ($('.form-registration').valid()) {
            $.post("/register", $('.form-registration').serialize(), function (data) {
                showOverlay($('.wrap-overlay .share'));
                userId = data.id;
				//console.log("usuario id "+userId);
            },'json');
            
        }
    });

    $('.social .facebook').on('click', function () {

        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
        FB.ui({
                method: 'stream.publish',
                link: 'http://aandresortiz.cloudapp.net/',
                picture: 'http://aandresortiz.cloudapp.net/img/bg/3.jpg',
                name: "Kotex pasa la voz",
                caption: '',
                description: 'Es hora de cambiar el “no puedo” por el “puedo hacer eso y más!” Ahora crea tus propias reglas y empieza a vivirlas! #PasaLaVoz! La decisión está en ti.'
            },
            function (response) {
                if (response && response.post_id) {
                } else {
                }
            });
            } else {
                FB.login(function (response) {
                    if (response.authResponse) {
                        $('.social .facebook').trigger('click');
                    }
                });
            }
        });
    });

    $('.social .twitter').on('click', function () {
        var message = encodeURIComponent('Es hora de cambiar el "no puedo" por el "puedo eso y más" Crea tus reglas y vívelas!  #PasaLaVoz   http://pasa-lavoz.com');
		
        window.open("http://twitter.com/share?text=" + message );
    });

    $('.social .pinterest').on('click', function () {
        $('.social .pinterest img').trigger('click');
    });

    $('.thanks .create').on('click', function () {
        closeOverlay();
    });
    $('.examples').on('click', '.element .share', function (evt) {
//        evt.stopPropagation();
//        $('.wrap-overlay .share').addClass('no-custom')
//        showOverlay($('.wrap-overlay .share'));
    });

    $('.no-registration').on('click', function () {
        closeOverlay();
    });

    $('.no-share').on('click', function () {
        if ($(this).parent().hasClass('no-custom')) {
            closeOverlay();
        } else {
        showOverlay($('.wrap-overlay .thanks'));
        }
    });

    $('.form-message #your-message').on('propertychange input paste', function () {
        if ($('.form-message #your-message').val().length > 120) {
            $('.form-message #your-message').val($('.examples .text:eq(0)').text());
            return false;
        }
        $('.examples .text').text($('.form-message #your-message').val());
    });

    $('.wrap-examples .message .search').on('propertychange input paste', function () {
        if ($('.wrap-examples .message .search').val().length > 2) {
            $.post('/getrules', {page: 1, text: $('.wrap-examples .message .search').val(), id: 0}, function (result) {
                messageData = result;
                setMessages();
            });
        }
    });

}
function compartir(urlimg){
	FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
        FB.ui({
                method: 'stream.publish',
                link: 'http://aandresortiz.cloudapp.net/',
                picture: 'http://aandresortiz.cloudapp.net/'+urlimg,
                name: "Kotex pasa la voz",
                caption: '',
                description: 'Es hora de cambiar el “no puedo” por el “puedo hacer eso y más!” Ahora crea tus propias reglas y empieza a vivirlas! #PasaLaVoz! La decisión está en ti.'
            },
            function (response) {
                if (response && response.post_id) {
                } else {
                }
            });
            } else {
                FB.login(function (response) {
                    if (response.authResponse) {
                        $('.social .facebook').trigger('click');
                    }
                });
            }
        });
	};
function setMessages() {

    var elementTemp, elementWrapTemp, groupTemp, posTemp;

    examplesCustom = $('.examples').html();

    //$('.examples').html('');

    for (var idx = 0; idx < messageData.length; idx++) {
        posTemp = (idx % 3) + 1;
        if (posTemp == 1) {
            groupTemp = $('<div>').addClass('group');
        }
        elementWrapTemp = $('<div>').addClass('wrap-element');
        elementTemp = $('<div>').addClass('element position-' + posTemp).addClass('model-' + messageData[idx]['tipo']).data('type', messageData[idx]['tipo']);
        elementTemp.append($('<div>').addClass('text').text(messageData[idx]['text']));
        elementTemp.append($('<div>').addClass('share'));
        elementWrapTemp.append(elementTemp);
        groupTemp.append(elementWrapTemp);
        if (posTemp == 3) {
            $('.examples').append(groupTemp);
        }
    }

    $('.examples .element').fadeTo('fast', 0.4);

    $('.examples .position-2').parent().addClass('center');
    $('.examples .position-3').parent().addClass('big');
}

function loadFacebookUserData() {
    FB.api('/me', function (response) {
        var avatar = $('<img>').attr({
            'src': 'http://graph.facebook.com/' + response.username + '/picture',
            'width': 65,
            'height': 65
        });
       /* $.post('/datos', {fid: response.id, email: 0}, function (data) {
            if (data.val) {
                $('.wrap-overlay .share .text').text($('.form-registration .message-text').val());
                $('.wrap-overlay .share-wrapper').addClass('model-' + $('.form-registration .message-type').val());
                showOverlay($('.wrap-overlay .share'));
            } else {*/
        $('.userdata').addClass('facebook');
        $('.form-registration .first-name').val(response.first_name);
        $('.form-registration .last-name').val(response.last_name);
                $('.form-registration .fid').val(response.id);
        $('.userdata .photo').html(avatar);
        $('.userdata .name').text(response.name);
        showOverlay($('.wrap-overlay .registration'));
            //}

        //});
    });
}

function validateForms() {
    if ($('body').hasClass('rules')) {
        jQuery.validator.messages.required = jQuery.validator.messages.digits = jQuery.validator.messages.email = jQuery.validator.messages.maxlength = jQuery.validator.messages.minlength = "";
        $('.login-action').validate();
        $('.form-registration').validate();
    }
}

function setCombo(data) {

//    data = countryData;

    var selectData = [];
    var tempRecord;

    for (var idx = 0; idx < data.length; idx++) {
        tempRecord = {id: data[idx].Id, text: data[idx].Name, region: data[idx].Region};
        selectData.push(tempRecord);
    }

    $(".country").width(248).height(30).select2({minimumResultsForSearch: -1, placeholder: "Elige tu país",
        allowClear: true,
        data: selectData
    }).on('change', function (result) {
            $.cookie('countrysel', result.val);
            $.cookie('countryname', selectData[result.val - 1]['text']);
            $.cookie('regionsel', selectData[result.val - 1]['region']);
            location = "pasalavoz";
        });
}

function temporal() {

}
function restablecer(){
	$(".custom").removeAttr("id");
	}
function generarimg(){
html2canvas([document.getElementById('elementsel')], {
    onrendered: function(canvas) {
       document.body.appendChild(canvas);
       var data = canvas.toDataURL('image/png');
       // REMITIR CODIGO DATA PARA EL ENVIO DE IMAGEN GENERADA
	   
    }
});
}

function menuinicio(){
	var  pathne = window.location.hash;
  var difo= pathne.split("/");
   if(difo[1]=="Video"){
	   $(".inicio").hide();

	  }
	  if( difo[1]==" " ){
	   $(".inicio").hide();
	   
	  }
	   if(difo[1]=="Regla"){
	 $(".inicio").fadeIn(350); 
	
	}
}
$(document).on('ready', function () {

 /*if($.browser.version == '8.0')
    {   
	 $('.model-1').css({'background':'transparent','zIndex':2,'position':'relative'});
	 $('.model-1').css({'overflow':'hidden','position':'relative'}); 
	var containerWidth = $('.model-1').innerWidth();
	var bgimgurl = $('.model-1').css('backgroundImage');
	
	var ms = bgimgurl.split("(");
	console.log(bgimgurl + " -"+ms[1]);
	var ms2 = ms[1].split(")");
	
	var img = $('<img src="'+ms2[0]+'" width="100%" />').css({'position':'absolute','left':0,'top':0,'zIndex':1});
	
	$('.model-1').css({'background':'transparent'}).append(img);
   }
	
*/

		
$('input[type=text]').focus(function(){
		if ($(this).val()==$(this).attr('placeholder')){
			$(this).val('');
			
		}
	}).blur(function(){
		if($(this).val()==''){
			$(this).val($(this).attr('placeholder'));
			
		}
	}).each(function(i, e) {
      if($(this).val()==''){
			$(this).val($(this).attr('placeholder'));
			
		}
    });
   $(".inicio").hide();
  menuinicio();
$(document).on('click ','.phrase .create',function(e){
	  menuinicio();
	});
$(document).on('click ','.inicio',function(e){	   
   $(".mensajetop2").hide();
   $(".elements").fadeIn(800);
   $(".header .form").fadeOut(1200,function(){
	   estatico();
	   });
	 menuinicio(); 
	$(".message").removeClass("message-select");
	 $(".inicio").hide();  
	});

$(document).on('mouseover mouseenter ','.elementsel',function(e){
	$(this).css({'opacity':'0.4'}).animate({'opacity':'1'},350);
	 $(this).children(".st").fadeIn(350);
	});
$(document).on('mouseleave','.elementsel',function(e){
	$(this).children(".st").fadeOut(350);
	$(this).css({'opacity':'1'}).animate({'opacity':'0.4'},350);
	
	});
$(document).on('click ','#galeria',function(e){
	estatico();
	});
$(document).on('click ','#svideo',function(e){
	e.preventDefault();
	$(".mensajetop2").hide();
   $(".elements").fadeIn(800);
   $(".header .form").fadeOut(1200,function(){
	   estatico();
	   });
	$('#sections section.video a.video').trigger("click");
	menuinicio(); 
	$(".message").removeClass("message-select");
});	
    if($('body').hasClass('welcome')) {

        $.get('/countries', function (data) {
            setCombo(data);
        });
//        setCombo();

    }
    if ($('body').hasClass('rules')) {

        if ($.cookie('regionsel') < 2) {
            $('body').addClass('black');
			 $('.mensajetop2').css('color',"#fff");
			 $('.mensajetop').css('color',"#fff");
        }

        $('#sections').ascensor({
            AscensorName: 'ascensor',
            ChildType: 'section',
            AscensorFloorName: 'Video | Regla',
            Time: 500,
            WindowsOn: 1,
            Easing: 'easeInOutQuad',
            KeyNavigation: false,
            Queued: false
        });

        var dimWidth = Math.floor($('.examples .element').length / 3) * 725;
        $('.examples').width(dimWidth);

        $('.examples .position-2').parent().addClass('center');
        $('.examples .position-3').parent().addClass('big');

        $.post('/getrules', {page: 1, text: '', id: 0}, function (result) {
            messageData = result;

        setMessages();
        });


    }

    $(window).on('resize', resize).trigger('resize');

    setActions();
    validateForms();
    temporal();

$(window).resize(function(){
	var altobox   = $(window).height();
	var anchobox  = $(window).width();
	var altocaja  = $(".wrap-overlay2 .window").outerHeight();
	var anchocaja = $(".wrap-overlay2 .window").outerWidth();
	var ntop = ((altobox-altocaja)/2);
	var nleft = (anchobox-anchocaja)/2; 
	$(".wrap-overlay2 .window").css({ 
			position:'fixed',
			top: ntop,
			left: nleft
			}); 
});
$(window).resize();
/*$(document).on('mouseenter','.st',function(e){
	$(this).show();
	});*/

$(document).on('click',".wrap-overlay2 .cerrar",function(){
	    $(".wrap-overlay2").fadeOut(350);
	});
$(document).on('click','.facebook2',function(e){
	var urlim = $(this).parent("div").parent("div").children(".share-wrapper").children("img").attr("src");
	compartir(urlim);
	 });
	 
$(document).on('click','.twitter2',function(e){	
 var mne = encodeURIComponent('Es hora de cambiar el "no puedo" por el "puedo eso y más" Crea tus reglas y vívelas!  #PasaLaVoz   http://pasa-lavoz.com');
	var miurl= "//twitter.com/share?text="+mne;
	$(this).attr("href",miurl);
	$(this).attr("target","_blank");
	});	 
/*"http://www.pinterest.com/pin/create/button/
        ?url=http%3A%2F%2Fwww.flickr.com%2Fphotos%2Fkentbrew%2F6851755809%2F
        &media=http%3A%2F%2Ffarm8.staticflickr.com%2F7027%2F6851755809_df5b2051c9_z.jpg
        &description=Next%20stop%3A%20Pinterest"
        data-pin-do="buttonPin"
        data-pin-config="above"*/

$(document).on('click','.elementsel',function(e){
		
	 	var urlimg = $(this).children("img").attr("src");
		$(".wrap-overlay2").fadeIn(350,function(){ $(".wrap-overlay2 .window").fadeIn(350)});
		
		$(".wrap-overlay2 #share-wrapper").html("<img src='"+urlimg+"' width='100%'>");
		
		
	var g=urlimg.split("/");
	var mimg=g[0]+"%2F"+g[1]+"%2F"+g[2];
	var miurl= "//www.pinterest.com/pin/create/button/?url=http%3A%2F%2Faandresortiz.cloudapp.net%2F&media=http%3A%2F%2Faandresortiz.cloudapp.net%2F"+mimg+"&description=Comparte%20la%20regla%20y%20comienza%20a%20vivirla";
	$(".wrap-overlay2").children(".cmain").children(".window").children(".social").children(".pinterest2").attr("href",miurl);
	$(".wrap-overlay2").children(".cmain").children(".window").children(".social").children(".pinterest2").attr("data-pin-do","buttonPin");
	$(".wrap-overlay2").children(".cmain").children(".window").children(".social").children(".pinterest2").attr("data-pin-config","above");
	$(".wrap-overlay2").children(".cmain").children(".window").children(".social").children(".pinterest2").attr("target","_blank");
	 });
});

	
