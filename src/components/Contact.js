import "../css/Contact.css"


const Contact = () => {
    return ( 
        <div className="wrapper">
        <div className="storytext">
            <h1>Get in touch</h1>
            <p>132 9th Avenue</p><br></br>
            <p>New York, NY 10011</p><br></br>
            <p>646-559-1671</p><br></br>
            <p>info@btgnyc.com</p>
           
            <h1>Hours of Operation</h1><br></br>
            <p>Monday              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8am — 4pm </p><br></br>
            <p>Tuesday - Friday    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8am — 10pm</p><br></br>
            <p>Saturday            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9am — 10pm</p><br></br>
            <p>Sunday              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9am — 4pm</p><br></br>
           
            </div> <div className="form">
            
    <input type="text" placeholder="Name" name="name" required></input><br></br>
    <input type="text" placeholder="Email" name="email" required></input><br></br>
    <input type="text" placeholder="Mobile" name="mobile" required></input><br></br>
    <textarea placeholder="Message" name="psw-repeat" rows="4" cols="50"></textarea><br></br>
    <div className="btnSubmit">Submit</div>

            </div>
            </div>
     );
}
 
export default Contact;