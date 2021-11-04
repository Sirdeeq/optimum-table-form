import { Card, CardBody, CardColumns, CardHeader, Col, Container, Form, Row } from 'reactstrap';
import CustomInput from './Form/CustomInput'
import Textarea from './Form/Textarea';

function App() {
  return (
    <>
   <Row>
     <Col md={3} />
     <Col>
     <Card>
        <CardHeader>
        <Form inline>
          <Row>
            <Col md={5}  >
              <CustomInput title="HEIGHT(cm)=" />
            </Col>
            <Col md={4}   >
              <CustomInput title="WEIGHT(kg)=" />
            </Col>
            <Col md={3}  >
              <CustomInput title="BSA=" />
            </Col>
          </Row>
        </Form>
        <Row>
          <Col md={12}  >
            <CustomInput title="Clinical Information" />
          </Col>
        </Row>
        </CardHeader>
        <CardBody>
        <h2 className="text-center">M - MODE</h2>
        {/* first */}
        <Row>
          <Col md={4} className="border ">
            <div>
              <CustomInput title="Aortic [mm]=" />
              <CustomInput title="Asc Aorta [mm]=" />
              <CustomInput title="Left atrium (mm)=" />
            </div>
          </Col>
          <Col md={4} className="border ">
            <div>
              <CustomInput title="IVSTd [mm]=" />
              <CustomInput title="LVEDD [mm]=" />
              <CustomInput title="LVPWTd [mm]=" />
            </div>
          </Col>
          <Col md={4} className="border ">
            <div>
              <CustomInput title="LVSV [ml]=" />
              <CustomInput title="LVEF [%]=" />
              <CustomInput title="LVSF [%]=" />
            </div>
          </Col>

        
        </Row>
        {/* second  */}
        <Row>
          <Col md={4} className="border">
            <div>
              <CustomInput title="RVbasal [mm]=" />
              <CustomInput title="RAAS [cm2]=" />
              <CustomInput title="TAPSE (mm)=" />
            </div>
          </Col>
          <Col md={4} className="border">
            <div>
              <CustomInput title="IVSTd [mm]=" />
              <CustomInput title="LVESD [mm]=" />
              <CustomInput title="LVPWTs [mm]=" />
            </div>
          </Col>
          <Col md={4} className="border">
            <div>
              <CustomInput title="LV mass [g]=" />
              <CustomInput title="LV Mass Index=" />
              <CustomInput title="RWT=" />
            </div>
          </Col>
        </Row>
        <h2 className="text-center">DOPPLER</h2>
        <Row>
          <h6>Aortic Valve:</h6>
          <Col md={4} className="border">
            <Col sm={12}>
              <CustomInput title="Peak Vel [m/s]=" />
            </Col>
            <Col sm={12}>
              <CustomInput title="VTI(cm)=" />
            </Col> 
          </Col>
          <Col md={5} className="border" >
            <Col sm={12}>
              <CustomInput title="Mean Pressure Gradient [mmHg]=" />
            </Col>
            <Col sm={12}>
              <CustomInput title="LVET[ms]=" />
            </Col> 
          </Col>
          <Col md={3} className="border" >
          <Col sm={12} >
              <CustomInput title="AV regulation=" />
            </Col> 
          </Col>
          <h6>Mitral Valve:</h6>
          <Col md={4} className="border">
            <Col sm={12}>
              <CustomInput title="E wave Vel [cm/s]=" />
            </Col>
            <Col sm={12}>
              <CustomInput title="e*Vel [cm/s]=" />
            </Col> 
          </Col>
          <Col md={5} className="border">
            <Col sm={12}>
              <CustomInput title="A wave Vel [cm/s]=" />
            </Col>
            <Col sm={12}>
              <CustomInput title="a*Vel [cm/s]=" />
            </Col> 
          </Col>
          <Col md={3} className="border" >
          <Col sm={12} >
              <CustomInput title="MV regulation=" />
            </Col> 
          </Col>
          <h6>Tricuspid Valve:</h6>
          <Col md={4} className="border">
            <Col sm={12}>
              <CustomInput title="TR peak Vel [m/s]=" />
            </Col>
            </Col>
            <Col md={8} className="border">
            <Col sm={12}>
              <CustomInput title="TV Regulation=" />
            </Col>
          </Col>
          <h6>Pulmonary Valve:</h6>
          <Col md={4} className="border">
            <Col sm={12}>
              <CustomInput title="Peak Vel [m/s]=" />
            </Col>
            <Col sm={12}>
              <CustomInput title="PA systolic pressure [mmHg]=" />
            </Col> 
          </Col>
          <Col md={5} className="border">
            <Col sm={12}>
              <CustomInput title="Acceleration Time [m/s]=" />
            </Col>
            <Col sm={12}>
              <CustomInput title="MPAP [mmHg]=" />
            </Col> 
          </Col>
          <Col md={3} className="border">
          <Col sm={12}>
              <CustomInput title="PV regurgitaion=" />
            </Col>
            <Col sm={12}>
              <CustomInput title="Pulmonary HTN=" />
            </Col> 
          </Col>
          <hr/>
        <h2 className="text-center">2 - D  Morphology</h2>
          <Col md={12} className="border">
          <CustomInput title="AORTIC ROOT:" />
          </Col>
          <Col md={12} className="border">
          <CustomInput title="LEFT VENTRICLE:" />
          </Col>
          <Col md={12} className="border">
          <CustomInput title="OTHER CHAMBERS:" />
          </Col>
          <Col md={12} className="border">
          <CustomInput title="VALVES:" />
          </Col>
          <Col md={12} className="border">
          <CustomInput title="PERICARDUIM:" />
          </Col>
        <h2 className="text-center">COMMENTS</h2>
          <Textarea  className="border"/>
        </Row>
        </CardBody>
      </Card>
     </Col>
     <Col  md={3} />
   </Row>
    </>
  );
}

export default App;
