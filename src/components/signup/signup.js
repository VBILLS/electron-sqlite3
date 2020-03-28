import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  resetForm = () => {
    this.setState({});
  };

  handleSubmit = () => {};

  render() {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='email'
          placeholder='Email'
          onChange={this.handleChange}
        />
        <button onClick={this.resetForm}>Reset</button>
        <button type='submit'>Sign Up</button>
      </form>
    );
  }
}

export default SignUp;
