# The BOOK NOOK
The Book Nook is a React single page application, which covers SoftUni's React course materials. The app gives space to readers to share their book conquests by providing title, author, photo of the book cover, summary, genre, favourite quote, year of publication, number of pages and, if any, tropes of the book. 

The app is accessible to guests and authenticated users. 


# Authenticated user
Upon arrival, the user will be greeted in the header. 

Users have access to all of the app with the only exception of editing posts, which is reserved only for the owner of the given post. Users can comment on posts, they can create new book recommendations and they can log out. The session is kept in Local Storage, which gives the user the freedom to refresh and keep the state, which gives a good UX. Otherwise, when refreshed the authentication token will be lost and the user will be forced to log in again.

However, we are using the state as a SST, because React does not interact well with Local Storage and will not be updated if a change occurs. 


# Guests
Guests have access the Home page, they can browse the Catalogue with all of the posted book recommendations up to date and they can create an account. Each book rec's details are available for them to look at. 


# Design
The app is created using Bootstrap and with its colour scheme gives a soft and calm space for the user to interact. 

The header where the navbar is, is devided in two. On the left are shown the logo of the app (which onClick leads to the Home page), as well as the Home, Catalogue, and Create pages. On the right, if the user is logged in, is a greeting, as well as a button for Logging out, and if the user is a guest, there are options for Login and Register. 

The Catalogue page consists of all the posts made on the server, which are hold in a state and are rendered by mapping each time on loading the page, which gives the user the certainty all of the posts will be available on refresh. 

An Error page appears everytime the user tries to load a wrong URL. 

# Services
- Requester

There is a general requester function which gives ease to coding throughout the app. The function takes method, URL, and data as arguments and checks if the method is anything other than "GET" because then it needs to fill in headers and body. The response is handled and the file exports a factory function (which is a function that returns an object) which binds the request function with all of the CRUD operations. 

- AuthService

The AuthService handles all the authentication requests to the Softuni Practice Server: login, logout, register. 

- BookService

The BookService handles all of the requests about handling the books. The functionality allows to create, edit, delete a book recommendation, as well as to access one (by id) or all of the book recs on the server.

- CommentService

The CommentService handles requests about creating a comment and accessing all of the comments for a certain book rec. Since the comments and book recs are in different collections on the server, we had to use relations to connect the two. 

# Hooks
- useForm

This custom hooks handles the data of each form (login, register, create, edit and posting a comment). It returns a changeHandler, which looks for changes in the input and updates, an onSubmit function, which prevents the page from reloading, handles the input values thanks to a function which is received from the given component, and sets the values of the form to their initial value. It also returns a changeValues function, which is used in the Edit form. 

- useLocalStorage

useLocalStorage custom hook gets a key and initial value as arguments, sets the state by useState, which checks if there is already an item with the given name in the Local Storage, and if there is, we parse it and return in, if not, we return the initial value, which in our case is an empty object. Then, the value is set in the state and it is stringified in the Local Storage. We use Local Storage to give us the key only the first time and throughout the whole session of the user, we do not connect to the LS anymore. We use the state to access the key. We need high consistency and as mentioned above, single source of truth which in this case is the state. 




# React Components
The app uses controlled components. Login, Register and Create are c

// TODO: complete documentation !!!!!!!!!!!