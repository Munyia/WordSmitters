import React from 'react'

const Login = () => {
  return (
    <div id='Login'>
        <div>
            <p>Are you a Reader or a Writer?</p>
            <p>Sign with us and let your Imagination, Ink and stories take flight</p>
            <div>
            <button className="button" data-text="Awesome">
    <span className="actual-text">&nbsp;Reader&nbsp;</span>
    <span aria-hidden="true" className="hover-text">&nbsp;Reader&nbsp;</span>
</button>
<button className="button" data-text="Awesome">
    <span className="actual-text">&nbsp;Writer&nbsp;</span>
    <span aria-hidden="true" className="hover-text">&nbsp;Writer&nbsp;</span>
</button>
            </div>
            <form action="" className="container">
  <div className="input-container">
      <div className="input-content">
          <div className="input-dist">
           <span id="SubscribeTXT">Subscribe</span>
              <div className="input-type">
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