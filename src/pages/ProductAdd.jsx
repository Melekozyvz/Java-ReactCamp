import React from "react";
import  { Formik,Form, Field,ErrorMessage } from "formik";
import * as Yup from "yup";
import {Button, FormField, Label} from 'semantic-ui-react';
import KodlamaIOTextInput from "../utilities/customFormControls/KodlamaIOTextInput";
export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
  });
  return (
    <Formik 
    initialValues={initialValues} 
    validationSchema={schema}
    onSubmit = {(values)=>{
        console.log(values)
    }}
    >
      <Form className="ui form">
        <KodlamaIOTextInput  name="productName" placeholder="Ürün adı" />
        {/* <FormField>
          <Field name="productName" placeholder="Ürün adı"></Field>
          <ErrorMessage name="productName" render={error=>
            <Label pointing basic color="red" content={error}></Label>
          }></ErrorMessage>
        </FormField> */}
        {/* <FormField>
          <Field name="unitPrice" placeholder="Ürün fiyatı"></Field>
          <ErrorMessage name="unitPrice" render={error=>
            <Label pointing basic color="red" content={error}></Label>
          }></ErrorMessage>
        </FormField> */}
        <KodlamaIOTextInput name="unitPrice" placeholder="Ürün fiyatı"></KodlamaIOTextInput>
        <Button color="green" type="submit">Ekle</Button>
      </Form>
    </Formik>
);
}

