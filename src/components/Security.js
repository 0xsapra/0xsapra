import { Row, Col, Image, Container, ListGroup } from 'react-bootstrap';

const ImgCol = ({url, imgSrc, caption, size}) => {
    return (
        <Col xs={12} sm={size} md={size} className="justify-content-center d-flex flex-column">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div className="img-col-div">
                    <Image 
                        className="mx-auto d-block"
                        src={imgSrc} fluid width="80%"
                    />
                </div>
                <p align="center">{caption}</p>
            </a>
        </Col>
    )
}

const CveItem = ({url, cveId, name, cvss}) => {
    return (
        <>
        <a rel="noopener noreferrer" target="_blank" href={url}>
            <b>{cveId}</b>
        </a>: CVSS {cvss} — {name}
        </>
    )
}

const Security = () => {
    return (
        <>
        <Container>
            <div>
                <Image
                    className="mx-auto d-block"
                    src="/img/slytherin.gif" fluid 
                    width="100px"
                    max-width="100%"
                />
            </div>
            <h1 className='glow'>Security</h1>
            <p>
                Information security is one of the many fields I'm passionate about.
            </p>
            <p>
                I primarily specialise in web security. In my free time, I play cybersecurity Capture the Flag (CTF) competitions
                with <a href="https://ctftime.org/team/130817" rel="noreferrer" target="_blank">Super Guesser</a>, 
                a International team I Co-founded.
            </p>
            <Container className="my-5">
                <h2 align="center" className='glow'>Stuff I Hacked</h2>
                {/* <div className="text-center">
                    View my <a href="https://hackerone.com/sapra" target="_blank" rel="noopener noreferrer">HackerOne Profile</a>
                </div> */}
                <hr/>
                <Row className="justify-content-center">
                    <ImgCol size="3" url="https://www.india.gov.in/" imgSrc="./img/security/govt-india.png" caption="Government of India"/>
                    <ImgCol size="3" url="https://intel.com/" imgSrc="./img/security/intel.png" caption="Intel"/>
                    <ImgCol size="3" url="https://www.yahoo.com/" imgSrc="./img/security/yahoo1.png" caption="Yahoo"/>
                    <ImgCol size="3" url="https://bugbounty.att.com/hof.php" imgSrc="./img/security/att.svg" caption="AT&T"/>
                </Row>
                <Row className="justify-content-center">
                    <ImgCol size="3" url="https://secure.sony.com/hallofthanks.html" imgSrc="./img/security/sony.svg" caption="Sony"/>
                    <ImgCol size="3" url="https://dell.com/" imgSrc="./img/security/dell.png" caption="Dell"/>
                    <ImgCol size="3" url="https://www.fluxiom.com/security/" imgSrc="./img/security/fluxiom.svg" caption="Fluxiom"/>
                </Row>
                <Row className="justify-content-center my-5">
                    <p className="text-center">
                        This list is non-exhaustive and only includes public information. It does not include any private engagements.
                    </p>
                </Row>
            </Container>
            <Container>
                <Row className="my-5">
                    <h2 align="center" className='glow'>CVEs</h2>
                    <hr/>
                    <div className="my-5">
                        <ListGroup a="ul">
                            <li>
                                <CveItem 
                                    cveId="CVE-2022-44635"
                                    cvss="8.8 (HIGH)"
                                    name="Apache Fineract RCE via path traversal"
                                    url="https://lists.apache.org/thread/t8q6fmh3o6yqmy69qtqxppk9yg9wfybg"></CveItem>
                                <CveItem 
                                    cveId="CVE-2024-41874"
                                    cvss="9.8 (Critical)"
                                    name="Adobe Coldfusion Arbitrary code execution"
                                    url="https://helpx.adobe.com/security/products/coldfusion/apsb24-71.html"></CveItem>
                            </li>
                        </ListGroup>
                    </div>
                    <div>
                        <p>
                            CVSS scores are provided by the <a href="https://nvd.nist.gov/" target="_blank" rel="noopener noreferrer">National Vulnerability Database</a>.
                            When undergoing analysis by the NVD, the CVSS score is not yet available.
                        </p>
                    </div>
                </Row>
                <Row>
                    <h2 align="center" className='glow'>Competitions</h2>
                    <hr/>
                    <Col xs={12} sm={6} md={6}>
                        <div className="my-5">
                            <div className="text-center">
                                <h3 className='glow'>International Competitions</h3>
                            </div>
                            <ListGroup a="ul">
                                <li>
                                    🇺🇸 Defcon CTF 2023 — 4th
                                </li>
                                <li>
                                    Security Fest 2023 — 🥇 (1st position)
                                </li>
                                <li>
                                    🇯🇵 LINE CTF 2022 — 🥇 (1st position)
                                </li>
                                <li>
                                    Hack.lu CTF 2021 — 🥈 (2nd position)
                                </li>
                                <li>
                                    🇯🇵 SECCON CTF 2021 - 🥇 (1st position), (5th finals)
                                </li>
                                <li>
                                    🇨🇳 N1CTF 2021 — 🥇 (1st position)
                                </li>
                                <li>
                                    🇺🇸 Perfect Blue ctf 2021 — 🥇(1st position)
                                </li>
                                <li>
                                    Zer0pts CTF 2021 — 🥇 (1st position)
                                </li>
                                <li>        
                                    🇹🇼 Balsn CTF 2020 — 🥇 (1st position)
                                </li>
                                <li>
                                    KipodAfterFree CTF 2020 — 🥇 (1st position)
                                </li>
                                <li>
                                    Many more on the team's <a href="https://ctftime.org/team/151372" rel="noreferrer" target="_blank">CTFtime Profile</a>
                                </li>
                            </ListGroup>
                        </div>
                    </Col>
                    {/* <Col xs={12} sm={6} md={6}>
                        <div className="my-5">
                            <div className="text-center">
                                <h3 className='glow'>Indian Competitions</h3>
                            </div>
                            <ListGroup a="ul">
                                
                                
                            </ListGroup>
                        </div>
                    </Col> */}
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <div className="my-5">
                            <div className="text-center">
                                <h3 className='glow'>Challenge Author</h3>
                            </div>
                            <ListGroup a="ul">
                                <li>
                                    CRED CTF Challenge 2022
                                </li>
                                <li>
                                    BSIDES CTF 2022
                                </li>
                                {/* <li>
                                    Hack the Box CTFs
                                </li> */}
                            </ListGroup>
                        </div>
                    </Col>
                    {/* <Col xs={12} sm={6} md={6}>
                        <div className="my-5">
                            <div className="text-center">
                                <h3 className='glow'>CTF Organizer</h3>
                            </div>
                            <ListGroup a="ul">
                                <li>
                                    SEETF 2023 — Coming soon!
                                </li>
                            </ListGroup>
                        </div>
                    </Col> */}
                </Row>
            </Container>
            {/* <Container className="my-5">
                <h2 align="center" className='glow'>Certifications</h2>
                <hr/>
                <Row className="justify-content-center">
                    <ImgCol size="3" url="https://www.credential.net/396f54b0-5182-4d28-bf3a-09df413eb817" imgSrc="./img/security/OSWE.png" 
                        caption="Offensive Security Web Expert"/>
                    <ImgCol size="3" url="https://www.credential.net/e23eb90d-5090-499e-88c1-a39ce2d5892d" imgSrc="./img/security/OSCP.png" 
                        caption="Offensive Security Certified Professional"/>
                    <ImgCol size="3" url="https://portswigger.net/web-security/e/c/8dccc9f64c35e1e1" imgSrc="./img/security/BSCP.png" 
                        caption="Burp Suite Certified Practitioner"/>
                </Row>
            </Container> */}
        </Container>
        </>
    )
}

export default Security;