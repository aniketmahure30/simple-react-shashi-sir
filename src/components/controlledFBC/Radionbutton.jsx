import React, {useState} from 'react'


const Radionbutton = () => {

    let  [username ,setUsername]=useState("")
    let [ gender , setGender] = useState(false)


    let handleSubmit =(e)=>{
        e.preventDefault();
        console.log(e)
        console.log( {username , gender})
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
                name="username"
                value={username}
                onChange={e => setUsername(e.traget.value)}
              />
            </div>
            <div>

                <aside onChange={e=> setGender(e.traget.value)}>
                    <input type ="radio" name="gender" id="gender" value="male" /> Male 
                    <input type ="radio" name="gender" id="gender" value="female" /> Female 

                </aside>
              
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </article>
      </section>
  )
}

export default Radionbutton