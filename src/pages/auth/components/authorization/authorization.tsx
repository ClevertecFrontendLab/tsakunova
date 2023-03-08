import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'assets/icons';
import { PrimaryButton } from 'components/buttons/primary-button';
import { CustomInput } from 'components/forms/custom-input';
import { Modal } from 'components/modal';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { BlockTitle, FormSection, HasProfile } from 'pages/auth/auth.style';
import { FORM_INPUT_TEXT } from 'pages/auth/const';
import { loginRequest } from 'store/login/login-actions';
import { ButtonType, FormButtonType, RouteNames, TitleVariant, UserAPIFields } from 'types/enum';

import { AuthErrors } from '../status-modals/auth-errors';

import { Container, ForgotSection } from './authorization.style';

export const Authorization: FC = () => {
  const errorAuth = useTypedSelector(({ login }) => login.isError);
  const navigate = useNavigate();

  const {
    register,
    watch,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (data: any) => {
    await dispatch(loginRequest(data));
    reset();
    navigate('/');
  };

  return errorAuth ? (
    <AuthErrors />
  ) : (
    <Modal>
      <Container>
        <BlockTitle>{TitleVariant.loginTitle}</BlockTitle>
        <form onSubmit={handleSubmit(onSubmit)} data-test-id='auth-form'>
          <FormSection>
            <CustomInput
              register={register}
              watch={watch}
              errors={errors}
              name={UserAPIFields.identifier}
              placeholder={FORM_INPUT_TEXT.authLogin.placeholder}
              type='text'
              validation={{ required: true, minLength: 5 }}
            />
            <CustomInput
              register={register}
              watch={watch}
              errors={errors}
              name={UserAPIFields.password}
              placeholder={FORM_INPUT_TEXT.authPassword.placeholder}
              validation={{ required: true }}
              type='password'
            />
          </FormSection>
          <ForgotSection>
            <NavLink to={`/${RouteNames.forgotPass}`}>{TitleVariant.forgot}</NavLink>
          </ForgotSection>
          <PrimaryButton
            title={TitleVariant.login}
            disabled={!isValid}
            handlerType={FormButtonType.submit}
            stylesClass={ButtonType.primaryButton}
          />
        </form>
        <HasProfile>
          <p>{TitleVariant.haveNotProfile}</p>
          <NavLink to={`/${RouteNames.registration}`}>
            {TitleVariant.registration} <ArrowRight />
          </NavLink>
        </HasProfile>
      </Container>
    </Modal>
  );
};
