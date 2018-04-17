 



  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback......');








    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else {
      console.log('The person is not logged into your app or we are unable to tell.')
      
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }


  function Deslogear(){

    FB.logout(function(response) {
   console.log('Deslogeado de facebook........!!!')
});

  }


   function logface(){


      FB.login(function(response){
        


              FB.api('/me', function(response) {

                console.log('Facebook...',response)


                $.post( "../../loginxfacebook/", { id: response.id,name: response.name })
            .done(function( data ) {


              console.log('loginxfacebook',data)

              console.log('response,',response)


                    /* make the API call */
              FB.api(
                  "/"+response.id+"/picture?redirect=false",
                  function (response) {

                    console.log('gsgsgs',response)
                    if (response && !response.error) {


                        console.log('response..',response)
                      
                        $.post( "../../subirimgprofile/", { img: response.data.url})
                      .done(function( data ) {

                      })



                    }
                  }
              );

              

    

              //window.location='/'

              // if(estado=='Bienvenido'){

              //  window.location='/detallechatpc/1/'+producto
              // }
              
            });



               
              });

            




      });
};




  window.fbAsyncInit = function() {
  FB.init({
    appId      : '1913601308895607',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.8' // use graph api version 2.8
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });









  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {


      console.log('Successful login for: ' + response.id);

      /* make the API call */
    FB.api("/10212486937426509/picture?redirect=false",
        function (data) {

          console.log('picture',data)
          if (data && !data.error) {
            console.log('im',data.data.url)
          }
        }
    );




      // document.getElementById('status').innerHTML =
      //   'Thanks for logging in, ' + response.name + '!';
    });
  }

