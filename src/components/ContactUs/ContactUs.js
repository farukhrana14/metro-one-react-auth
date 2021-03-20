import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <h3>Contact us</h3>
            <form>
                <p>Your Message</p>
                <textarea name="paragraph_text" cols="50" rows="10"></textarea>
                <br/>
                <button>Submit</button>


            </form>
        </div>
    );
};

export default ContactUs;