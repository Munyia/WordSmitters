import React from 'react'

const Login = () => {
  return (
    <div id='LoginBody'>
        <div>
            <p>Are you a Reader or a Writer?</p>
            <p>Sign with us and let your Imagination, Ink and stories take flight</p>
            <form action="" class="container">
  <div class="input-container">
      <div class="input-content">
          <div class="input-dist">
           <span id="SubscribeTXT">Subscription</span>
              <div class="input-type">
                  <input placeholder="Email" required="" type="text" class="input-is"/>  
                  <input placeholder="Password" required="" type="password" class="input-is"/>  
              </div>
              <button>Subscribe</button>
          </div>
      </div>
  </div>
</form>

        </div>

    </div>
  )
}

export default Login