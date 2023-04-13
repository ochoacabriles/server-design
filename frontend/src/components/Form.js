import { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [dni, setDni] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(`Your name is ${name} ${lastname} and your dni is ${dni}`);
    const response = await axios(
      {
        method: 'post',
        url: 'http://localhost:3000/user',
        data: {
          name,
          lastname,
          dni,
        }
      }
    );

    console.log(response);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Enter your name:
          <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>Enter your lastname:
          <input
            type="text" 
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>Enter your dni:
          <input
            type="text" 
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
        </label>
      </div>
      <button>Submit</button>
    </form>
  )
};

export default Form
