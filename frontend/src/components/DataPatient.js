import React, { useState } from 'react'
import { Form, Button, Col,  Row} from 'react-bootstrap'

function DataPatient() {
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
                    <h1>Datos de Identificación</h1>
                    <p>Complete los datos solicitados con la información de identificación básica del paciente</p>
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
                <Form.Label>Número de SS</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                />
                
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
            </Row>
            <Row className="mb-4">
            <Form.Group as={Col} md="6" >
              <Form.Label>Nacionalidad</Form.Label>
              <Form.Select>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
              </Form.Select>

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
                    <h1>Datos Personales del paciente</h1>
                    <p>Información detallada del paciente</p>
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
            <Row className="mb-4">
                <Form.Group as={Col} md="3" >
                    <Form.Label>Sexo</Form.Label>
                        <Form.Select>
                            <option>Default select</option>
                            <option>Default select</option>
                        </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="3" >
                    <Form.Label>Estado civil</Form.Label>
                        <Form.Select>
                            <option>Default select</option>
                            <option>Default select</option>
                            <option>Default select</option>
                            <option>Default select</option>
                            <option>Default select</option>
                        </Form.Select>
                </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Group as={Col} md="2" className="mb-2">
                  
                        <Form.Select>
                            <option>Día</option>
                            <option>Default select</option>
                        </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="3" className="mb-2">
                  
                        <Form.Select>
                            <option>Mes</option>
                            <option>Default select</option>
                            <option>Default select</option>
                            <option>Default select</option>
                            <option>Default select</option>
                        </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="2" className="mb-2">
                  
                        <Form.Select>
                            <option>Año</option>
                            <option>Default select</option>
                            <option>Default select</option>
                            <option>Default select</option>
                            <option>Default select</option>
                        </Form.Select>
                </Form.Group>
                
            </Row>
            <Row className="mb-4">
            <Form.Group as={Col} md="2" >
              <Form.Label>Tipo de sanguineo</Form.Label>
              <Form.Select>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
              </Form.Select>

              </Form.Group>
            </Row>
            <Row>
                <Form.Text>
                    <h1>Datos de Identificación del paciente</h1>
                    <p>Complete los datos solicitados con la información de identificación básica del paciente</p>
                </Form.Text>
            </Row>
            <Row className="mb-3">
            <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Group as={Col} md="3" className="mb-2">
                  
                        <Form.Select>
                            <option>Provincia</option>
                            <option>Default select</option>
                        </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="3" className="mb-2">
                  
                        <Form.Select>
                            <option>Distrito</option>
                            <option>Default select</option>
                            <option>Default select</option>
                            <option>Default select</option>
                            <option>Default select</option>
                        </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="3" className="mb-2">
                  
                        <Form.Select>
                            <option>Corregimiento</option>
                            <option>Default select</option>
                            <option>Default select</option>
                            <option>Default select</option>
                            <option>Default select</option>
                        </Form.Select>
                </Form.Group>
                
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
              <Form.Label>Tipo paciente</Form.Label>
              <Form.Select>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
              </Form.Select>

          </Form.Group>
          <Form.Group >
              <Form.Label>Facultad</Form.Label>
              <Form.Select>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
              </Form.Select>

          </Form.Group>
          
          
      </Row>
      <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Multiple files input example</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>
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

export default DataPatient
