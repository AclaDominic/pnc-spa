import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { FaUser, FaBirthdayCake, FaVenusMars, FaGraduationCap, FaUsers, FaArrowLeft } from "react-icons/fa";

const About = () => {
  const members = [
    { 
      id: 'patrick-aidalla',
      name: "Patrick Aidalla", 
      age: 21, 
      gender: "Male", 
      program: "BSIT", 
      section: "4th Year",
      introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    { 
      id: 'allen-jasper-ararao',
      name: "Allen Jasper Ararao", 
      age: 22, 
      gender: "Male", 
      program: "BSIT", 
      section: "4th Year",
      introduction: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { 
      id: 'carl-lawrence-antioquia',
      name: "Carl Lawrence Antioquia", 
      age: 21, 
      gender: "Male", 
      program: "BSIT", 
      section: "4th Year",
      introduction: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    { 
      id: 'charles-angeles',
      name: "Charles Angeles", 
      age: 23, 
      gender: "Male", 
      program: "BSIT", 
      section: "4th Year",
      introduction: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    },
    { 
      id: 'dominic-acla',
      name: "Dominic Acla", 
      age: 22, 
      gender: "Male", 
      program: "BSIT", 
      section: "4th Year",
      introduction: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa."
    },
    { 
      id: 'lanz-aerol-ardenio',
      name: "Lanz Aerol Ardenio", 
      age: 21, 
      gender: "Male", 
      program: "BSIT", 
      section: "4th Year",
      introduction: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est."
    },
    { 
      id: 'kyo-abaquita',
      name: "Kyo Abaquita", 
      age: 20, 
      gender: "Male", 
      program: "BSIT", 
      section: "4th Year",
      introduction: "Omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus."
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<TeamList members={members} />} />
      <Route path="team/:memberId" element={<TeamMemberProfile members={members} />} />
    </Routes>
  );
};

const TeamList = ({ members }) => {
  return (
    <section id="about" className="section" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)', paddingTop: '5rem', paddingBottom: '5rem', minHeight: 'calc(100vh - 160px)' }}>
      <Container>
        <h2 className="section-title text-center mb-5">Meet Our Team</h2>
        <p className="text-center lead mb-5" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
          We are a dedicated team of BSIT students passionate about web development and technology.
        </p>
        <Row className="g-4 justify-content-center">
          {members.map((member, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="h-100 text-center shadow-sm border-0" style={{ transition: 'all 0.3s ease' }}>
                <Card.Body className="p-4">
                  <div 
                    className="d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: '80px',
                      height: '80px',
                      margin: '0 auto',
                      background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(46, 204, 113, 0.1))',
                      borderRadius: '50%'
                    }}
                  >
                    <FaUser size={40} style={{ color: 'var(--primary-color)' }} />
                  </div>
                  <Card.Title className="h5 mb-3" style={{ color: 'var(--dark-color)', fontWeight: '600' }}>
                    {member.name}
                  </Card.Title>
                  <div className="text-center" style={{ fontSize: '0.95rem' }}>
                    <p className="mb-2 d-flex align-items-center justify-content-center">
                      <FaBirthdayCake className="me-2" style={{ color: 'var(--primary-color)' }} />
                      <strong className="me-2">Age:</strong> {member.age}
                    </p>
                    <p className="mb-2 d-flex align-items-center justify-content-center">
                      <FaVenusMars className="me-2" style={{ color: 'var(--primary-color)' }} />
                      <strong className="me-2">Gender:</strong> {member.gender}
                    </p>
                    <p className="mb-2 d-flex align-items-center justify-content-center">
                      <FaGraduationCap className="me-2" style={{ color: 'var(--primary-color)' }} />
                      <strong className="me-2">Program:</strong> {member.program}
                    </p>
                    <p className="mb-3 d-flex align-items-center justify-content-center">
                      <FaUsers className="me-2" style={{ color: 'var(--primary-color)' }} />
                      <strong className="me-2">Section:</strong> {member.section}
                    </p>
                    <Link to={`/about/team/${member.id}`}>
                      <Button variant="primary" size="sm">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const TeamMemberProfile = ({ members }) => {
  const { memberId } = useParams();
  const member = members.find(m => m.id === memberId);

  if (!member) {
    return (
      <Container className="mt-5">
        <div className="alert alert-danger">
          <h4>Team Member Not Found</h4>
          <p>The team member with ID {memberId} does not exist.</p>
          <Link to="/about" className="btn btn-primary">
            Back to Team
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <section className="section" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)', paddingTop: '5rem', paddingBottom: '5rem', minHeight: 'calc(100vh - 160px)' }}>
      <Container>
        <div className="mb-4">
          <Link to="/about" className="btn btn-outline-primary mb-3">
            <FaArrowLeft className="me-2" />
            Back to Team
          </Link>
        </div>
        
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="shadow-sm border-0">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <div 
                    className="d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: '120px',
                      height: '120px',
                      margin: '0 auto',
                      background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(46, 204, 113, 0.1))',
                      borderRadius: '50%'
                    }}
                  >
                    <FaUser size={60} style={{ color: 'var(--primary-color)' }} />
                  </div>
                  <h1 className="h2 mb-3" style={{ color: 'var(--dark-color)', fontWeight: '600' }}>
                    {member.name}
                  </h1>
                </div>

                <Row className="mb-4">
                  <Col md={6}>
                    <div className="d-flex align-items-center mb-3">
                      <FaBirthdayCake className="me-3" style={{ color: 'var(--primary-color)' }} />
                      <div>
                        <strong>Age:</strong> {member.age}
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <FaVenusMars className="me-3" style={{ color: 'var(--primary-color)' }} />
                      <div>
                        <strong>Gender:</strong> {member.gender}
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex align-items-center mb-3">
                      <FaGraduationCap className="me-3" style={{ color: 'var(--primary-color)' }} />
                      <div>
                        <strong>Program:</strong> {member.program}
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <FaUsers className="me-3" style={{ color: 'var(--primary-color)' }} />
                      <div>
                        <strong>Section:</strong> {member.section}
                      </div>
                    </div>
                  </Col>
                </Row>

                <div className="mt-4">
                  <h4 className="mb-3" style={{ color: 'var(--dark-color)' }}>About</h4>
                  <p className="lead" style={{ lineHeight: '1.6' }}>
                    {member.introduction}
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;