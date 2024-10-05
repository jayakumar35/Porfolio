import { Container, Row, Col, Card } from 'react-bootstrap'
import './Services.scss'

function Services() {
  return (
    <Container className="services-container " fluid >
      <Row className="services-row">
        <Col sm={12} md={12} lg={4} className="services-col">
          <h1>Services</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
        </Col>
        <Col sm={6} md={12} lg={4} className=''>

          <Card style={{ width: '20rem' }} className="card">
            <Card.Body className='p-4'>
              <div className='icon'>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line></svg>

              </div>

              <Card.Title className='card-titel' >Business Stratagy</Card.Title>
              <Card.Text>
                i throw myself down among the the tall grass by the stream as iile close to the earth
              </Card.Text>
            </Card.Body  >
          </Card>
          <Card style={{width: '20rem' }} className="card">
            <Card.Body className='p-4'>
              <div className='icon'>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>

              </div>

              <Card.Title className='card-titel'>Marketing & Reporting</Card.Title>
              <Card.Text>
                i throw myself down among the the tall grass by the stream as iile close to the earth
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={12} lg={4}>
          <Card style={{ width: '20rem' }} className="card">
            <Card.Body className='p-4'>

              <div className='icon'>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>

              </div>
              <Card.Title className='card-titel'>Website Development</Card.Title>
              <Card.Text>
                i throw myself down among the the tall grass by the stream as iile close to the earth
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem ' }} className='card'>
            <Card.Body className='p-4'>
              <div className='icon'>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>   </div>
              <Card.Title className='card-titel'>Mobile App Development</Card.Title>
              <Card.Text>
                i throw myself down among the the tall grass by the stream as iile close to the earth
              </Card.Text>
            </Card.Body>
          </Card>


        </Col>
      </Row>
    </Container>
  )
}
export default Services;