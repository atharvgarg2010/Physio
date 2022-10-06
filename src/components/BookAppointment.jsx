import React from 'react'
import { useState, useRef } from 'react'
// import ReactWhatsapp from 'react-whatsapp';
import emailjs from 'emailjs-com'
function Appoint() {

    const [data, setData] = useState({ "Name": "", 'Email': "", "Message": "" })
    const onChangee = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
        console.log("X");
    }
    const form = useRef();

    const emailsend = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z2nn41k', 'template_4zczgio', form.current, '7ikjytWBlitOHuCu3')
            .then((result) => {
                alert("Success: Booking Confirmation Will Be Done On Your Mail")
            }, (error) => {
                alert("Error: Some Error Occured! Try Again")
            });
        // load()
    };
    return (
        <div className="a">
            <form ref={form} onSubmit={emailsend} className='Content Contentt ff'>

                <h1>Book An Appointment</h1>

                {/* <form> */}
                    <label>Name</label>
                    <input type="text" name="Name" id="inp" className='inp' onChange={onChangee} />
                    <label>Email</label>
                    <input type="text" name="Email" id="inp" className='inp' onChange={onChangee} />
                    <label>Problem</label>
                    <textarea type="text" name="Problem" id="inp" className='inp' onChange={onChangee} />
                    <button className="btn " type='submit'><div className="c">Submit</div></button>

                </form>
                </div>
    )
}

export default Appoint
