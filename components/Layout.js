import Footer from "./Footer"
import Navbar from "./Navbar"

function Layout(props) {
    return (
        <div className="page_main" style={{minHeight:'100vh'}}>
            <Navbar />
                <div className="mx-5">
                    <div className="mx-3"> 
                        {props.children}
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Layout
