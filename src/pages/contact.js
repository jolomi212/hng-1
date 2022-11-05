import React from 'react'

const Contact = () => {
    return (
        <div className='form_container'>
            <form className='form'>
                <h2>Contact Me</h2>
                <p className='heading'>Hi there, contact me to ask me about anything you have in mind.</p>

                <div className='name_row'>
                    <div>
                        <label>First Name:</label>
                        <input type="name" placeholder='Enter your first name' required id='first_name'/>
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="name"placeholder='Enter your last name' id='last_name' required/>
                    </div>
                </div>

                <div className='row'>
                    <label>Email:</label>
                    <input type="email" placeholder='yourname@email.com' required id='email'/>
                </div>

                <div className='row'>
                    <label>Message:</label>
                   <textarea className='message_field' id='message'></textarea>
                </div>

                <div className='terms'>
                    <input type="checkbox"  required />
                    <p>You agree to providing your data to Jolomisan who may contact you.</p>
                </div>

                <div>
                    <button type='submit'id='btn_submit'>Send message</button>
                </div>
            </form>
        </div>
    )
}

export default Contact