import React , {useState} from 'react'

const Datecomponent = () => {


    let  [username ,setUsername]=useState("")
    let [dob , setDob]=useState("")


    let handleSubmit =(e)=>{
        e.preventDefault();
        console.log( {username , dob})
    }

  return (
    <section className="counterApp">
          <article>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                type="text"
                id="username"
                name="username" value={username}
                onChange={e => setUsername(e.traget.value)}
              />
            </div>
            <div>
                <input type="date" id="dob" name="dob" value={dob} onChange={e=>setDob( e.traget.value)} />
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </article>
      </section>
  )
}

export default Datecomponent