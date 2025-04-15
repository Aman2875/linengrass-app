# Laundry App 

* This a react native application that enables users to book online Rental nad laundry Services .
* Implemented a proximity service for suggesting nearest Stores using
Haversine formula and increased store visibility by 90% 
* Firebase is used a database to store the User details and authentication .
* Redux toolkit is used to manage the State inside of the react native applications .
* The user can Select the service and select the nearest store for the laundry services 
* The user can also select the date and time of pickup and delivery of clothes .

# Recent Updates

* Updated all UI components with modern design elements
* Improved navigation flow between screens
* Enhanced user experience with better visual feedback
* Optimized performance for smoother app operation
* Fixed various bugs and improved error handling
* Updated Firebase configuration for better security
* Improved image loading and caching
* Enhanced cart functionality with better state management

# Tech Stack 

<div align="center">
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="Git" title="Git" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192108895-20dc3343-43e3-4a54-a90e-13a4abbc57b9.png" alt="Android Studio" title="Android Studio" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png" alt="Firebase" title="Firebase" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" title="npm" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png" alt="Redux" title="Redux" /></code>
</div>

## Key Features of this Project 

* 📌 The Users Can SignUp and Login .
* 📌 The App uses the location details of the person to find the laundry services near that area and also the price .
* 📌 The User  can provide Exact  ADDRESS , DATE and TIME for the pick and delivery of the Clothes .
* 📌 The User also can avail free delivery above a certain bill .
* 📌 Real-time order tracking and status updates
* 📌 Secure payment processing
* 📌 User profile management
* 📌 Order history and reordering functionality

# Getting Started 

  ##  Get into the project repository 
   
   ```javascript
   cd AwesomeProject01
   
   ```
   
   ## Install the dependencies 
   
   ```javascript
   npm install
   ```
   
   ## Starting  the Server 
   
   ```javascript 
   expo start 
   or
   npm start
   ```
   
   ## Starting the andriod Emulator 
   
   ```javascript 
     enter a
   ```

# Project Structure

```
├── assets/              # Images, fonts, and other static assets
├── components/          # Reusable UI components
│   ├── Carousel.js     # Image carousel component
│   ├── DressItem.js    # Item display component
│   ├── FlatCards.js    # Card display component
│   └── Services.js     # Services display component
├── navigation/          # Navigation configuration
│   └── BottomTabNavigator.js  # Bottom tab navigation
├── screens/             # App screens
│   ├── CartScreen.js   # Shopping cart screen
│   ├── HomeScreen.js   # Home screen
│   ├── LaundryScreen.js # Laundry services screen
│   ├── LoginScreen.js  # Login screen
│   ├── OrderScreen.js  # Order screen
│   ├── PickUpScreen.js # Pickup scheduling screen
│   ├── ProfileScreen.js # User profile screen
│   └── RegisterScreen.js # Registration screen
├── App.js               # Main app component
├── CartReducer.js       # Redux cart reducer
├── Firebase.js          # Firebase configuration
├── ProductReducer.js    # Redux product reducer
├── StackNavigator.js    # Stack navigation configuration
└── Store.js             # Redux store configuration
```

# Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

# License

This project is licensed under the MIT License - see the LICENSE file for details.


