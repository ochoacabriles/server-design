import { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [dni, setDni] = useState('');
  const [data, setData] = useState(undefined)

  const handleSubmit = async (event) => {
    event.preventDefault();
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

    setData(response.data);
  };

  if (data) {
    return (
      <div>
        <p>{`Thanks for submitting ${data.nickname}. Your code is ${data.randomCode}`}</p>
        <button onClick={() => setData(undefined)}>Submit another user</button>
      </div>
    )
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
