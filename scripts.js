/*Structure of data
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
*/

//Get Posts
function getAllPostsJQuery() {

  $.getJSON( "http://restedblog.herokuapp.com/seth/api/", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<article class='card'><div class='card-content'>"
      	+ "<h2>" + val.title + "</h2>"
      	+ "<p class='timestamp'>" + val.timestamp + "</p>"
      	+ "<p>" + val.text + "</p><p><a href='post.html?id=" + val.id + "'>edit</a></div></article>" );
      
      //console.log(key + val.title);
      console.log(JSON.stringify(val));
    });
 
    $( "<section/>", {
      "class": "cards",
      html: items.join( "" )
    }).appendTo( "#main-area" );
  });


}

function getPostJQuery() {

	//	get ID parameter from URL
	//console.log("getPostIdFromUrl starts running here");
	postId = null;
	var arr = document.URL.match(/id=([0-9]+)/)
	
	if (arr != null) {
		postId = arr[1];
		//console.log("the post ID in the URL = " + postId);
		
		$.getJSON( "http://restedblog.herokuapp.com/seth/api/" + postId, function( data ) {
	    var items = [];
	    myPostTitle = data.title;
	    myPostBody = data.text;
	    myPostId = data.id;
	    myPostTimestamp = data.timestamp;
	    //console.log(myPostId);
	 


	    $("#posttitle").val(myPostTitle);
	    $("#postbody").html(myPostBody);
	    $("#postid").val(myPostId);
	    $("#posttimestamp").val(myPostTimestamp);

	    //hide the new post button	
	    $("#submitnewpostbutton").hide();
	//}
  		});
  	} else {
  		//hide the edit post button	
	    $("#editpostbutton").hide();
	    $("#deletepostlink").hide();
  	}

}


//Delete posts
function deletePost(id) {

}

function deleteAllPosts() {

}





//utilities
function getPostIdFromUrl() {
	console.log("getPostIdFromUrl starts running here");
	var arr = document.URL.match(/id=([0-9]+)/)
	postId = arr[1];
	console.log("the post ID in the URL = " + postId);
	return postId;
}

function getSampleData() {

}
