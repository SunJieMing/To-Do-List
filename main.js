function strikeIt(el){ 
el.parentNode.style.textDecoration = (el.checked===true) ? "line-through" : "none"; 
} 

// $(document).ready(function() {

// $.ajax('https://api.parse.com/1/classes/NewsFeed', 
//   {
//     beforeSend: function(request) {
//     request.setRequestHeader('X-Parse-Application-Id', '0DDdN3ui5jFpirwNpiXBmlJvyeWnS5hGvLxnKPNt');
//     request.setRequestHeader('X-Parse-REST-API-Key', 'uB1JJidhA791LlaYAjTfH60lOoUdqm7tgBUm09aY');
//   }
//   }
// ).done(function(response) {

//   var newsFeed = $('.newsfeed');
//   $.each( response.results, function(i, val){
//   var titleContainer = '<h1>' + val.title + '</h1>';
//   var bodyContainer = '<p>' + val.body + '</p>';

//     newsFeed.append(titleContainer, bodyContainer);
//     });
//  });

// });