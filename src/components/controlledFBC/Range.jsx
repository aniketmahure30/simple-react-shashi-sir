import React , {useState} from 'react'

const Range = () => {

    let  [username ,setUsernmae]=useState("")
    let [price ,setPrice]= useState("")


    let handleSubmit =(e)=>{
        e.preventDefault();
        console.log( {username , range})
    }
  return (
     <section className="counterApp">
          <article>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                type="text"
                id="username"
                name="username"
                onChange={e => setUsernmae(e.traget.value)}
              />
            </div>
            <div>
            <input type="range" id="price" min={0} max={100}
             value={price}
             onChange={e=> setPrice(e.traget.value)} />
             <span> {price} </span>
            
              
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </article>
      </section>
  )
}

export default Range