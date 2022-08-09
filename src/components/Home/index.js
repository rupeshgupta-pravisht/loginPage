const Home = () => {
    return (
      <div id="form-div">
        <form id="form">
          <label>Full Name</label>
          <input type="text" label="name" required />
  
          <label>age</label>
          <input type="number" label="number" required />
          <label>weight</label>
          <input type="number" label="number" required />
          <label>mobile</label>
          <input type="number" label="mobile" required />
          <label>City</label>
          <input type="text" label="city" required />
          <label>State</label>
          <input type="text" label="state" required />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  };
  export default Home;
  