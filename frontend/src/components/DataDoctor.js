import React, { useState } from 'react'
import { Form, Button, Col, Row} from 'react-bootstrap'

function DataDoctor() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
                <Form.Text>
                    <h1>Datos de Identificación del Médico</h1>
                    <p>Complete los datos solicitados con la información de identificación básica del médico</p>
                </Form.Text>
            </Row>
            <Row className="mb-2">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Número de cédula</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="0-000-00"
                    defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
            </Row>
            <Row className="mb-2">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>No. Idoneidad</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>No.Registro</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
            </Row>
            <Row>
                <Form.Text>
                    <h1>Datos Personales del médico</h1>
                    <p>Información detallada del médico</p>
                </Form.Text>
            </Row>
            <Row className="mb-2">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Primer Nombre</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Segundo Nombre</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
            </Row>
            <Row className="mb-2">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Primer Apellido</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Segundo Apellido</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
            </Row>
            <Row>
                <Form.Text>
                    <h1>Datos de Identificación del Médico</h1>
                    <p>Complete los datos solicitados con la información de identificación básica del médico</p>
                </Form.Text>
            </Row>
      <Row className="mb-3">
        
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Telélefono de casa</Form.Label>
          <Form.Control type="text" placeholder="000-0000" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Telélefono de casa.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Celular</Form.Label>
          <Form.Control type="text" placeholder="0000-0000" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Celular.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Correo electrónico.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
          <Form.Group >
              <Form.Label>Tipo de profesional</Form.Label>
              <Form.Select>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
              </Form.Select>

          </Form.Group>
          <Form.Group >
              <Form.Label>Especialidad</Form.Label>
              <Form.Select>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
              </Form.Select>

          </Form.Group>
          
          
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Guardar</Button>
    </Form>
    </div>
  );
}

export default DataDoctor
