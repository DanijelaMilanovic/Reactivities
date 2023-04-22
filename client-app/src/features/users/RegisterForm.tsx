import { ErrorMessage, Form, Formik } from "formik";
import CustomTextInput from "../../app/common/form/CustomTextInput";
import { Button, Header } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import * as Yup from "yup";
import ValidationError from "../Errors/ValidationError";

export default observer(function RegisterForm() {
    const {userStore} = useStore();
    return (
        <Formik
            initialValues= {{displayName: '', username: '' ,email: '', password: '', error: null}}
            onSubmit = {(values , {setErrors}) => userStore.register(values).catch(error =>
                 setErrors({error}))}
                 validationSchema={Yup.object({
                    displayName: Yup.string().required(),
                    username: Yup.string().required(),
                    email: Yup.string().required(),
                    password: Yup.string().required(),

                 })}
            >
                {({handleSubmit, isSubmitting, errors, isValid, dirty})=> (
                    <Form className="ui form error" onSubmit={handleSubmit} autoCorrect="off">
                        <Header as="h2" content="Sign up to Reactivities" color="teal" textAlign="center"></Header>
                        <CustomTextInput placeholder="Display name" name="displayName"/>
                        <CustomTextInput placeholder="Username" name="username"/>
                        <CustomTextInput placeholder="Email" name="email"/>
                        <CustomTextInput placeholder="Password" name="password" type="password"/>
                        <ErrorMessage 
                            name="error" render={() => <ValidationError errors={errors.error}/>}
                        />
                        <Button 
                            disabled={!isValid || !dirty || isSubmitting}
                            loading={isSubmitting} 
                            positive content="Register" 
                            type="submit" fluid
                        />
                    </Form>
                )}
        </Formik>
    )
}) 