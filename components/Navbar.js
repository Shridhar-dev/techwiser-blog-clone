import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function Navbar() {
  const [inputer, setInput] = useState('')

    let Normal = <nav className="navbar navbar-expand-lg navbar-light px-5" style={{background:'black',color:'white'}}>
  <div className="container-fluid px-4 py-1">
         <Image src="/TechWiser-logo-5.png" height={75} width={420}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{filter:'invert(1)'}}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto" >
        <Link href="/">
          <a className="nav-link nl active mx-2" aria-current="page">HOME</a>
        </Link>
        <Link href="/howto">
          <a className="nav-link nl mx-2">HOW TO</a>
        </Link>
        <Link href="/internet">
          <a className="nav-link nl mx-2">INTERNET</a>
        </Link>           
        <a className="nav-link nl extend mx-2" href="#" >
           MORE
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-down mx-1" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
            <div className="extend-content">
              <h6 className="m-0 p-0 my-3 mx-3 more-link" >ABOUT US</h6>
              <h6 className="m-0 p-0 my-3 mx-3 more-link" >CONTACT US</h6>
              <h6 className="m-0 p-0 my-3 mx-3 more-link" >ADVERTISE</h6>
              <h6 className="m-0 p-0 my-3 mx-3 more-link" >PRIVACY POLICY</h6>
              <h6 className="m-0 p-0 my-3 mx-3 more-link" >CAREERS</h6>
            </div>
        </a>            
        <a className="nav-link mx-2 d-none d-lg-block" href="#"  onClick={()=>{setSearchBar(Searcher)}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        </a>
      </div>
    </div>
  </div>
</nav>


    const [SearchBar, setSearchBar] = useState( Normal )

    let Searcher = <nav className="navbar navbar-expand-lg navbar-light px-5" style={{background:'black',color:'white'}}>
    <div className="container-fluid px-4 py-1">
          <form>
            <input placeholder="Type Here" onChange={(e)=>setInput(e.target.value)} value={inputer}  className="py-3" style={{height:'100%',width:'80%',background:'black',outline:'none',border:'none',color:'white'}}></input>
          </form>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto" >
                  
          <a className="nav-link mx-2" href="#" style={{color:'white'}} onClick={()=>{setSearchBar(Normal)}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          </a>
        </div>
      </div>
    </div>
  </nav>

    return (
       SearchBar 
    )
}

export default Navbar
