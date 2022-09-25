import React from 'react'
import { useState, useRef } from 'react'
// import ReactWhatsapp from 'react-whatsapp';
import emailjs from 'emailjs-com'
function Appoint() {

    const [data, setData] = useState({ "Name": "", 'Email': "", "Message": "" })
    const onChangee = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
        console.log(data);
    }
    const form = useRef();

    const emailsend = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5wbvkgn', 'template_xir7l4h', form.current, 'Cvk6Zz5BiHeweKeZF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log("DD");
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
