import avatar from "../assets/avatar.png"
const Settings = () => {
    return (
      <main data-bs-theme="light">
        <div className="container px-md-6 px-lg-8 px-xl-9" data-bs-theme="light">
          <h2>Account</h2>
          <hr />
          <div className="d-flex flex-column flex-md-row fs-7">
            <div className="w-25 mb-3">
              <p className="fs-6">PROFILE DETAILES</p>
              <button type="button" className="btn btn-danger fs-7">
                DELETE ACCOUNT
              </button>
            </div>
            <div className="flex-grow-1 ps-3">
              <div className="d-flex align-items-center mb-2">
                <p className="fw-bold fs-7 m-0">email@email.com</p>
                <a href="index.html" className="ms-auto">
                  Change account email
                </a>
              </div>
              <div className="d-flex align-items-center mb-2">
                <p className="m-0">Password: *******</p>
                <a href="index.html" className="ms-auto">
                  change password
                </a>
              </div>
              <div className="d-flex align-items-center">
                <p className="m-0">phone 329*******</p>
                <a href="index.html" className="ms-auto">
                  change phone number
                </a>
              </div>
              <hr />
              <div className="d-flex align-items-top mb-2">
                <p className="fw-bold fs-7 m-0">
                  <i className="bi bi-paypal"></i>PayPal email@email.com
                </p>
                <div className="d-flex flex-column ms-auto">
                  <a href="index.html" className="ms-auto mb-1">
                    update payment info
                  </a>
                  <a href="index.html" className="ms-auto">
                    Billing detail
                  </a>
                </div>
              </div>
              <hr />
              <div className="text-end">
                <a href="index.html" className="ms-auto mb-1 d-block">
                  Redeem gift card or promo code
                </a>
                <a href="index.html" className="ms-auto">
                  Where to buy gift cards
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex fs-7  flex-column flex-md-row">
            <div className="w-25">
              <p className="fs-6 m-0 mb-3">PLAN DETAILS</p>
            </div>
            <div className="flex-grow-1 ps-3">
              <div className="d-flex align-items-center mb-2">
                <p className="fw-bold fs-7 m-0">Premium ultra</p>
                <i className="bi bi-badge-hd fs-5 ms-1"></i>
                <a href="index.html" className="ms-auto">
                  Change Plan
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex fs-7 flex-column flex-md-row mb-3">
            <div className="w-25">
              <p className="fs-6 m-0 mb-3">SETTINGS</p>
            </div>
            <div className="flex-grow-1 ps-3">
              <a href="index.html" className="ms-auto d-block">
                Parental controls
              </a>
              <a href="index.html" className="ms-auto d-block">
                Test participation
              </a>
              <a href="index.html" className="ms-auto d-block">
                Manage download devices
              </a>
              <a href="index.html" className="ms-auto d-block">
                Activate a device
              </a>
              <a href="index.html" className="ms-auto d-block">
                Recent device streaming activity
              </a>
              <a href="index.html" className="ms-auto d-block">
                Sign out of all devices
              </a>
            </div>
          </div>
          <hr />
          <div className="d-flex fs-7 flex-column flex-md-row mb-3">
            <div className="w-25">
              <p className="fs-6 m-0 mb-3">MY PROFILE</p>
            </div>
            <div className="flex-grow-1 ps-3 align-items-center">
              <div className="d-flex mb-4">
                <img src={avatar} className="me-2 rounded-circle" alt="user" width="50px" />
                <p className="fw-bold mb-0 pt-1 fs-6">Strive Student</p>
                <div className="ms-auto">
                  <a href="index.html" className="ms-auto d-block">
                    Manage profiles
                  </a>
                  <a href="index.html" className="ms-auto d-block">
                    Add profile email
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <a href="index.html" className="ms-auto d-block">
                    Language
                  </a>
                  <a href="index.html" className="ms-auto d-block">
                    Playback settings
                  </a>
                  <a href="index.html" className="ms-auto d-block">
                    subtitle apperance
                  </a>
                </div>
                <div className="col-6">
                  <a href="index.html" className="ms-auto d-block">
                    Viewing activity
                  </a>
                  <a href="index.html" className="ms-auto d-block">
                    Ratings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default Settings;