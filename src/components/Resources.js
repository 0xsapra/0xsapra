import { Row, Col, Image, Container, ListGroup, Tab } from 'react-bootstrap';

const Resources = () => {

    return (
        <>
        <Container>
            <div>
                <Image
                    className="mx-auto d-block"
                    src="/img/hufflepuff.gif" fluid
                    width="100px"
                    max-width="100%"
                />
            </div>
            <Container>
                <h1 className='glow'>Resources</h1>
                <p>
                    A compilation of free resources that I've produced over the years.
                </p>
                <Container className="my-5">
                    <h2 align="center" className='glow'>Talks / Blogs</h2>
                    <hr/>
                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h3 className="glow">Finding RCE Gadget for Java Deserialization</h3>
                            <div className="my-2">
                                <Row>
                                    <p class="lead">0 CTF Qualifiers 2022 - Web Challenge</p>
                                    <p>
                                        A walkthrough of the web challenge hessian-onlyJdk from the 0 CTF Qualifiers 2022.
                                    </p>
                                    <p>
                                        <a href="https://0xsapra.github.io/website//0ctf-java-web" target="_blank" rel="noopener noreferrer">Blog Post</a>
                                    </p>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="/img/talks/blog-0ctf.png" fluid width="90%" rounded/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h3 className="glow">Exploiting Dependency Confusion</h3>
                            <div className="my-2">
                                <Row>
                                    <p>
                                        Step by step guide to exploit a demo application vulnerable to Dependency Confusion attack.
                                    </p>
                                    <p>
                                        <a href="https://0xsapra.github.io/website//Exploiting-Dependency-Confusion" target="_blank" rel="noopener noreferrer">Blog Post</a>
                                    </p>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="/img/talks/diff-conf.png" fluid width="90%" rounded/>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h3 className="glow">River Valley High School CTF Club</h3>
                            <div className="my-2">
                                <Tab.Container defaultActiveKey="#link1">
                                <Row>
                                    <Col sm={6} className="my-2">
                                        <ListGroup>
                                            <ListGroup.Item action href="#link1" variant="dark">
                                                Intro to Ethical Hacking
                                            </ListGroup.Item>
                                            <ListGroup.Item action href="#link2" variant="dark">
                                                Cross-Site Scripting
                                            </ListGroup.Item>
                                            <ListGroup.Item action href="#link3" variant="dark">
                                                Server Side Attacks
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={6} className="my-2">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="#link1">
                                            <p>
                                                A gentle introduction to ethical hacking and web technologies.
                                            </p>
                                            <a href="/pdf/talks/rvctf/01-Intro-To-Ethical-Hacking.pdf" target="_blank" rel="noopener noreferrer">Download</a>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#link2">
                                            <p>
                                                Why client side attacks matter and how to perform an XSS attack.
                                            </p>
                                            <a href="/pdf/talks/rvctf/02-Cross-Site-Scripting.pdf" target="_blank" rel="noopener noreferrer">Download</a>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#link3">
                                            <p>
                                                Server-side request forgery, SQL injection, JWT attacks, and HTTP request smuggling.
                                            </p>
                                            <a href="/pdf/talks/rvctf/03-Server-Side-Attacks.pdf" target="_blank" rel="noopener noreferrer">Download</a>
                                        </Tab.Pane>
                                    </Tab.Content>
                                    </Col>
                                </Row>
                                </Tab.Container>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="/img/talks/RVCTF.jpeg" fluid width="90%" rounded/>
                        </Col>
                    </Row> */}
                    
                    
                    {/* Others */}

                    {/* <h2 align="center" className='glow'>Notes</h2>
                    <hr/>
                    <Row>
                        <Col className="justify-content-center d-flex flex-column my-5">
                            <h3 className="glow">A Levels</h3>
                            <div className="my-2">
                                <Tab.Container defaultActiveKey="#link1">
                                <Row>
                                    <Col sm={6} className="my-2">
                                        <ListGroup>
                                            <ListGroup.Item action href="#link1" variant="dark">
                                                H2 Computing
                                            </ListGroup.Item>
                                            <ListGroup.Item action href="#link2" variant="dark">
                                                H2 Economics
                                            </ListGroup.Item>
                                            <ListGroup.Item action href="#link3" variant="dark">
                                                H1 General Paper
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={6} className="my-2">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="#link1">
                                            <p>
                                                Definitions and qualitative answers.
                                            </p>
                                            <a href="/pdf/notes/a-level/9597 Definitions and Qualitative Answers.pdf" target="_blank" rel="noopener noreferrer">Download</a>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#link2">
                                            <p>
                                                Case study question notes.
                                            </p>
                                            <a href="/pdf/notes/a-level/Econs CSQ Notes.pdf" target="_blank" rel="noopener noreferrer">Download</a>
                                            <hr/>
                                            <p>
                                                Essay content and evaluation points.
                                            </p>
                                            <a href="/pdf/notes/a-level/Econs Essay Points and EV.pdf" target="_blank" rel="noopener noreferrer">Download</a>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#link3">
                                            <p>
                                                Guide to approaching questions and content examples.
                                            </p>
                                            <a href="/pdf/notes/a-level/GP Notes.pdf" target="_blank" rel="noopener noreferrer">Download</a>
                                        </Tab.Pane>
                                    </Tab.Content>
                                    </Col>
                                </Row>
                                </Tab.Container>
                            </div>
                        </Col>
                    </Row> */}
                </Container>
            </Container>
        </Container>
        </>
    )
}

export default Resources;