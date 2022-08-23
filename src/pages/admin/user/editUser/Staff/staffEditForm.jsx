import { useFormik } from "formik"
import { Form, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import * as Yup from "yup";

export const StaffEditForm = (props) => {

    let label_schema = Yup.object().shape({
        name: Yup.string().required('Title is required Required'),
        email: Yup.string().required('Email is required'),
    });

    let formik = useFormik({
        initialValues: props.initialVals,
        validationSchema: label_schema,
        onSubmit: (values) => {
            props.onSubmitLabel(values);
        }
    })

    useEffect(() => {
        formik.setValues({
            ...props.initialVals,
        })
    },[props.initialVals])


    return (<>

        <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3">Name: </Form.Label>
                <Col sm={9}>
                    <Form.Control type="text"
                        name="name"
                        size="sm"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    >
                    </Form.Control>
                    {
                        formik.errors.name && formik.touched.name ?<span className="text-danger">{formik.errors.name}</span> : ""
                    }
                </Col>
            </Form.Group>
            <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3">Email: </Form.Label>
                <Col sm={9}>
                    <Form.Control type="email"
                        name="email"
                        size="sm"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    >
                    </Form.Control>
                    {
                        formik.errors.email && formik.touched.email ?<span className="text-danger">{formik.errors.email}</span> : ""
                    }
                </Col>
            </Form.Group>
            <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3">Salary: </Form.Label>
                <Col sm={9}>
                    <Form.Control type="salary"
                        name="salary"
                        size="sm"
                        onChange={formik.handleChange}
                        value={formik.values.salary}
                    >
                    </Form.Control>
                    {
                        formik.errors.salary && formik.touched.salary ?<span className="text-danger">{formik.errors.salary}</span> : ""
                    }
                </Col>
            </Form.Group>
            <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3">Incentives: </Form.Label>
                <Col sm={9}>
                    <Form.Control type="incentives"
                        name="incentives"
                        size="sm"
                        onChange={formik.handleChange}
                        value={formik.values.incentives}
                    >
                    </Form.Control>
                    {
                        formik.errors.incentives && formik.touched.incentives ?<span className="text-danger">{formik.errors.incentives}</span> : ""
                    }
                </Col>
            </Form.Group>
            <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3">Post: </Form.Label>
                <Col sm={9}>
                    <Form.Control type="post"
                        name="post"
                        size="sm"
                        onChange={formik.handleChange}
                        value={formik.values.post}
                    >
                    </Form.Control>
                    {
                        formik.errors.post && formik.touched.post ?<span className="text-danger">{formik.errors.post}</span> : ""
                    }
                </Col>
            </Form.Group>
           

            <Form.Group className="row mb-3">
                <Col sm={{ span: 9, offset: 3 }}>
                    <Button type="submit" className="btn btn-sm btn-success">
                        Update
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    </>)
}