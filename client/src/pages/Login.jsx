import React from 'react'

const Login = () => {
  return (
    <div id='Login'>
        <div>
            <p>Are you a Reader or a Writer?</p>
            <p>Sign with us and let your Imagination, Ink and stories take flight</p>
            <div>
            <button class="button" data-text="Awesome">
    <span class="actual-text">&nbsp;Reader&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;Reader&nbsp;</span>
</button>\
<button class="button" data-text="Awesome">
    <span class="actual-text">&nbsp;Writer&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;Writer&nbsp;</span>
</button>
            </div>

            <form action="" class="container">
  <div class="input-container">
      <div class="input-content">
          <div class="input-dist">
           <span id="SubscribeTXT">Subscription</span>
              <div class="input-type">
                  <input placeholder="Email" required="" type="text" class="input-is"/>  
                  <input placeholder="Password" required="" type="password" class="input-is"/>  
              </div>
              <button id='but'>Subscribe</button>
          </div>
      </div>
  </div>
</form>

        </div>

    </div>
  )
}

export default Login