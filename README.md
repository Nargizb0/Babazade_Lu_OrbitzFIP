# Babazade_Lu_OrbitzFIPtest
This is the repositiory for our final project of Interactive Media Design term 2, a website for my rebrand of the Orbitz soda brand.
# Orbitz Wesbite - FIP
Welcome to Orbitz! 

## Installation
No installation required

## Usage
Clone the repo, open up the index file in your preferred browser & view the website!

## Contributing
Fork it! Create your feature branch: git checkout -b my-new-feature 
Commit your changes: git commit -am 'Add some feature' 
Push to the branch: git push origin my-new-feature 
Submit a pull request

# History
10 April, 2025

# Credits
Zeran Lu
Babazade Nargiz
All product Images created in Cinema 4D

# License 
MIT

# JAVASCRIPT PAPER PLAN

Babazade_Lu_javascript_paperplan

# Defining Variables
I started my Javascript plan with getting myself to understand exactly what variables I will be interacting with constants I need to define. I took some experience from my music mixer build where I actively avoided using data arrays and stuck to straight forward constants for every single interactive child. I decided to instead attempt to define my promotional boxes in a data array this time. 

This actually ended up being extremely beneficial for me because around commit 15 or 16, I had to add more content into my promotional boxes and the data arrays made it extremely easy to do so. The data arrays can be seen at the beginning of my javascript from lines 6-35.
Then I had to define a constant for the actual pop up promotional box itself with the content from my data array. This can be seen on line 36. This constant is crucial for a later function that recalls this constant so it can put the content from the data array into this popup box. 

# Defining Functions
From the variables that I defined, I now have to create some functions so that this generated popup box can receive and iterate the correct data. To do this I broke down the function into some subsidiary steps: 
1. The function must create a box called promoBox.
2. The box is going to have a class attached to it to apply styling and dictate content
3. The box is going to get appended to the html document and show up properly like a lightbox would. 

Firstly, I had to create a function that can create this promoBox to properly append my data to. This function and the definition for this temporary box is on lines 45-46.
In order to get the correct data from the data array, I’ve organized a data-set in my HTML called “data-promo” and then I’ve set up template literals to iterate through each of the data array objects and generate the data that’s associated with the correct id. This process is done in the JS lines 47-56

Lastly, I need to append the correctly generated promotional box directly onto the HTML document with a simple line of code on 58.

# Defining Event Listeners
The event that I am looking for is when a user “clicks” on one of the promotional product boxes on my website. Lucky for me, this is a very easily definable event to explain and write out into JS. I need to make sure two things happen: 

1. The clicked on dataset is correctly linked with the associated data array
2. When the event listener is activated, the correctly defined const (promoObj) can find the correctly linked data and display it

I used a forEach loop to loop through my data array until the correct dataset id can generate the information onto my previously defined promoObj. This loop is coded on lines 67-79.

# Exit Functions

Unfortunately, my plan did not account for how my popup boxes can have a way to exit. Fortunately for me, within my innerHTMl function that is appending data from my data array, I can add a button tag with very little difficulty. This is on line 54.

Furthermore, I also added a key function to allow an exit function similar to the drum kit keyboard build. Except instead of the functions calling for an audio cue, it will now detect the existence of an already opened promotional box. I’m going to treat this state of the promotional box already being open as a separate state (like being dragged) and I’m going to define this opened state as “openBox”. This definition is on line 82. Thus, when the escape key is pressed, it will look for an opened box and then remove the status of being an opened box from the promotional box, effectively “hiding” from the user. 

# IIFE

Lastly, I wrapped all of my code in an IIFE for safety as I do have the code running on two separate pages. Index.html and products.html. I wanted to contain all of my javascript logic as neatly and succinctly as possible so I kept it wrapped up in a bubble (similar to wrapping content in a div). 
