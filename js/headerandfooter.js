class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav>
        <div class = icon-container>
        <div>
            <a href="https://www.facebook.com/pages/The-Cancer-Support-Center/113271178690597"
            target="_blank"><img src="css/FB-f-Logo__white_50.png"
            width="36px" height="36px" margin: 5px
            alt="Facebook"></a>
        </div>

        <div>
            <a href="mailto:csc@cancersupportcenter.org" target="_blank">
            <img src="css/icon-social-email-cancersupportcenter.png"
            width="36px" height="36px" margin: 5px
            alt="Email"></a>
        </div>

        <div>
            <a href="https://www.instagram.com/the_cancer_support_center/"
            target="_blank">
            <img src="css/instagram-logo_white-cancersupportcenter.png"
            width="36px" height="36px" margin: 5px
            alt="Instagram"></a>
        </div>

        <div>
            <a href="https://www.pinterest.com/thecsc/" target="_blank">
            <img src="css/Pinterest-badge-cancersupportcenter.png"
            width="36px" height="36px" margin: 5px
            alt="Pinterest"></a>
        </div>

        <div>
            <a href="https://twitter.com/The_CSC" target="_blank">
            <img src="css/Twitter_Logo_White_On_Blue.png"
            width="36px" height="36px" margin: 5px
            alt="Twitter"></a>
        </div>            

        <div>
            <a href="https://youtu.be/JfWB6jOE5pw">
            <img src="css/YouTube-social-square_red_48px.png"
            width="36px" height="36px" margin: 5px
            alt="YouTube"></a>
        </div>
        </div>
        <div class="center">
            <img src="css/Cancer_Support_Center.png" width="300" height="82" alt="Cancer Support Center">
            <h4>Hello and welcome to the Cancer Support Center! On this website, you will find
                multiple resources for you and your loved one(s) who are dealing with cancer. We
                hope that by browsing our site, it will help give you comfort and support in a time
                where those aspects are needed.<br><br>
                If you'd like to make a donation to the Center, you can do so 
                <a href="https://www.classy.org/give/123486/#!/donation/checkout" target="_blank">here</a>.
            </h4>
        </div>
        <div class="navbar">
            <div class="dropdown">
            <button class="dropbtn" onclick="myFunction(1)">Programs and Activities
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" id="myDropdown1">
              <a href="#">Kick It Cancer</a>
              <a href="#">Zoom Programming</a>
              <a href="#">On Demand Programming</a>
              <a href="#">CSC 5 Point Model</a>
              <a href="#">Calendar Grid and Zoom Registration</a>
              <a href="#">Participant Forms</a>
              <a href="#">Newsletters</a>
            </div>
            </div>

            <div class="dropdown">                
            <button class="dropbtn" onclick="myFunction(2)">Information and Resources
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" id="myDropdown2">
            <a href="#">Hospital Partnerships</a>
            <a href="#">Cancer Support Links</a>
            <a href="#">Library Resource Center</a>
            <a href="#">Financial</a>
            <a href="#">Transportation Services</a>
            </div>
            </div>

            <div class="dropdown">
            <button class="dropbtn" onclick="myFunction(3)">About the Center
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" id="myDropdown3">
            <a href="#">Staff</a>
            <a href="#">Board of Directors</a>
            <a href="#">Ancillary Boards</a>
            <a href="#">In the News</a>
            <a href="#">CSC Annual Report</a>
            <a href="#">Contact Us</a>
            </div>
            </div>

            <div class="dropdown">
            <button class="dropbtn" onclick="myFunction(4)">Support the Center
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" id="myDropdown4">
            <a href="volunteer.html" target="_blank">Volunteer Opportunities</a>
            <a href="http://www.villagedoor.com/" target="_blank">Consignment Shop</a>
            <a href="https://www.classy.org/give/123486/#!/donation/checkout" target="_blank">Donate</a>
            </div>
            </div>

            <div class="dropdown">
            <button class="dropbtn" onclick="myFunction(5)">Special Events
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" id="myDropdown5">
            <a href="#">Annual Golf Outing</a>
            <a href="#">2020 Virtual FALL Walk of Hope</a>
            <a href="#">2020 Fall Un-Gala</a>
            <a href="#">Third Party Community Events</a>
            <a href="#">Take a Bite Out of Cancer</a>
            </div>
            </div>
        </div>
        <script src="js/cancersite.js"></script>
    </nav>
    `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `	   
      <footer>
      <section class = hours-container>
        <div class = leftFooter>
            <div class = other-locations><h4>Other Cancer Support Center Locations</h4></div>
            <div class = "location1 left"><h3>Homewood Location</h3>
            <p>2028 Elm Road, Homewood, Illinois 60430<br>
                (west of the corner of Dixie Highway and<br>
                Elm Road)<br>
                <a href="https://www.google.com/maps/place/2028+Elm+Rd,+Homewood,+IL+60430/
                @41.5639727,-87.6685086,17z/data=!3m1!4b1!4m5!3m4!1s0x880e1865b9027a59:0xdc469a9127467e84!8m2!3d41.
                5639727!4d-87.6663199?hl=en" target="_blank">
                Map & Directions</a><br>
                Phone: (708) 798-9171<br>
                Fax: (708) 798-0052            
            </p>
            </div>
        </div>

        <div class = rightFooter>                
            <div class = "location2 right"><h3>Mokena Location</h3>
            <p>19645 S. LaGrange Road, Mokena, Illinois 60448<br>
            (east side of S. LaGrange Road)<br>
            <a href="https://www.google.com/maps/place/19657+South+La+Grange+Road,+Mokena,+IL+60448/
            @41.5325464,-87.8518694,17z/data=!3m1!4b1!4m5!3m4!1s0x880e14d18d74caa3:0x56cfe67921af0953!8m2!3d41
            .5325464!4d-87.8496807?hl=en" target="_blank">
            Map & Directions</a><br>
            Phone: (708) 478-3529<br>
            Fax: (708) 478-4066
            </p>
            </div>
        </div>
        <img class="location-imgs" img src="css/other-locations.jpg" alt="other locations">

        <h3>Drop-In Hours</h3>
            <b>By Phone:</b>
            <p>We are open and available to provide phone support during all regular business hours and this is the best way to contact us during this time.<br></p>
                <div class = "Homewood_Phone"><b>Homewood:</b><br>
                Monday: 9am-5pm<br>
                Tuesday: 9am-5pm<br>
                Wednesday: 9am-5pm<br>
                Thursday: 9am-4pm<br>
                Friday: 9am-12pm
                </div>
                <div class ="Mokena_Phone"><b>Mokena</b><br>
                Monday: 9am-4pm<br>
                Tuesday: 9am-4pm<br>
                Wednesday: 12pm-4pm<br>
                Thursday: 9am-4pm<br>
                Friday: 9am-12pm
                </div><br>
            <b>In-person:</b>
            <p>The Cancer Support Center doors are open during these hours to assist new<br>
                participants’ in-person with immediate needs and scheduling remote appointments.<br><br>
                <b><u>Please do not visit The Center in a social capacity at this time.</u></b><br>
                <b><u>Wigs are by appointment only - no exceptions.</u></b><br><br>
                If you are able to access our services by phone or on our website, please do so for your safety and the safety of our staff. If you do visit The Center you must follow our safety guidelines. You can access our guidelines <a href="ReOpeningParticipantInstructions.docx">here</a>.
                <br>
                <div class = "Homewood_InPerson"><b>Homewood:</b><br>
                    Monday: 9am-12pm<br>
                    Tuesday: 12pm-3pm<br>
                    Thursday: 9am-12pm<br>
                    </div><br>
                    <div class ="Mokena_InPerson"><b>Mokena</b><br>
                    Monday: 12pm-3pm<br>
                    Tuesday: 9am-12pm<br>
                    Thursday: 9am-12pm<br>
                </div>
            </p>
        </div>
        </div>
        </section>

        <div class="container">
            <h3>Contact Form</h3>
            <p>Have any questions or comments you'd like to send us? Feel free to contact us through the contact form below.<br><br>
                Fields with a * are required to be filled out</p>
        
        <form action="/action_page.php">
            <label for="fname">First Name*</label>
            <input type="text" id="fname" name="firstname" placeholder="Enter your name here...">

            <label for="email">Email*</label>
            <input type="email" id="email" name="email" placeholder="Enter your email here...">

            <label for="phone_number">Phone Number</label>
            <input type="tel" id="phone_number" name="phone_number" placeholder="Enter your phone number here...">

            <label for="subject">Subject*</label>
            <textarea id="subject" name="subject" placeholder="Write here..." style="height:200px"></textarea>

            <input type="submit" value="Submit">
        </form>
        </div>         
      </footer>     
    `;
  }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);