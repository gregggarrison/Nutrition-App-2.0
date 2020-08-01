Nutrition App	

This is a tool where a user can (in some cases eventually) write their own blogs, create/share recipes, and track/plan their meals.

About:

It has a food search / meal plan option where you can type in the food/ingredient of your choice and returns an image as well as a table row of pedigree info about said query.  You can click on the image then it expands the image and also renders a nutritional label bearing the nutrient values.  In the table you have the ability to manipulate the quantity consumed and the corresponding values change inline with change.  From there a user has an option to clear the search and start over or to save it to their meals.

Below the meal search/results table is another table showing all of current days saved meals which can also be deleted.  There is another link to “All meals” which is a table that is sortable by the column headers.

There is also Profile route that renders all of the user’s pedigree info such as: username, age, sex, height, and weight that is editable as well.  The Profile page also provides nutritional label snapshot reflecting totals for the day as well as a pie chart indicating the source of calories for the day (fat, protein, or carbs).  

The app has full auth and does not offer the above mentioned features unless they are logged in.  A user also has the option to sign up by clicking the bottom of the login page.  The end game for this is that a user can enter and track their weight as well as their personalized nutrient intake (ie 2,000 calories a day) and be able to plan meals and track their status in real time.  



Resources:

I used the Nutrionix API whose documentation can be found  at https://developer.nutritionix.com/docs/v2.

Front-end
npx create-react-app 
For routing  I imported { Route, withRouter } from 'react-router-dom’

Back-end
I used Ruby on Rails for the backend



Gregg Garrison
https://github.com/gregggarrison

