import { FC, useCallback } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'assets/icons';
import { PrimaryButton } from 'components/buttons/primary-button';
import { CustomInput } from 'components/forms/custom-input';
import { InputLabel } from 'components/forms/custom-input/custom-input.style';
import { Modal } from 'components/modal';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useIsBlurWithValidation } from 'hooks/use-is-blur-with-validation';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { BlockTitle, ContainerInputWithLabel, FormSection, HasProfile, HintErrorSpan } from 'pages/auth/auth.style';
import { FORM_INPUT_TEXT } from 'pages/auth/const';
import { loginRequest } from 'store/login/login-actions';
import { logout } from 'store/login/login-slice';
import { ButtonType, FormButtonType, RouteNames, TitleVariant, UserAPIFields, ValidationErrors } from 'types/enum';
import { UserAPI } from 'types/types';

import { ModalStatusWithHandler } from '../status-modals';

import { Container, ForgotSection, ForgotText } from './authorization.style';

export const Authorization: FC = () => {
  const errorAuth = useTypedSelector(({ login }) => login.isError);
  const is400 = useTypedSelector(({ login }) => login.is400Status);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    watch,
    formState: { errors, isValid },
    handleSubmit,
    clearErrors,
    reset,
  } = useForm({
    mode: 'all',
  });

  const { setIsBlur: setIsBlurName, isEmptyBluredLabel: isErrorNameLabel } = useIsBlurWithValidation(
    UserAPIFields.identifier,
    watch,
    errors
  );

  const { setIsBlur: setIsBlurPass, isEmptyBluredLabel: isErrorPassLabel } = useIsBlurWithValidation(
    UserAPIFields.password,
    watch,
    errors
  );

  const onSubmit = async (data: FieldValues) => {
    if (isValid) {
      await dispatch(loginRequest(data as UserAPI));
      reset();
      navigate(`/${RouteNames.books}`);
    }
  };
  const redirectToAuth = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return errorAuth && !is400 ? (
    <ModalStatusWithHandler
      onClickHandler={redirectToAuth}
      buttonText={TitleVariant.repeat}
      title={TitleVariant.loginErrorTitle}
      text={TitleVariant.loginErrorText}
    />
  ) : (
    <Modal>
      <Container>
        <BlockTitle>{TitleVariant.loginTitle}</BlockTitle>
        <form onSubmit={handleSubmit(onSubmit)} data-test-id='auth-form'>
          <FormSection>
            <ContainerInputWithLabel>
              <CustomInput
                name={UserAPIFields.identifier}
                placeholder={FORM_INPUT_TEXT.authLogin.placeholder}
                type='text'
                required={true}
                register={register}
                watch={watch}
                errors={errors}
                setIsBlur={setIsBlurName}
                clearErrors={clearErrors}
              />
              {isErrorNameLabel && (
                <InputLabel data-test-id='hint' isError={true}>
                  <HintErrorSpan isError={true}>{ValidationErrors.emptyField}</HintErrorSpan>
                </InputLabel>
              )}
            </ContainerInputWithLabel>
            <ContainerInputWithLabel>
              <CustomInput
                name={UserAPIFields.password}
                placeholder={FORM_INPUT_TEXT.authPassword.placeholder}
                type='password'
                required={true}
                register={register}
                watch={watch}
                errors={errors}
                setIsBlur={setIsBlurPass}
                clearErrors={clearErrors}
                withCheckmark={false}
              />
              {isErrorPassLabel && (
                <InputLabel data-test-id='hint' isError={true}>
                  <HintErrorSpan isError={true}>{ValidationErrors.emptyField}</HintErrorSpan>
                </InputLabel>
              )}
            </ContainerInputWithLabel>
          </FormSection>
          <ForgotSection>
            {is400 && <ForgotText data-test-id='hint'>{TitleVariant.notTrueLogin}</ForgotText>}
            <NavLink to={`/${RouteNames.forgotPass}`}>{is400 ? TitleVariant.recovery : TitleVariant.forgot}</NavLink>
          </ForgotSection>
          <PrimaryButton
            title={TitleVariant.loginAfterRegistration}
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
