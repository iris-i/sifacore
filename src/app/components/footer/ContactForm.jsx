'use client'
import { useForm, ValidationError } from '@formspree/react';
import Button from '../atoms/Button';

function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);
  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <label htmlFor="name"> Full Name </label>
        <input id="name" type="text" name="name" required />
      </div>
      <ValidationError prefix="Name" field='name' errors={state.errors} />


      <div className="form-group">
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
      />
      </div>
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label htmlFor='message'>
        How can we help you?
      </label>
      <textarea
        id="message"
        name="message"
        required
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <div className="button-wrapper">
        <button type="submit" disabled={state.submitting} className="button button-small button-light text-16">
          Submit
        </button>
      </div>

    </form>
  );
}

export default ContactForm;
