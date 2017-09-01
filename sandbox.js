/*
open -a Google\ Chrome --args --disable-web-security --user-data-dir


https://jsonplaceholder.typicode.com/posts/

http://restedblog.herokuapp.com/seth/api/
*/

function getAllPosts() {

	var allBlogs;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log("response = " + this.status);
        console.log(this.responseText);
        var allBlogs = JSON.parse(this.responseText);
        
        var myInnerHTML = "";

        for (i = 0; i < 10; i++) {
			var blogPost = allBlogs[i];
			
			myInnerHTML += "<article class='card'>" 
				+ "<a href='#'>" 
				+ "<div class='card-content'>"
	            + "<h2>" + blogPost.title + "</h2>"
	            + "<p>" + blogPost.body + "</p>"
	            + "<p><a href='post.html?id=" + blogPost.id + "'>Edit</a>"
	            + "<a href='delete.html?id=" + blogPost.id + "'>Delete</a>"
	            + "</div>"
	            + "<!-- .card-content -->"
	            + "</a>"
	            + "</article>";
        }
        document.getElementById("listofposts").innerHTML = myInnerHTML;
        }
	};
	xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/", true);
	xmlhttp.send();
	console.log(allBlogs);
	console.log(innerHTML);
	return allBlogs;

}

function getPost(id) {
	console.log("getBlogPost(id) starts running here");
	
   	var myPostTitle;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
        	thePost = JSON.parse(this.responseText);
        	//console.log(this.responseText);
        	//console.log("this is thePost" + thePost);
        	//console.log("thePost.title: " + thePost.title);
        	myPostTitle = thePost.title;
        	console.log(myPostTitle);
        	return myPostTitle;
    	}
	};
	xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/" + id, true);
	xmlhttp.send();
	
}


//submit form for new post
  $( "#submitform" ).submit(function( event ) {
    if ( $( "input:first" ).val() === "correct" ) {
      $( "span" ).text( "Validated..." ).show().fadeOut( 2000 );
      return;
    }
   
    $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
    event.preventDefault();
  });
