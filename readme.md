# bradtraversy-projects-collection

This repo will be dedicated to all the projects I've done from Brad Traversy's tutorials. I absolutely love his stuff and the way he teaches. These projects are both from his courses and YouTube video, both of which feature a lot of overwhelming content. He goes over everything in great detail and always opens your eyes to new things. A link to his courses can be found [here](https://www.udemy.com/user/brad-traversy/).

## 1_modernJS_todotask_app

The code is fairly similar to what he gives us, I've done a slight modification to the JavaScript to minimize code duplication with es6 arrow functions.

Interesting features:

- The filter function uses CSS display to show/hide results.
- Shows how while loop is faster than clearing the innerHTML.
- Uses DOMContentLoaded to trigger task loading.

View the completed project **[here](https://w3althambition.github.io/bradtraversy-projects-collection/1_modernJS_todotask_app/index.html)**.

## 2_modernJS_loan_calc_app

Description same as the above project.

Interesting features:

- Error HTML object template injected into the dom.
- Timeout looks to remove the error by class lookup.

View the completed project **[here](https://w3althambition.github.io/bradtraversy-projects-collection/2_modernJS_loan_calc_app/index.html)**.

## 3_modernJS_number_guesser

Description same as the above project. Plus there are some interesting bits. There were two cases where I was able to come up with a better JS code. one case was on line 36, my code looks much nicer - thanks for bugging me eslint! Also, in line 85, he checked the entire string against one class, which means if you add more than one class, the result will be false, stopping the function from working correctly. I checked against the list of classes, eliminating the potential problem. I think this shows that I am starting to become a decent dev.

Interesting features:

- use of 'className += 'someName' - very interesting.
- input validation conditions.

View the completed project **[here](https://w3althambition.github.io/bradtraversy-projects-collection/3_modernJS_number_guesser/index.html)**.

## 4_modernJS_book_list_app

This project drills into how we might apply the principals of object-oriented programming into an actual project. As a whole, this further opens my eyes to the possible uses for classes, static classes, etc. Overall the application of OOP is not perfect, this isn't some amazingly well thought out application that when you look into the logic, it blows your mind away. No. It's a tutorial, but it's one of the best tutorials in this topic out there in my opinion.

Interesting features:

- Use of object-oriented programming
- ^^ what more would you need.

View the completed project **[here](https://w3althambition.github.io/bradtraversy-projects-collection/4_modernJS_book_list_app/index.html)**.

## 5. 5_modernJS_joke_gen (api doesn't work anymore)

This is a simple project which covers the xhr object to make calls the Chuck Norris jokes generator. You can make a request for any number of jokes. These jokes get injected into the page after a successful response. It's interesting how well supported this API is, but the syntax is old, much longer and confusing than using something like axios or fetch with promises.

Interesting features:

- The use of XMLHttpRequest object.

View the completed project **[here](https://w3althambition.github.io/bradtraversy-projects-collection/5_modernJS_joke_gen/index.html)**.

## 6_modernJS_github_finder

This project allows you to search github users and see their public details like company, website, location, and member since data, also stats like amount of public repos, public gists, followers and following. You can also see their public repos with statistics like stars, watchers and forks. The repo history is limited to only 5 entries.

This data is pulled from the github api, github api is limited to 100 request after which you are required to have authentication. This authentication is setup only for the local testing. The project is quite in-efficient in the fact that it makes request every time you type something, instead of having a button/key-event to make the request after the user is finished typing.

Interesting features:

- Use of github api
- Use of bootstrap
- Use of Classes.

View the completed project **[here](https://w3althambition.github.io/bradtraversy-projects-collection/6_modernJS_github_finder/index.html)**.

## 7_modernJS_track_calorie

This project allows you to add food items into a list of items with their calories when you add items the total calorie count updates automatically. You can clear all, you can add a meal, update/edit or delete a meal. It has two different form states and uses prototype functions all in one JS file. It's meant to be es5, but I've added few es6 functions and small features here and there to remove my eslint error, if it wasn't auto corrected on the first place. This project can get really confusing, as all modules are stored into one file, you can spend a lot of time just scrolling up or down to find what you are looking for. The function calls are all over the place and it's a bit like spaghetti, it's efficient, but if this was a company project and many programmers add stuff to it without knowing much about the project, this code can quickly turn into a nightmare. As a tutorial it's amazing, and the last project really shows how it should be done, so have a look.

Interesting features:

- Use of prototypes

View the completed project **[here](https://w3althambition.github.io/bradtraversy-projects-collection/7_modernJS_track_calorie/index.html)**.

## 8_modernJS_iterator_mini_app

In this microproject covers the use of es6 iterator to iterate over example profiles. You have a simple interface with the profile data and just one button which loads the next profile. Once you reach the end of the data then it resets the whole page to start all over.

Interesting features:

- Use of es6 iterator

View the completed project **[here](https://w3althambition.github.io/bradtraversy-projects-collection/8_modernJS_iterator_mini_app/index.html)**.

## 9_modernJS_easy_http

This is a small library which allows you to make get, post, put and delete request by giving you functions which do the extra work in the background. Once you load the project, open the console as this is where you will see the results from pressing the button.

Interesting features:

- Use of XMLHttpRequest object
- use of fetch with promises
- use of fetch with await async

View the completed project **[here](https://w3althambition.github.io/bradtraversy-projects-collection/9_modernJS_easy_http/index.html)**.

## 10_modernJS_micro_posts

This project is really interesting, it's the final project in the course. You can save posts and push them to a local REST API, which uses JSON file as a database server. You can make all the different request to this server just as if it was real and it will act and respond just as it was the real thing. Once you have added posts you can edit/remove them as well, it does API requests in the background. It's a bit inefficient in the fact that it makes more API requests then it should, for example, we post the data then we immediately pull it back to re-write every entry. I thought you needed something more fancy to re-write one entry but from his previous tutorials, I found that you can just change one thing with JS, and Brad should have done this feature in this project. Still, it's just a tutorial, and he covered how to do it properly elsewhere and I've noted it. Here, I should not be taking away from what he is trying to show, which is the different way to use modules. This project has opened my eyes to some interesting ways of dealing with modules which I wasn't aware of before - this has been my experience with the entire course, so I can't recommend it enough.

It uses webpack pack framework to fully utilize and showcase all the was in which you can use modules. The actual web pack starter framework for this project did not work, you download the files, you install all packages, you run the command and it fails. This prompted me to use my own webpack framework. If you went ahead and tested the project, you will find that it still doesn't work. That is because the project utilizes the JSON server to mimic a rest API. This project utilizes our es7 version of the easy-http library and it makes calls to our local JSON server. It's really, really interesting how it works. To test it out, download the project, **run npm install** in the project folder, not root folder. Once the install is done run **npn run json:server** than in another terminal run **npn run dev**. You will see the working website pop up in your browser.

Interesting features:

- Use of es6 modules
- Use of json server

View the completed project **[here](https://w3althambition.github.io/bradtraversy-projects-collection/10_modernJS_micro_posts/dist/index.html)**.

## 11_yt_sliding_signin_signup

This is a really cool little project which was inspired by Florin Pop's coding challenge which Brad posted on his YouTube channel. I followed the tutorial and we created this really cool sign-in/sign-up book like the page. This page features really cool transition animation, once you press 'sign up' and then 'sign in' each side of the page swaps and the content changes too.

Interesting features:

- The application of transition animation

View the completed project **[here](https://w3althambition.github.io/bradtraversy-projects-collection/11_yt_sliding_signin_signup/index.html)**.

View the tutorial **[here](https://www.youtube.com/watch?v=mUdo6w87rh4)**.

## 12_yt_autocomplete_app

This project allows you to look up array data with every entry in the input field and get suggestions real-time formatted in a dropdown list. You do a fetch to local JSON data on load then you filter through the array when you type US state in the input field. This project shows a slightly better version of the function which I used in my world clock project. It's really interesting to see a new and better perspective of doing something.

Interesting features:

- The use of autocomplete/suggestions

View the completed project **[here](https://w3althambition.github.io/bradtraversy-projects-collection/12_yt_autocomplete_app/index.html)**.

View the tutorial **[here](https://www.youtube.com/watch?v=1iysNUrI3lw)**.

## 13_yt_social_network_website

View the completed project **[here](https://w3althambition.github.io/bradtraversy-projects-collection/13_yt_social_network_website/dist/index.html)**.

View the tutorial **[here](https://www.youtube.com/watch?v=IFM9hbapeA0)**.

## 14_yt_vueJs

To view this project you need a live server, the local preview doesn't work. Install live-server using npm install or the extension with the same name in your code editor. To preview open: /dist/index.html.

View the tutorial **[here](https://youtu.be/Wy9q22isx3U)**.

## 15_npm_spotlight

There is no UI preview for this project. Please see each javascript file for references.

View the tutorial **[here](https://youtu.be/ON3I5N3PZKs)**.

## 16_image_slider

View the completed project **[here](https://w3althambition.github.io/bradtraversy-projects-collection/16_image_slider/index.html)**.

View the tutorial **[here](https://youtu.be/7ZO2RTMNSAY)**.

## 17_netflix_landing

View the completed project **[here](https://w3althambition.github.io/bradtraversy-projects-collection/17_netflix_landing/index.html)**.

View the tutorial **[here](https://youtu.be/P7t13SGytRk)**.

## 18_vuex

View the completed project -- you can't view it here. To view it, you need to download, then run build and then open the index.html in the dist folder with live-server.

View the tutorial **[here](https://youtu.be/5lVQgZzLMHc)**.

## 19_TypeScript

View the tutorial **[here](https://youtu.be/rAy_3SIqT-E)**.

## 20_product_landing_page_netlify

View the tutorial **[here](https://www.youtube.com/watch?v=61R5kn_kYwY)**.
