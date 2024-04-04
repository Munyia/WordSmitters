import React from 'react'
import { term } from "../assets";

const Terms = () => {
  return (
    <div className='flex justify-center text-center p-5 align-middle '>
       <img
        src={term}
        className=" w-fit h-[100vh]  justify-center absolute overflow-clip text-center align-middle"
        alt=""
      />
        <div className=' flex relative flex-col'>
            <p className='flex justify-center text-center pl-5 pr-5 align-middle '> Terms and Conditions</p>
            <p className='flex justify-center text-center pl-5 pr-5  align-middle '> Welcome to WordSmitters </p>
            <p className='flex justify-center text-center pl-5 pr-5  align-middle '>These terms and conditions outline the rules and regulations for the use of our book web app.

By accessing this web app, we assume you accept these terms and conditions. Do not continue to use WordSmitters if you do not agree to all of the terms and conditions stated on this page.
</p>

<p className='flex justify-center text-center flex-col pl-10 pr-10 align-middle '>
1. License to Use

1.1. WordSmitters grants you a limited license to access and use this web app for personal use only.

1.2. This license does not permit you to:
- Modify or copy the materials from WordSmitters.
- Use the materials for any commercial purpose or for any public display (commercial or non-commercial).
- Remove any copyright or other proprietary notations from the materials.

2. Nigerian Books Only

2.1. WordSmitters is dedicated to promoting Nigerian literature. We exclusively feature books authored by Nigerian writers or books related to Nigerian culture, heritage, or history.

2.2. Users are prohibited from uploading or promoting books that do not align with the focus on Nigerian literature.

3. User Conduct

3.1. Users are solely responsible for the content they upload, share, or distribute on WordSmitters.

3.2. Users agree not to:
- Violate any laws, regulations, or third-party rights.
- Upload or share content that is defamatory, offensive, or infringes upon intellectual property rights.
- Engage in any activity that disrupts or interferes with the functioning of WordSmitters or its services.

4. Privacy Policy

4.1. WordSmitters respects the privacy of its users. Our Privacy Policy outlines how we collect, use, and disclose personal information. By using WordSmitters, you agree to the terms of our Privacy Policy.

5. Termination

5.1. WordSmitters reserves the right to terminate or suspend access to the web app without prior notice if users violate these terms and conditions or engage in activities detrimental to the app's integrity or reputation.

6. Changes to Terms

6.1. WordSmitters may revise these terms and conditions at any time without notice. By continuing to use the web app after such revisions, you agree to be bound by the updated terms and conditions.

7. Governing Law

7.1. These terms and conditions are governed by and construed in accordance with the laws of Nigeria. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Nigeria.

By using WordSmitters, you signify your acceptance of these terms and conditions. If you have any questions or concerns about these terms, please contact us at contact@WordSmitters.com.
 
</p>


        </div>
    </div>
  )
}

export default Terms