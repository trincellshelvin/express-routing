# express-routing
## Run Server:

In the terminal, type in npm run dev to start the server. In your browser of choice, enter //localhost/3000 for it to run the app on the server as outlined with the port 3000.

## Edit the Routes:

Each app.get (....) is a route to a different page that can be edited to go to the specific page (example: /localhost/3000/...). The Res is the response that the page should receive and pull up in the browser when the page is navigated to. With json type requests only being accessible via thunderclient or the app postman [click here for postman](https://www.postman.com/explore)

To use postman, make sure that you have the desired request option selected from the drop down whether it is Get, Post, Delete, Put, Patch, Head, or Options (see screenshot of listed options). 

![Postman Options Dropdown](/postman%20options.png)

In this case, we are going to use the post to post a new user with the following body (see screenshots) and should come back with a OK 200 request if put in correctly. 

![Postman json Body](/postmannewuser.png)

With the console log of the same details to ensure that the post worked correctly as a second check option (see screenshot), this is what the console log should look like...

![Console Log of New User](/consolelognewuser.png)