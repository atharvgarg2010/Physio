import React from 'react'
import { useState, useRef } from 'react'
// import ReactWhatsapp from 'react-whatsapp';
import emailjs from 'emailjs-com'
function Contact() {

    const [data, setData] = useState({ "Name": "", 'Email': "", "Message": "" })
    const onChangee = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
        console.log(data);
    }
    const form = useRef();

    const emailsend = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5wbvkgn', 'template_ch2tx48', form.current, 'Cvk6Zz5BiHeweKeZF')
            .then((result) => {
                alert("Success: Message Sent")
            }, (error) => {
               alert("Error: Some Error Occured!!")
            });
        // load()
    };
    return (
        <div className='about aa'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.120223274656!2d77.13679131501033!3d28.686050082396722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c844000001%3A0xc6fa4bee2978aa59!2sPHYSIO%20CARE-Physiotherapy%20Clinic%20In%20Pitampura-Spine%20Treatment%20In%20Pitampura-Joint%20Pain%20Clinic%20In%20Pitampura!5e0!3m2!1sen!2sin!4v1664098054592!5m2!1sen!2sin" width="600" height="450" style={{ border: "none" }} title="D"></iframe>                
            <form ref={form} onSubmit={emailsend} className='Content Contentt'>

                <h1>Contact Me</h1>

                {/* <form> */}
                    <label>Name</label>
                    <input type="text" name="Name" id="inp" className='inp' onChange={onChangee} />
                    <label>Email</label>
                    <input type="text" name="Email" id="inp" className='inp' onChange={onChangee} />
                    <label>Message</label>
                    <textarea type="text" name="Message" id="inp" className='inp' onChange={onChangee} />
                    <button className="btn " type='submit'><div className="c">Submit</div></button>

                </form>
        </div>
    )
}

export default Contact
