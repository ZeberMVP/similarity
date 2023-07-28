# Welcome to the [similarity API](https://similarity-zeta.vercel.app/)! 

You can use this API to compare two strings and get the percentage of similarity between them. 

## How to use it

### Prerrequisites
- You must have an API platform to make requests to the API. For this tutorial, I will be using [Postman](https://www.postman.com/).
- You must have a Google account for authentication.

### Steps

1. Navigate to the [home](https://similarity-zeta.vercel.app/) page 
![home](https://github.com/ZeberMVP/similarity/assets/106594858/cb30ca60-0136-491b-bb8c-c92379a5fc97)

2. Sign in with your Google account <br> <br>

3. You will be redirected to the dashboard page and you will see the API key generator. You will need this API key. After generating one, if you click options, you can copy it. You can also revoke it and create new ones as you please. <br> <br>
![dashboard](https://github.com/ZeberMVP/similarity/assets/106594858/304e0961-1a54-4988-b49d-aa352599c070)

4. Go to your API platform and make a POST request to this URL: https://similarity-zeta.vercel.app/api/v1/similarity. Make sure to include the following header:
  - Authorization = _Your API key_ <br> <br>
![header](https://github.com/ZeberMVP/similarity/assets/106594858/9e6b6255-0bef-4804-9aaf-fe46b1421d6e) <br> <br> <br>
You should include two fields in the request: text1 and text2 <br> <br>
![example of request](https://github.com/ZeberMVP/similarity/assets/106594858/dd9a3206-3295-40da-9178-7e4f87591bdb) <br> <br>

5. Done! You should receive a response with the percentage of similarity between the two strings <br> <br>
![results](https://github.com/ZeberMVP/similarity/assets/106594858/65010206-2470-4903-b696-0db6cd3bffc3)

All credits from this app are for [Josh](https://www.youtube.com/@joshtriedcoding), whose [tutorial](https://www.youtube.com/watch?v=4lUkSgvmTYM) I followed to carry out this project. 
