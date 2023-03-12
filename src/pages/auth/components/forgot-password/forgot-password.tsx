import { FC, useCallback, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'assets/icons';
import { PrimaryButton } from 'components/buttons/primary-button';
import { InputLabel } from 'components/forms/custom-input/custom-input.style';
import { Modal } from 'components/modal';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { BlockTitle, FormSection, HasProfile } from 'pages/auth/auth.style';
import { addNewPasswordRequest, forgotRequest } from 'store/auth/forgor/forgot-actions';
import { resetPassword } from 'store/auth/forgor/forgot-slice';
import { ButtonType, FormButtonType, RouteNames, TitleVariant, UserAPIFields } from 'types/enum';
import { ResetPasswordData } from 'types/types';

import { ModalStatusWithHandler } from '../status-modals';

import { ResetPasswordForm } from './components/reset-password-form';
import { SendEmailForm } from './components/send-email-form';
import { BlockTitleWithBG, StyledForm } from './forgot-password.style';

export const ForgotPassword: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const code = searchParams.get('code');

  const { isSuccess, isError } = useTypedSelector(({ forgot }) => forgot);

  const dispatch = useAppDispatch();
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    clearErrors,
    reset,
  } = useForm({
    mode: 'all',
  });
  const [isInputsOnFocus, setIsInputsOnFocus] = useState(true);
  const navigate = useNavigate();

  const watchPass = watch(UserAPIFields.password);
  const watchRepeatPass = watch(UserAPIFields.repeatPassword);
  const isValidPass = watchRepeatPass === watchPass;

  const onSubmit = async (data: FieldValues) => {
    if (code) {
      const value = {
        ...data,
        code,
      };

      await dispatch(addNewPasswordRequest(value as ResetPasswordData));
    } else {
      await dispatch(forgotRequest(data as unknown as string));
    }
    clearErrors();
    reset();
  };

  const loginHandler = useCallback(() => {
    navigate(`/${RouteNames.books}`);
  }, [navigate]);

  const resetPasswordErrors = useCallback(() => {
    dispatch(resetPassword());
    reset();
  }, [dispatch, reset]);

  const renderErrorModal = () => (
    <ModalStatusWithHandler
      onClickHandler={resetPasswordErrors}
      buttonText={TitleVariant.repeat}
      title={TitleVariant.regErrorTitle}
      text={`${TitleVariant.loginErrorText}`}
    />
  );

  const renderForgetModalContent = () => (
    <Modal>
      {!code && (
        <BlockTitleWithBG>
          <NavLink to={`/${RouteNames.auth}`}>
            <ArrowLeft />
            <p>{TitleVariant.loginTitle}</p>
          </NavLink>
        </BlockTitleWithBG>
      )}
      <StyledForm onSubmit={handleSubmit(onSubmit)} data-test-id={code ? 'reset-password-form' : 'send-email-form'}>
        <BlockTitle>{TitleVariant.forgotTitle}</BlockTitle>
        <FormSection>
          {code ? (
            <ResetPasswordForm
              register={register}
              watch={watch}
              errors={errors}
              clearErrors={clearErrors}
              isValidPass={isValidPass}
              onBlur={setIsInputsOnFocus}
            />
          ) : (
            <SendEmailForm register={register} watch={watch} errors={errors} clearErrors={clearErrors} />
          )}
        </FormSection>
        {isError && (
          <InputLabel data-test-id='hint' isError={true}>
            error
          </InputLabel>
        )}

        <PrimaryButton
          title={code ? TitleVariant.newPassButton : TitleVariant.recovery}
          disabled={isInputsOnFocus && !isValidPass}
          handlerType={FormButtonType.submit}
          stylesClass={ButtonType.primaryButton}
        />

        <HasProfile>
          <p>{TitleVariant.haveNotProfile}</p>
          <NavLink to={`/${RouteNames.registration}`}>
            {TitleVariant.registration} <ArrowRight />
          </NavLink>
        </HasProfile>
      </StyledForm>
    </Modal>
  );

  const renderModalWithError = () => (isError && code ? renderErrorModal() : renderForgetModalContent());

  return isSuccess ? (
    <ModalStatusWithHandler
      onClickHandler={loginHandler}
      buttonText={TitleVariant.loginAfterRegistration}
      title={code ? TitleVariant.newPassSuccessTitle : TitleVariant.emailSentTitle}
      text={code ? TitleVariant.newPassSuccessText : `${TitleVariant.emailSentText}`}
      withButton={!!code}
    />
  ) : (
    renderModalWithError()
  );
};
