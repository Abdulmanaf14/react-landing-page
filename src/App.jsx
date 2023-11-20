import "./App.css"
import exampleImage from './assets/first.jpg';
import exampleImage2 from './assets/second.jpg';
import exampleImage3 from './assets/third.jpg';


function HomePage() {
    return (
       <header className="header-container">
                <h1>AIPatrn</h1>
                <nav className="nav-list">
                    <ul className="list">
                        <li><a>Home page</a></li>
                        <li><a>Penerator</a></li>
                        <li><a>Pricing-plan</a></li>
                        <li><a>Blog-news</a></li>
                    </ul>
                    <ul className="list">
                        <li><a>About us</a></li>
                        <li><a>Collection</a></li>
                        <li><a>Fetures</a></li>
                        <li><a>Career</a></li>
                    </ul>
                </nav>
                <button className="button-17" style={{ width: "100px" }}>Menu</button>
            </header>
    );
}

function ContentSection() {
    return (
        <div style={{padding: "20px"}}>
            <p style={{fontSize: "24px"}}>Revelutionize Your</p>
            <h1 style={{fontSize: "34px"}}>Creative Projects with <br /> the Ultimate AI-Powered <br /> pattern <button className="button-17" style={{backgroundColor: "black", color:"white"}}>START GENERATING</button>  <span style={{fontSize:'16px',color:'grey'}}>The Next generation <span style={{fontWeight:'bolder',color:'black'}}>Production</span> for Designers</span> </h1>
        
        </div>
    )

}
//   const imgStyle ={
//     width :'50px'
//   }
const textStyle = {
    position: 'absolute',
    bottom: 100,
    left: 0,
    width: '100%',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    fontSize : "36px"
  };
function ImageSection() {
    return (
        <div>
            <div style={{ display: 'flex' }}>
            <div style={{ width: '33%', position: 'relative', display:'inline-flex'}}>
          <img src={exampleImage} alt="Example 1" style={{ width: '100%' }} />
          <div style={{ position: 'absolute',
    bottom: 120,
    left: 0,
    color: 'white',
    padding: '10px',
    }}>
            <h4 style={{fontSize:'36px'}}>Learn from best mentors</h4>
            <button className="button-17">Start Learning</button>
          </div>
        </div>
        <div style={{ width: '33%', position: 'relative',display:'inline-flex' }}>
          <img src={exampleImage2} alt="Example 1" style={{ width: '100%' }} />
        <div style={{  position: 'absolute',
    bottom: 100,
    left: 0,
    color: 'white',
    padding: '10px',
    // textAlign: 'center',
    textDecoration: "underline",
    fontSize: '26px'
   
   }}>
            <p>Free Edit</p>
            <p>Interactive</p>
            <p>Easy Interface</p>
            <p>Comapre to other</p>
        </div>
        </div>
        <div style={{ width: '34%', position: 'relative',display:'inline-flex' }}>
          <img src={exampleImage3} alt="Example 1" style={{ width: '100%' }} />
          {/* <p style={textStyle}>+ 20 K <span style={{fontSize:'16px'}}>Glass Patterns Generated this <br />week in the first release</span> </p> */}
          <div style={{  position: 'absolute',
    bottom: 100,
    left: 0,
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    display:'flex'
   }}> 
            <div>
                <p style={{fontSize:'62px',fontFamily:"monospace"}}>+2K</p>
            </div >
            <div style={{placeSelf: "center",paddingLeft:'10px'}}>
            <span>Glass Patterns Generated this <br />week in the first release</span>
            </div>
          </div>
        </div>
                {/* <img src={exampleImage} style={{ width: '33%' }} />
                <img src={exampleImage2} style={{ width: '33%' }} />
                <img src={exampleImage3} style={{ width: '34%' }} /> */}
            </div>
            {/* <div style={{ backgroundColor: 'red;', padding: 30 }}>
            </div> */}

          
        </div>
    )
}

export default function MyApp() {
    return (
        <div>
            <HomePage />
            <ContentSection />
            <ImageSection />
        </div>
    );
}

