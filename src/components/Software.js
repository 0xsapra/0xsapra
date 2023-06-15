import { Row, Col, Image, Container, Badge, ListGroup } from 'react-bootstrap';
import { 
    SiFlask, SiReact, SiJavascript, SiPython, SiBootstrap, SiDjango, SiExpress, SiNodedotjs, SiDocker, SiVagrant,
    SiSpringboot, SiGo
} from 'react-icons/si';
import { 
    DiJava, DiDatabase
} from 'react-icons/di';
import {
    AiFillCode
} from 'react-icons/ai';
import {
    GiPlatform
} from 'react-icons/gi';

import { FaChrome } from 'react-icons/fa';
import React from 'react';

const FlaskBadge = () => {
    return (
        <Badge bg="success"><SiFlask/> Flask</Badge>
    )
};

const GoBadge = () => {
    return (
        <Badge bg="success"><SiGo/> GO</Badge>
    )
};

const ChromeBadge = () => {
    return (
        <Badge bg="secondary"><FaChrome/> Chrome Extension</Badge>
    )
};

const ReactBadge = () => {
    return (
        <Badge bg="primary"><SiReact/> React</Badge>
    )
}

const BootstrapBadge = () => {
    return (
        <Badge bg="danger"><SiBootstrap/> Bootstrap</Badge>
    )
}

const JavaScriptBadge = () => {
    return (
        <Badge bg="warning" text="dark"><SiJavascript/> JavaScript</Badge>
    )
}

const ExpressBadge = () => {
    return (
        <Badge bg="white" text="dark"><SiExpress/> Express</Badge>
    )
}

const PythonBadge = () => {
    return (
        <Badge bg="success" text="dark"><SiPython/> Python</Badge>
    )
}

const Software = () => {
    return (
        <>
        <Container>
            <div>
                <Image
                    className="mx-auto d-block"
                    src="/img/ravenclaw.gif" fluid 
                    width="100px"
                    max-width="100%"
                />
            </div>
            <h1 className='glow'>Software</h1>
            <p>
                I love problem solving.
            </p>
            <p>
                I enjoy building scalable, secure, and performant software systems.
            </p>
            <Container className="my-5">
                <h2 align="center" className='glow'>Stuff I Made</h2>
                <hr/>
                <Row>
                    <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                        <h2>
                            <a href="https://github.com/ret2jazzy/disasm.pro" rel="noreferrer" target="_blank">Disasm.pro</a>
                        </h2>
                        <p>
                            Multi-architecture realtime assembler/disassembler with line-to-line correlation.
                        </p>
                        <p>
                            live version is currently up at https://disasm.pro/
                        </p>
                        <div>
                            <PythonBadge/> <JavaScriptBadge/>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        <Image src="./img/software/disasm.png" fluid width="90%" rounded/>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                    <h2><a href="https://github.com/0xsapra/photoshop" rel="noreferrer" target="_blank">Photoshop for WEB</a></h2>
                        <p>
                            A WEB application that allows editing photos. This was made when Ai was not that Fancy and we had to use 
                            complex algorithms to perform basic Editing.
                        </p>
                        <div>
                            <JavaScriptBadge/>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        <Image src="./img/software/photo.png" fluid width="90%" rounded/>
                    </Col>
                </Row>
                <hr/>
            </Container>
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={6} className="my-5">
                        <h2 align="center" className='glow'>Technologies I Use</h2>
                        <hr/>
                        <div className="my-5">
                            <ListGroup a="ul">
                                <li>
                                    <AiFillCode/> <b className='glow'>Programming Languages: </b> C/C++, Python, NodeJS, Golang, JavaScript, Java, Solidity, x86 Assembly and Bash.
                                </li>
                                <li>
                                    <GiPlatform/> <b className='glow'>Platforms: </b>  AWS, React, JupyterNotebook, truffle suite, hardhat, web3, kafka, rabbitmq, redis,
                                     Express, GraphQL, Docker, Github/Bitbucket.
                                </li>
                                <li>
                                    <DiDatabase/> <b className='glow'>Databases:</b> DynamoDB, Mysql, sqlite, MongoDB, Elastic Search & AWS Timeseries.
                                </li>
                                <li>
                                    <b className='glow'>Security tools & Framework:</b> Burp Suite, IDA Pro, LXC, Seccomp, codeQL & gdb.
                                </li>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="my-5">
                        <h2 align="center" className='glow'>Competitions</h2>
                        <hr/>
                        <div className="my-5">
                            <ListGroup a="ul">
                                <li>
                                    Competitive programmer @ <a href="https://leetcode.com/0xsapra/" rel="noreferrer" target="_blank">Leetcode </a>
                                </li>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    )
}

export default Software;