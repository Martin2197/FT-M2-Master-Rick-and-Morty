/*import React from 'react'
import { useState } from 'react';
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validate = (inputs, setErrors, errors) => {
  if(!inputs.email) setErrors({...errors, email:"Email vacio"});
};


export default function Contact () {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value
    
    setInputs({ ...inputs, [property]: value});
    validate(inputs, setErrors, errors)
  };

  

  return (
    <form>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input name="name" placeholder="Escribe tu nombre..." type="text" value={inputs.name} onChange={handleChange}></input>
      </div>
      <div>
        <label htmlFor="email">Correo Electrónico:</label>
        <input name="email" placeholder="Escribe tu email..." type="text" value={inputs.email} onChange={handleChange}></input>
      </div>
      <div>
        <label htmlFor="message">Mensaje:</label>
        <textarea name="message" placeholder="Escribe tu mensaje..." type="text" value={inputs.message} onChange={handleChange}></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
)}
---------------------------------------------------------------------------------------------


import React, { useState } from 'react';
import './Contact.modules.css';

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  const errors = {};

  if (!inputs.name) {
    errors.name = 'Se requiere un nombre';
  }
  if (!regexEmail.test(inputs.email)) {
    errors.email = 'Debe ser un correo electrónico';
  }
  if (!inputs.message) {
    errors.message = 'Se requiere un mensaje';
  }

  return errors;
}

export default function Contact() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setInputs({ ...inputs, [property]: value });
    setErrors(validate({ ...inputs, [property]: value }));
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          name="name"
          placeholder="Escribe tu nombre..."
          type="text"
          value={inputs.name}
          onChange={handleChange}
          className={errors.name ? 'warning' : ''}
        />
        {errors.name && <p className="danger">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          name="email"
          placeholder="Escribe tu email..."
          type="text"
          value={inputs.email}
          onChange={handleChange}
          className={errors.email ? 'warning' : ''}
        />
        {errors.email && <p className="danger">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message">Mensaje:</label>
        <textarea
          name="message"
          placeholder="Escribe tu mensaje..."
          type="text"
          value={inputs.message}
          onChange={handleChange}
          className={errors.message ? 'warning' : ''}
        />
        {errors.message && <p className="danger">{errors.message}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}*/

import React, { useState } from 'react';
import './Contact.modules.css';

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  const errors = {};

  if (!inputs.name) {
    errors.name = 'Se requiere un nombre';
  }
  if (!regexEmail.test(inputs.email)) {
    errors.email = 'Debe ser un correo electrónico';
  }
  if (!inputs.message) {
    errors.message = 'Se requiere un mensaje';
  }

  return errors;
}

export default function Contact() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setInputs({ ...inputs, [property]: value });
    setErrors(validate({ ...inputs, [property]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errorArray = Object.values(errors);
    if (errorArray.length === 0) {
      alert('Datos completos');
      setInputs({
        name: '',
        email: '',
        message: ''
      });
      setErrors({
        name: '',
        email: '',
        message: ''
      });
    } else {
      alert('Debe llenar todos los campos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          name="name"
          placeholder="Escribe tu nombre..."
          type="text"
          value={inputs.name}
          onChange={handleChange}
          className={errors.name ? 'warning' : ''}
        />
        {errors.name && <p className="danger">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          name="email"
          placeholder="Escribe tu email..."
          type="text"
          value={inputs.email}
          onChange={handleChange}
          className={errors.email ? 'warning' : ''}
        />
        {errors.email && <p className="danger">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message">Mensaje:</label>
        <textarea
          name="message"
          placeholder="Escribe tu mensaje..."
          type="text"
          value={inputs.message}
          onChange={handleChange}
          className={errors.message ? 'warning' : ''}
        />
        {errors.message && <p className="danger">{errors.message}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

