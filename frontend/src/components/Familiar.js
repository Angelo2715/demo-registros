import React, { useState } from 'react'
import { Form, Button, Col,  Row} from 'react-bootstrap'

function Pathological() {
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
                    <h1>Familiares</h1>
                </Form.Text>
            </Row>
            <Row className="mb-2">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Padre</Form.Label>
                <Form.Control
                    required
                    as="textarea" 
                    rows={3}
                    type="text"
                    placeholder="NINGUNO"
                    defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
                
            </Row>
            <Row className="mb-2">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Madre</Form.Label>
                <Form.Control
                    required
                    as="textarea" 
                    rows={3}
                    type="text"
                    placeholder="NINGUNO"
                    defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
                
            </Row>
            <Row className="mb-2">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Alergias</Form.Label>
                <Form.Control
                    required
                    as="textarea" 
                    rows={3}
                    type="text"
                    placeholder="NINGUNO"
                    defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
                
            </Row>
            <Row className="mb-2">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Hermanos</Form.Label>
                <Form.Control
                    required
                    as="textarea" 
                    rows={3}
                    type="text"
                    placeholder="NINGUNO"
                    defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
                
            </Row>
            <Row className="mb-2">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Abuelos Maternos</Form.Label>
                <Form.Control
                    required
                    as="textarea" 
                    rows={3}
                    type="text"
                    placeholder="NINGUNO"
                    defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
                
            </Row>
            <Row className="mb-2">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Abuelos Paternos</Form.Label>
                <Form.Control
                    required
                    as="textarea" 
                    rows={3}
                    type="text"
                    placeholder="NINGUNO"
                    defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
                
            </Row>
            <Row className="mb-2">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Tios Maternos</Form.Label>
                <Form.Control
                    required
                    as="textarea" 
                    rows={3}
                    type="text"
                    placeholder="NINGUNO"
                    defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
                
            </Row>
            <Row className="mb-2">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Tios Paternos</Form.Label>
                <Form.Control
                    required
                    as="textarea" 
                    rows={3}
                    type="text"
                    placeholder="NINGUNO"
                    defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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

export default Pathological
