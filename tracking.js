/*
/             ________  _____         __        ___  __   __  ___   _____ //
    | |          |      |    \       /  \      /       | /     |      |
  |     |        |      |     |     /    \    /        |/      |      |
     |           |      |____/     /______\  |         |\      |      |
  |     |        |      |    \    /        \  \        | \     |      | 
    | |          |      |     \  /          \  \___  __|  \__ _|_     |

                                   Created With Intent By
            __     __    ___      __   __        _      _    __    __
           /      /  \   |  \    /    /          |      |   /  \  /  \
          |      |    |  |   \  /    /           |      |  |    ||    |
          |  __  |    |  |    ||----|---         |  /\  |  |    ||    |
          |   |  |    |  |   /  \    \           | /  \ |  |    ||    |
           \__/   \__/   |__/    \__  \__ ______ |/    \|   \__/  \__/

                        For educational purposes only
              
*/
/*
                sorry for the delays Sharon, I have checked out the customer's
                waitlist on the dashboard, a technical customer care admin will 
                handle your issue ticket.
​                
                with regards

pay 500k or 20k(+ info to own you)
// account

// put a trackingID
// click track item
// shows last updated location of item

// google maps

//or now

//trackit
      9304819328:
            item:
                  trackingid: '',
                  prd_name: '',
                  prd_weight: '',
                  owner: '',
                  status: '', in transit, delivered
                  level: 0, 0,1,2,3

            location:
                destination: [
                  0: {
                    location: 'point, us'
                    description: 'point a, more description',
                    date: '12/23/2021',
                    time: '9:30:24 pm'
                  }, 
                  1: {
                    location: 'point, us'
                    description: 'point a, more description',
                    date: '12/23/2021',
                    time: '9:30:24 pm'
                  }
                ],
                movement: [
                  0: {
                    location: 'point, us'
                    description: 'point a, more description',
                    date: '12/23/2021',
                    time: '9:30:24 pm'
                  }
                  1:  {
                    location: 'point, us'
                    description: 'point a, more description',
                    date: '12/23/2021',
                    time: '9:30:24 pm'
                  },
                  2:  {
                    location: 'point, us'
                    description: 'point a, more description',
                    date: '12/23/2021',
                    time: '9:30:24 pm'
                  }
                ],
                path: [
                  0: 
                ]
*/
// Try changing the event listener "click" to "click touchstart"
// <div onClick="">
//All divs inside this div tag will now trigger the click event. This also works with touchstart.

const responsiveCode = {
  subscribe: (element, event, func) => {
    if (element.addEventListener) {
      element.addEventListener(event, func, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + event, func);
    } else {
      element["on" + event] = func;
    }
  },
  andriod: {
    listen: (selector, event, func) => selector.addEventListener(event, func),
  },
  ios: {
    listen: (selector, event, func) => selector.addEventListener(event, func),
  },
};

function _d(selector) {
  return document.querySelector(selector);
}
function getUrlJson(domainUrl) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", domainUrl, true);
  xhr.responseType = "json";
  // console.log(xhr)

  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // setReal(xhr.response.USD.last);
      // localStorage.setItem("lastBtc", xhr.response.USD.last);
      if (xhr.response == null) {
        console.log(
          "tracking ID not found check if ID is correct and try again"
        );
        showError("tracking ID not found check if ID is correct and try again");
      } else {
        // window.alert(xhr.response.item.tracking_id);
        localStorage.setItem("trackingID", xhr.response.item.tracking_id);
        removeSpinner();
        location.assign("/B33J4b1/results.html");
      }
      // return xhr.response;
    }
  };

  xhr.onerror = function () {
    console.log("Error Code" + xhr.status + ": " + xhr.statusText);
  };

  xhr.send();
}
let scrollEq;
function fixed() {
  console.log(window.scrollY);
  if (scrollTimes > 25) {
    console.log("make fixed");
    _d(".more_details_fixed").classList.add("movedown");
    if (scrollTimes == scrollEq) {
      setTimeout(
        () => _d(".more_details_fixed").classList.remove("movedown"),
        3000
      );
    }
    scrollEq = scrollTimes;
  }
  // window.scrollTo(100, 100); window.scrollY;
  scrollTimes++;
}
function addSpinner() {
  let html = `
    <div class="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  `;
  if (_d(".info")) {
    _d(".info").insertAdjacentHTML("afterend", html);
  }
}
function removeSpinner() {
  if (_d(".lds-roller")) {
    _d(".lds-roller").remove();
  }
}
function showError(mssg) {
  removeSpinner();
  _d(".mssg").innerHTML = mssg;
  _d(".mssg").classList.add("moveup");

  setTimeout(() => _d(".mssg").classList.remove("moveup"), 5000);
}

if (_d(".details")) {
  responsiveCode.subscribe(_d(".details"), "click", (e) => {
    _d(".full_details").classList.add("visibility");
    _d(".full_details").classList.add("opacity");
    _d(".more_details").classList.add("scale_transform");
    _d(".more_details_2").classList.add("scale_transform");
    _d(".cancel").classList.add("scale");
  });
  // _d(".details").addEventListener("click", (e) => {
  //   _d(".full_details").classList.add("visibility");
  //   _d(".full_details").classList.add("opacity");
  //   _d(".more_details").classList.add("scale_transform");
  //   _d(".more_details_2").classList.add("scale_transform");
  //   _d(".cancel").classList.add("scale");
  // });
}

if (_d(".more_details_fixed")) {
  responsiveCode.subscribe(_d(".more_details_fixed"), "click", (e) => {
    _d(".full_details").classList.remove("visibility");
    _d(".full_details").classList.remove("opacity");
    _d(".more_details").classList.remove("scale");
    _d(".cancel").classList.remove("scale");
    _d(".more_details_fixed").classList.remove("movedown");
  });
  // _d(".more_details_fixed").addEventListener("click", (e) => {
  //   _d(".full_details").classList.remove("visibility");
  //   _d(".full_details").classList.remove("opacity");
  //   _d(".more_details").classList.remove("scale");
  //   _d(".cancel").classList.remove("scale");
  //   _d(".more_details_fixed").classList.remove("movedown");
  // });
}
if (_d(".cancel")) {
  responsiveCode.subscribe(_d(".cancel"), "click", (e) => {
    _d(".full_details").classList.remove("visibility");
    _d(".full_details").classList.remove("opacity");
    _d(".more_details").classList.remove("scale");
    _d(".cancel").classList.remove("scale");
    _d(".more_details_fixed").classList.remove("movedown");
  });
  // _d(".cancel").addEventListener("click", (e) => {
  //   _d(".full_details").classList.remove("visibility");
  //   _d(".full_details").classList.remove("opacity");
  //   _d(".more_details").classList.remove("scale");
  //   _d(".cancel").classList.remove("scale");
  //   _d(".more_details_fixed").classList.remove("movedown");
  // });
}

//
if (_d(".btn-search")) {
  responsiveCode.subscribe(_d(".btn-search"), "click", function loadin() {
    var tracking = _d("#search").value;
    // window.alert(tracking)
    if (tracking == "") {
      console.log("Please input your tracking ID");
      showError("Please input your tracking ID");
    } else if (tracking.length < 10) {
      console.log("tracking id is less than 10 character");
      showError("tracking id is less than 10 characters");
    } else if (tracking.length > 10) {
      console.log("tracking id is greater than 10 character");
      showError("tracking id is greater than 10 characters");
    } else {
      // let url = `https://trackit-28f21-default-rtdb.firebaseio.com/${tracking}.json`;
      let url = `https://expertbase-8dc16-default-rtdb.firebaseio.com/trackit/${tracking}.json`;
      getUrlJson(url);
      addSpinner();
    }
  });
  // _d(".btn-search").addEventListener("click", function loadin() {
  //   var tracking = _d("#search").value;
  //   if (tracking == "") {
  //     console.log("Please input your tracking ID");
  //     showError("Please input your tracking ID");
  //   } else if (tracking.length < 10) {
  //     console.log("tracking id is less than 10 character");
  //     showError("tracking id is less than 10 characters");
  //   } else if (tracking.length > 10) {
  //     console.log("tracking id is greater than 10 character");
  //     showError("tracking id is greater than 10 characters");
  //   } else {
  //     let url = `https://expertbase-8dc16-default-rtdb.firebaseio.com/trackit/${tracking}.json`;
  //     getUrlJson(url);
  //     addSpinner();
  //   }
  // });
}

var scrollTimes = 0;
if (_d(".full_details")) {
  _d(".full_details").onscroll = () => fixed();
}

/*

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
*/
if (_d(".home_btn")) {
  _d(
    ".home_btn"
  ).innerHTML = `            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
  x="0px" y="0px" width="2rem" height="2rem" viewBox="0 0 495.398 495.398"
  style="enable-background:new 0 0 495.398 495.398;" xml:space="preserve">
  <g>
      <g>
          <g>
              <path
                  d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391     v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158     c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747     c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z" />
              <path
                  d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401     c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79     c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z" />
          </g>
      </g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
</svg>
<span class="home_text">Back to hompage</span>`;

  responsiveCode.subscribe(_d(".home_btn"), "mouseenter", () => {
    _d(".home_text").classList.add("display_inline_block");
  });
  responsiveCode.subscribe(_d(".home_btn"), "mouseleave", () => {
    _d(".home_text").classList.remove("display_inline_block");
  });
  responsiveCode.subscribe(_d(".home_btn"), "click", () => {
    location.assign("https://godaddy.com");
  });
}
