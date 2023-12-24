# React Native eCommerce Project

Welcome to the React Native eCommerce project! This project is a mobile application built with React Native for creating an eCommerce platform.

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Folder Structure](#folder-structure)
6. [Dependencies](#dependencies)

## Introduction

This is a React Native eCommerce project aims to provide a mobile platform for buying. In the application users can browse products, add them to the cart, and make purchases. The design of the app is based on the templates provided by 5ly.co in figma. The application has several internal systems such as authentication, navigation, pagination and payment system.

<img src="./assets/project_cover.png" alt="Project Cover" width="300" height="200">

## Prerequisites

Before you begin, ensure you have the following installed:

-   Node.js
-   npm
-   React Native CLI

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Ashraf-Raneem/fively-app/tree/main
cd fively-app
npm install
```

## Usage

There are two ways to run the application

-   A simulator could be installed in the computer system, through which the app could be run.
-   Using expogo it could be used to run the application directly in a phone. (https://expo.dev/client)

Once any of the above mentioned methods are running use `npm start` to run the application

## Folder Structure

```bash
/assets
    /delivery-mode
    /fonts
    /images
/components
    /authHeader
    /banner
    /bottomDrawer
    /button
    /cartCard
    /devliveryMethods
    /dropdownDrawer
    /filter
    /forms
    /header
    /orderCard
    /products
    /promoCodeList
    /ratingbar
    /reviewCard
/data
/layout
/redux
    /address
    /cart
    /orderDetail
    /productDetail
/routes
/screens
    /auth
    /cart
    /categories
    /checkoutSuccess
    /editShippingAddress
    /favourite
    /filter
    /landing
    /order
    /orderDetails
    /productDetails
    /productList
    /profile
    /reviews
    /settings
    /shippingAddresses
/styles
```

## Dependencies

"dependencies": {
"@react-navigation/bottom-tabs": "^6.4.0",
"@react-navigation/native": "^6.0.12",
"@react-navigation/native-stack": "^6.8.0",
"@reduxjs/toolkit": "^1.9.0",
"deprecated-react-native-prop-types": "^4.0.0",
"expo": "~46.0.9",
"expo-checkbox": "^2.2.2",
"expo-font": "^10.2.0",
"expo-splash-screen": "~0.16.2",
"expo-status-bar": "~1.4.0",
"patch-package": "^6.5.0",
"react": "18.0.0",
"react-native": "0.69.9",
"react-native-bottom-drawer-view": "^1.0.3",
"react-native-credit-card-input-plus": "^0.4.4",
"react-native-ratings": "^8.1.0",
"react-native-raw-bottom-sheet": "^2.2.0",
"react-native-safe-area-context": "4.3.1",
"react-native-screens": "~3.15.0",
"react-native-simple-bottom-sheet": "^1.0.4",
"react-native-slick": "^1.6.0",
"react-redux": "^8.0.5",
"redux": "^4.2.0",
"rn-range-slider": "^2.2.2",
"twrnc": "^3.4.0"
},
"devDependencies": {
"@babel/core": "^7.12.9"
},
