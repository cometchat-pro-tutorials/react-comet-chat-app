# WEB CHAT APP WITH REACTJS EXAMPLES

This example shows how to build a group chat with Javascript and React. 

SCREENSHOTS

<img align="center" src="https://raw.githubusercontent.com/samie820/react-cometchat-app/master/src/screenshots/chat-screen.png" style="width:75%;"/>

<img align="center" src="https://raw.githubusercontent.com/samie820/react-cometchat-app/master/src/screenshots/login.png" style="width:75%;"/>


Jump straight into the code or read the accompanying step-by-step guide here on our blog.

## Technology
This demo uses:

* CometChat Pro JS SDK
* Javascript
* ReactJS

## Running the demo locally
* Download the repository [here](https://github.com/samie820/react-cometchat-app.git) or by running `git clone https://github.com/samie820/react-cometchat-app.git`
* Run the command `npm install or yarn`
* Add your `appId` and `apiKey` to `/src/lib/chat.js`
* Add your GUID to the constructor function in `/src/components/Groupchat.js` like below:
```javascript
      constructor(props) {
    super(props);
    ...
    this.GUID = ""; // ADD IT HERE
  }
```
* Then run `npm start or yarn start`

## Useful links

* 📚Tutorial showing how we built this ample - Coming soon
* [CometChat homepage](https://www.cometchat.com)
* [CometChat JS SDK documentation](https://prodocs.cometchat.com/docs/js-quick-start)