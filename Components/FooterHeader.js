class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
     
 <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="navbar-container container">
            <a class="navbar-brand" href="#">Intern<span class="sphere">Sphere</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav nav">
                    <li class="nav-item">
                        <a class="nav-link links active" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link links" href="About us.html">About Us</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link links dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                        <ul class="dropdown-menu">
                            <li class="nav-item">
                                <a class="dropdown-item" href="internships.html">Internships</a>
                            </li>
                            <li class="nav-item">
                                <a class="dropdown-item" href="Graduate students.html">Graduate Students</a> 
                            </li>
                            <li class="nav-item">
                                <a class="dropdown-item" href="companies.html">Companies</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link links" href="contact.html">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link links" href="signup.html">Sign Up</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`;

    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer-section" >
  <div class="footer-container">
    <div class="row">
      <div class="col-sm-3 footer-col">
        <br>
        <h4>company</h4>
        <ul>
          <li><a href="About us.html">About us</a></li>
          <li><a href="Services.html">our service</a></li>
          <li><a href="policy.html">privacy policy</a></li>
          <li><a href="#">affiliate program</a></li>
           </ul>
      </div>
      <div class="col-sm-3 footer-col">
        <br>
        <h4>get helps</h4>
        <ul>
          <li><a href="html/FAQ.html">FAQ</a></li>
          <li><a href="#">details</a></li>
          <li><a href="#">returns</a></li>
          <li><a href="#">order status</a></li>
          <li><a href="subscription.html">Subscription option</a></li>
        </ul>
      </div>
      <div class="col-sm-3 footer-col">
        <br>
        <h4>online application formats</h4>
        <ul>
          <li><a href="#">Tech companies</a></li>
          <li><a href="#">Marketing companies</a></li>
          <li><a href="#">Government companies</a></li>
          <li><a href="#">Others</a></li>
           </ul>
      </div>
      <div class="col-sm-3 footer-col">
        <br>
        <h4>follow us</h4>
        <ul>
            <li><a href="https://www.facebook.com/example">Facebook</a></li>
            <li><a href="https://www.twitter.com/example">Twitter</a></li>
            <li><a href="https://www.instagram.com/example">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/example">linkedin</a></li>

        </ul>
            
      </div>
        </div>
  </div>
</footer>
`;
    }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
