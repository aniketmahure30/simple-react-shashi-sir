import React, {useState} from 'react'

const FileUpload = () => {

    let [username, setUsername] = useState("");
    let [image, setImage] = useState("");

    let handleChange = e => {
        setUsername(e.target.value);
    }

    let handleFile = e => {
        
        setImage(e.target.files[0])
    }

    let handleSubmit = e => {
        e.preventDefault();
        console.log({ username, image })
    }

  return (
    <section className="counterApp">
      <article>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="email"
              placeholder="enter email"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="image">PHOTO</label>
            <input type="file" name="image"  onChange={handleFile} />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default FileUpload