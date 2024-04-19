import React from "react";

export default function AddPatient() {
  return (
    <div>
      <div class="row">
        <div class="col-sm-12">
          <div class="card-box">
            <div class="card-head">
              <header>Personal Information</header>
            </div>
            <div class="card-body row">
              <div class="col-lg-12 p-t-20">
                <div
                  class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fullwidth full-width is-upgraded"
                  data-upgraded=",MaterialTextfield"
                  style={{ width: "124px" }}
                >
                  <input
                    class="mdl-textfield__input"
                    type="text"
                    id="sample1"
                    value=""
                    readonly=""
                    tabindex="-1"
                  />
                  <label for="sample1" class="mdl-textfield__label">
                    Select Gender
                  </label>
                  <div class="mdl-menu__container is-upgraded">
                    <div class="mdl-menu__outline mdl-menu--bottom-left"></div>
                    <ul
                      data-mdl-for="sample1"
                      class="mdl-menu mdl-menu--bottom-left mdl-js-menu"
                      data-upgraded=",MaterialMenu"
                    >
                      <li class="mdl-menu__item" tabindex="-1">
                        Male
                      </li>
                      <li class="mdl-menu__item" tabindex="-1">
                        Female
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 p-t-20">
                <div
                  class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-width is-upgraded"
                  data-upgraded=",MaterialTextfield"
                >
                  <input class="mdl-textfield__input" type="text" id="text4" />
                  <label class="mdl-textfield__label" for="text4">
                    First Name
                  </label>
                </div>
              </div>
              <div class="col-lg-12 p-t-20">
                <div
                  class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-width is-upgraded"
                  data-upgraded=",MaterialTextfield"
                >
                  <input class="mdl-textfield__input" type="text" id="text5" />
                  <label class="mdl-textfield__label" for="text5">
                    Last Name
                  </label>
                </div>
              </div>
              <div class="col-lg-12 p-t-20">
                <div
                  class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-width is-upgraded"
                  data-upgraded=",MaterialTextfield"
                >
                  <textarea
                    class="mdl-textfield__input"
                    rows="4"
                    id="text7"
                  ></textarea>
                  <label class="mdl-textfield__label" for="text7">
                    Address
                  </label>
                </div>
              </div>
              <div class="col-lg-12 p-t-20">
                <div
                  class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width is-upgraded"
                  data-upgraded=",MaterialTextfield"
                >
                  <input
                    class="mdl-textfield__input flatpickr-input"
                    type="text"
                    id="dateOfBirth"
                  />
                  <label class="mdl-textfield__label">Date Of Birth</label>
                </div>
              </div>
              <div class="col-lg-12 p-t-20">
                <div
                  class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-width is-upgraded"
                  data-upgraded=",MaterialTextfield"
                >
                  <input
                    class="mdl-textfield__input"
                    type="text"
                    pattern="-?[0-9]*(\.[0-9]+)?"
                    id="text2"
                  />
                  <label class="mdl-textfield__label" for="text2">
                    Mobile Number
                  </label>
                  <span class="mdl-textfield__error">
                    Mobile Number Required !
                  </span>
                </div>
              </div>
              <div class="col-lg-12 p-t-20">
                <div
                  class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-width is-upgraded"
                  data-upgraded=",MaterialTextfield"
                >
                  <input
                    class="mdl-textfield__input"
                    type="text"
                    pattern="^\s*[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,4}\s*$"
                    id="txtEmail"
                  />
                  <label class="mdl-textfield__label" for="txtEmail">
                    Email
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
