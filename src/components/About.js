import { Container, Image, ListGroup } from 'react-bootstrap';
import Typed from 'react-typed';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const EducationElement = ({ title, subtitle, date, description }) => (
    <VerticalTimelineElement
      className="vertical-timeline-element--school"
      contentStyle={{ background: 'rgb(0, 51, 51)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(0, 51, 51)' }}
      date={date}
      dateClassName='glow'
      iconStyle={{ background: 'rgb(0, 51, 51)', color: '#fff' }}
      icon={<i className="fas fa-graduation-cap center-icon"></i>}
    >
      <h3 className="vertical-timeline-element-title glow">{title}</h3>
      <p className="vertical-timeline-element-subtitle">{subtitle}</p>
      <hr />
      {
          description.map((item) => (
              <p>{item}</p>
          ))
      }
  </VerticalTimelineElement>
);

// const CertificationElement = ({ title, subtitle, date, description }) => (
//   <VerticalTimelineElement
//     className="vertical-timeline-element--school"
//     contentStyle={{ background: 'rgb(102, 0, 0)', color: '#fff' }}
//     contentArrowStyle={{ borderRight: '7px solid  rgb(102, 0, 0)' }}
//     date={date}
//     dateClassName='glow'
//     iconStyle={{ background: 'rgb(102, 0, 0)', color: '#fff' }}
//     icon={<i className="fas fa-scroll center-icon"></i>}
//   >
//     <h3 className="vertical-timeline-element-title glow">{title}</h3>
//     <p className="vertical-timeline-element-subtitle">{subtitle}</p>
//     <hr />
//     {
//         description.map((item) => (
//             <p>{item}</p>
//         ))
//     }
//   </VerticalTimelineElement>
// );

const WorkElement = ({ title, subtitle, date, description }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--school"
    contentStyle={{ background: 'rgb(51, 51, 102)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(51, 51, 102)' }}
    date={date}
    dateClassName='glow'
    iconStyle={{ background: 'rgb(51, 51, 102)', color: '#fff' }}
    icon={<i className="fas fa-briefcase center-icon"></i>}
  >
    <h3 className="vertical-timeline-element-title glow">{title}</h3>
    <p className="vertical-timeline-element-subtitle">{subtitle}</p>
    <hr />
    {
        description.map((item) => (
            <p>{item}</p>
        ))
    }
  </VerticalTimelineElement>
);

const About = () => {
  return (
    <>
    <Container>
      <Container>
        <div>
          <Image
              className="mx-auto d-block"
              src="/img/gryffindor.gif" fluid
              width="100px"
              max-width="100%"
          />
        </div>
        <h1 className='glow'>About</h1>
        <div>
          <p>Hi, I'm Sapra.</p>
          <p>I am a <Typed
            strings={[
              'Computer Science student.',
              'security guy.',
              'software developer.',
              'competitive programmer.',
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop />
          </p>
        </div>
      </Container>
      <Container className="my-5">
          <h2 align="center" className='glow'>Media</h2>
          <hr/>
          <div className="my-5">
            <p>Sometimes I do stuff and people write about it.</p>
            <ListGroup a="ul">
              <li>
                <a href="https://research.securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass/" target="_blank" rel="noreferrer">
                  XSS on DOM Purify With mutation XSS | Securitum
                </a>
              </li>
              <li>
                <a href="https://twitter.com/IncubateIND/status/1140943559635292160" target="_blank" rel="noreferrer">
                  EESL Hackathon Runner up | WorldBank & ADB
                </a>
              </li>
            </ListGroup>
          </div>
      </Container>
      <Container className="my-5">
        <h2 align="center" className='glow'>Timeline</h2>
        <hr/>
        <VerticalTimeline>
        <WorkElement
            title="Security Engineer & Architect"
            subtitle="CRED"
            date="2021 - Now"
            description={[
              "Reported multiple critical CVE's to Apache Fineract ",
              "DevSecOps | Setup SAST in CI/CD pipeline.",
              "Application Security & Secure architecture"
            ]}
          />
          <WorkElement
            title="Backend Engineer"
            subtitle="SmartJoules"
            date="2017 - 2021"
            description={[
              "Sr. Backend Enginner.",
              "Security team lead"
            ]}
          />
          <WorkElement
            title="Cyber Security Freelancing"
            subtitle="Synack"
            date="2016"
            description={["Bug bounty and Penetration testing."]}
          />
          <EducationElement
            title="B.Tech Computer Science"
            subtitle="Dehradun Institute of Technology, University"
            date="2012 - 2016"
            description={[
              "Graduated with 8 CGPA / 3.36 GPA in bachelor of Computer Science.",
            ]}
          />
          <EducationElement
            title="High School"
            subtitle="Delhi Public School"
            date=" - 2012"
            description={[
              "Gold medalist, International Science Olympiad, 2011.",
              "Gold medalist, International Maths Olympiad, 2011.",
            ]}
          />
        </VerticalTimeline>
      </Container>
    </Container>
    </>
  );
}

export default About