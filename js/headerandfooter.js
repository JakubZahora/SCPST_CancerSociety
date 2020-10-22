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
            <a href="index.html"><img src="css/Cancer_Support_Center.png" width="300" height="82" alt="Cancer Support Center"></a>
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
          <a href="hospitalPartnerships.html" target="_blank">Hospital Partnerships</a>
          <a href="cancerSupportLinks.html" target="_blank">Cancer Support Links</a>
          <a href="libraryResourceCenter.html" target="_blank">Library Resource Center</a>
          <a href="financial.html" target="_blank">Financial</a>
          <a href="transportation.html" target="_blank">Transportation Services</a>
          </div>
          </div>

          <div class="dropdown">
          <button class="dropbtn" onclick="myFunction(3)">About the Center
              <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content" id="myDropdown3">
          <a href="staff.html" target="_blank">Staff</a>
          <a href="board.html" target="_blank">Board of Directors</a>
          <a href="ancillary-boards.html" target="_blank">Ancillary Boards</a>
          <a href="news.html" target="_blank">In the News</a>
          <a href="annual-report.html" target="_blank">CSC Annual Report</a>
          <a href="contact.html" target="_blank">Contact Us</a>
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
      </nav>
      `;
    }
  }
  
  class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `	   
      <footer>
      </footer>
      `;
    }
  }
  
  customElements.define('main-header', Header);
  customElements.define('main-footer', Footer);