import { Container, Row , Col, Button} from "react-bootstrap"
import LoginNavBar from "../login-signup/LoginNavBar"
import { Link } from "react-router-dom"
import "../../styleSheets/landingPageStyle.css"
import ThreeScene from "../ThreeJS/three-scene"
import SpaceAcesLogo from "./SpaceAcesLogo"
import LogInButton from "../../SingleComponents/logInButton"

const LandingPage = () => {

    return(
        <div className="landing-page-container">

        <div id="stars"></div>
       <div id="stars2"></div>
       <div id="stars3"></div>
    
        <div className="starry-background m-0 d-flex align-items-center flex-column"> 
 
            {/* <Container className="landing-folder parent-size m-0 p-0"  > */}
             {/* <ThreeScene/> */}
             <Row className="m-0 p-0 ">

            <SpaceAcesLogo/>

             </Row>
             <Container className="m-0 p-0 justify-content-center">

             <LogInButton/>
             </Container>
             
            {/* </Container> */}
            <Row className="mt-5 m-0 p-0 data-pad-container">
            <img src="https://i.ibb.co/NSksJv3/Welcome-Space-Ace.png" style={{width: "1000px"}}/>
            </Row>
            {/* odyssey vtt section */}
            <Row className="my-5 mx-0 p-0" style={{width:"100%"}}>
                <Col md={6} className=" mx-0 justify-content-center" style={{paddingLeft:"50px"}}>

            <h1 className="tethered-heading text-center">
                Odyssey Virtual Tabletop - The Basics
                </h1>
            
                <div style={{paddingLeft:"100px"}}>
                    <ul className=" d-flex flex-column justify-content-between mt-2">
                        <li className="mt-2 d-flex justify-content-start align-items-center text-center">
                <i className=" bi bi-check-square" style={{color:"green", fontSize: "30px"}}></i> <span style={{paddingLeft:"10px"}}>
                    A Virtual Tabletop focused on OSR games and indie developer support.
                    </span>

                        </li>
                        <li className="mt-2 d-flex justify-content-start align-items-center text-center">
                <i className=" bi bi-check-square" style={{color:"green", fontSize: "30px"}}></i> <span style={{paddingLeft:"10px"}}>
                    Aims to boost immersion and limit distractions outside of the genre.
                    </span>

                        </li>
                        <li className="mt-2 d-flex justify-content-start align-items-center text-center">
                <i className=" bi bi-check-square" style={{color:"green", fontSize: "30px"}}></i> <span style={{paddingLeft:"10px"}}>
                A network of smaller virtual tabletops. 
                    </span>

                        </li>
                        <li className="mt-2 d-flex justify-content-start align-items-center text-center">
                <i className=" bi bi-check-square" style={{color:"green", fontSize: "30px"}}></i> <span style={{paddingLeft:"10px"}}>
                Speeds up gameplay, dice rolling and rules searching.
                    </span>

                        </li>
                        <li className="mt-2 d-flex justify-content-start align-items-center text-center">
                <i className=" bi bi-x-square" style={{color:"red", fontSize: "30px"}}></i> <span style={{paddingLeft:"10px"}}>
                    Not a source of nutrition.
                    </span>

                        </li>

                    </ul>
                </div>
                </Col>
                <Col md={6} className="d-flex justify-content-center">
                <div data-augmented-ui="  tl-round t-clip tr-2-clip-x br-clip bl-2-clip-x both">
                <img src="https://i.ibb.co/XXTGBQ3/Odyssey-VTTLogo.png" alt="Odyssey-VTTLogo" border="0"/>
                </div>
                </Col>
                </Row> 
            {/* odyssey vtt section  End*/}

            <Row className="mt-5 justify-content-center mb-5 align-items-center" >
                <Col md={6} className="d-flex justify-content-center align-items-center">
                <div data-augmented-ui="  tl-clip-inset tr-clip-inset r-clip-y br-clip-inset bl-clip-inset l-clip-y both">
                    <img src="https://i.ibb.co/yVhdVhC/2262.jpg" style={{maxWidth: "50vw", zIndex: "100000"}}/>
                    </div>
                </Col>
                    
                <Col md={6} className=" justify-content-center align-items-center ">

                {/* <img src="/imgFiles/2006.jpg" style={{width: "100vw", height: "100%"}}/> */}
                <h1 className="tethered-heading text-center">
                Space Aces - What Is It?
                </h1>
            
                <div>
                    <ul className=" d-flex flex-column justify-content-between mt-2">
                        <li className="mt-2 d-flex justify-content-start align-items-center text-center">
                <i className=" bi bi-check-square" style={{color:"green", fontSize: "30px"}}></i> <span style={{paddingLeft:"10px"}}>
                    Space Aces is an RPG homage to happy, hopeful, & campy Sci Fi.
                    </span>

                        </li>
                        <li className="mt-2 d-flex justify-content-start align-items-center text-center">
                <i className=" bi bi-check-square" style={{color:"green", fontSize: "30px"}}></i> <span style={{paddingLeft:"10px"}}>
                    Lightweight and easy to use, tools over rules system.
                    </span>

                        </li>
                        <li className="mt-2 d-flex justify-content-start align-items-center text-center">
                <i className=" bi bi-check-square" style={{color:"green", fontSize: "30px"}}></i> <span style={{paddingLeft:"10px"}}>
                A toolbox for GM-led groups, co-op & solo gaming.
                    </span>

                        </li>
                        <li className="mt-2 d-flex justify-content-start align-items-center text-center">
                <i className=" bi bi-check-square" style={{color:"green", fontSize: "30px"}}></i> <span style={{paddingLeft:"10px"}}>
                Packed with over 75 tables, oracles & procedural generators.
                    </span>

                        </li>
                        <li className="mt-2 d-flex justify-content-start align-items-center text-center">
                <i className=" bi bi-x-square" style={{color:"red", fontSize: "30px"}}></i> <span style={{paddingLeft:"10px"}}>
                    A three-headed donkey named George.
                    </span>

                        </li>

                    </ul>
                </div>
                </Col>
            </Row>
            <Container>
                <Row className="text-center">
                <h1>What Can You Do In Space Aces?</h1>
                </Row>
                <Row className="justify-content-center align-items-center">
                <Col md={4} className="text-center"><img src="/imgFiles/green-ship.png" width="200px"/></Col>
                <Col md={8} className=""><span><b>Generate over 100 million missions</b></span></Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                <Col md={4} className="text-center"><img src="/imgFiles/green-ship.png" width="200px"/></Col>
                <Col md={8} className=""><span><b>Delve dangerous space wrecks and ruins</b></span></Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                <Col md={4} className="text-center"><img src="/imgFiles/green-ship.png" width="200px"/></Col>
                <Col md={8} className=""><span><b>Hex crawl thousands of unique and populated planets</b></span></Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                <Col md={4} className="text-center"><img src="/imgFiles/green-ship.png" width="200px"/></Col>
                <Col md={8} className=""><span><b>Generate endless sectors of space and travel them with over 10,000 space travel encounters</b></span></Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                <Col md={4} className="text-center"><img src="/imgFiles/green-ship.png" width="200px"/></Col>
                <Col md={8} className=""><span><b>Simple character creation or complex life path generation to create a Space Ace with baggage!</b></span></Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                <Col md={4} className="text-center"><img src="/imgFiles/green-ship.png" width="200px"/></Col>
                <Col md={8} className=""><span><b>Quick on-the-fly NPC generation complete with personality and SECRETS???</b></span></Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                <Col md={4} className="text-center"><img src="/imgFiles/green-ship.png" width="200px"/></Col>
                <Col md={8} className=""><span><b>Craft unique gizmos & gadgets, woo beasties to become your besties, battle massive monsters in mega mechs, travel the cosmos in one-of-a-kind starships, and more???</b></span></Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                <Col md={4} className="text-center"><img src="/imgFiles/green-ship.png" width="200px"/></Col>
                <Col md={8} className=""><span><b>Engage in simple space combat that keeps the whole crew engaged. Face off against wandering omnipotent entities. Explore thousands of space anomalies.</b></span></Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                <Col md={4} className="text-center"><img src="/imgFiles/green-ship.png" width="200px"/></Col>
                <Col md={8} className=""><span><b>Dare to play on Shark Jumping Mode, Hard Mode, and so much more??? all in 24 full-color richly illustrated pages.</b></span></Col>
                </Row>
            </Container>
            <Container className="mt-5 mb-5 justify-content-center">
                <Row className="mb-3 text-center">
                    <h1 classNAME="fw-bold">The Author - Support The Game</h1>
                </Row>

            <Row className="justify-content-between align-items-center">
                <Col md={6} className="justify-content-center align-items-start d-flex">
                <div data-augmented-ui="  all-hex border " className="tester" style={{width: "50%"}}>
                    <img src="https://i.ibb.co/NjXrdBC/astronaut-bear-og.jpg" style={{width: "100%"}} />
                    </div>
                    </Col>
                <Col md={6}>
                    <span>Space Aces was written / created by Stephen Dick a.k.a P0rthos and successfully Kickstarted in 2021.  The idea was to provide a toolbox for players to play the game in the setting of their choice, or develop/discover it through play.
                    </span>
                    <br/>
                    <p>Stephen has just wrapped up another Space Aces Kickstarter <b>Space Aces: Voyages In Infinite Space</b>, we recommend you check it out </p>
                    <p>Want to support the game? Then buy a copy !</p>
                    <br/>
                    <div className="d-flex align-items-center justify-content-around">
                    <a href="https://p0rthos47.itch.io/space-aces-tng" target="_blank">
                    <img src="/imgFiles/badge-color.svg" style={{maxWidth:"200px", cursor: "pointer"}}/>
                    </a>
                    <a href="https://www.kickstarter.com/projects/spaceaces/space-aces-voyages-in-infinite-space-galactic-sandbox-ttrpg" target="_blank">
                    <img src="https://ksr-static.imgix.net/xr7jn0op-kickstarter-logo-k-green.png?ixlib=rb-2.1.0&s=c6655f6eaeaadc3f6544d877efb2b098" style={{maxWidth:"100px", cursor: "pointer", zIndex: "300000000"}}/>
                    </a>
                    </div>
                    </Col>
            </Row>
            <Row className="justify-content-center align-items-center">
                <Col md={12}>
                    <div data-augmented-ui="tl-clip-y tr-clip-y br-round-inset b-scoop-xy bl-round-inset">

                    </div>
                </Col>
            </Row>
            </Container>
        </div>
        </div>
    )
}

export default LandingPage