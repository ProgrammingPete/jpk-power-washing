import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { API } from 'aws-amplify';
import { createCandidate } from '../graphql/mutations';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: 'I would like to request a free quote! '
  })

  const handleContactFormSubmit = async (e) => {
    
    const { name, email, message } = formState;
    console.log("name: " + name );
    console.log("email: " + email);
    console.log("message: " + message);
    try {
      if (name && email) {
        console.log("Calling graphql function");
          await API.graphql({
            query: createCandidate,
            variables: {
              input: {
                name,
                email,
                message
              },
            },
          });
        toast.success('Your Message has been sent! ', {
          position: toast.POSITION.TOP_RIGHT
        });
      } else {
        toast.error('Error: Need to provide name and email address', {
          position: toast.POSITION.TOP_RIGHT
        });
      }
    } catch (e) { 
      console.error(e);
      toast.error('Error: Invalid email Address', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    
  }
  return (
    <div  className="container contact">
      
      <div style={{marginTop:'20rem',width:'100%',height:'30px'}} className="contact"></div>
      <h2 className="main-title text-center">Request a Free Estimate</h2>
      <div className="col-md-12">
            <p className="main-p">
              If you're interested in our cleaning services, please fill out the fields below. We'll provide your with a personalized quote based on your specific needs.
              Our experienced team will work closely with you to ensure your property is clean and well-maintained.
              We look forward to hearing from you and providing you with a free, no-obligation quote.  
            </p>
      </div>
      <div className="px-2">
        <div className="row text-center">
        <ToastContainer />
          <div className="col-md-3 mb-1">
            <input name="name" placeholder="Name" value={formState.name} className="contact-input" onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              } />
          </div>
          <div className="col-md-3 mb-1">
            <input name="email" placeholder="Email" onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              } value={formState.email} className="contact-input" />
          </div>
        </div>
      </div>
      <br />
      <div className="col-md-12">
      <textarea
            name="message"
            placeholder="I would like to request a free quote!"
            className="contact-textarea"
            value={formState.message}
            onChange={(e) =>
              setFormState({ ...formState, message: e.target.value })
            }
          />
      </div>

      <br></br>
      <div className="row">
        <div className="col-md-12">
          <input className="form-btn" type="submit" onClick={handleContactFormSubmit} value="Send Message" />
        </div>
      </div>
    </div>
  );
}
export default Contact;
