# ForkiFy App
## 1. USER STORIES

**User story** : Description of the application's functionality from the user's perspective
**Common format** : As a **[type of use]**, I want **[an action]** so that **[a benefit]**

**As a User I want to ...**

* I want to search for recipe, so that I can find new ideas for meals
* I want to be able to update the number of servings, so that i can cook a meal for different number of people

* I want to bookmark recipes, so that i can review them later

* I want to be able to create my own recipes, so that I have them all organized in the same app

* I want to be able to ***see my bookmark and own reciped when I leave the app and come back later***, so that I can close the app safely after cooking

## 2. Features

* Search for recipes 
    * Search functionnality : input field to send request to API with searched keywords
    * Display result with pagination
    * Display recipe with cooking time, serving and ingredients

* Update the number of servings
    * Change servings functionnality: update all ingredients according to current number of servings
* Bookmark recipes
    * Bookmarking functionnality: display list of all bookmarked recipes
* Create my own  recipes
    * User can upload own recipes
    * User recipes will automaticly be bookmarked
    * User can only see their own recipes, not recipes from other users
* See my bokkmarks and own recipes when I leave the app and come back later
    * Store bookmark data in the browser using local storage
    * On page load, read save bookmarks from local storage and display    

### 3. FLOWCHART ( PART 1)