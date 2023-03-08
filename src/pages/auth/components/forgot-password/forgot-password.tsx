import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'assets/icons';
import { PrimaryButton } from 'components/buttons/primary-button';
import { CustomInput } from 'components/forms/custom-input';
import { Modal } from 'components/modal';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { BlockTitle, FormSection, HasProfile } from 'pages/auth/auth.style';
import { FORM_INPUT_TEXT } from 'pages/auth/const';
import { loginRequest } from 'store/login/login-actions';
import { ButtonType, FormButtonType, RouteNames, TitleVariant, UserAPIFields } from 'types/enum';

import { BlockTitleWithBG, StyledForm } from './forgot-password.style';

export const ForgotPassword: FC = () => {
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

  return (
    <Modal>
      <BlockTitleWithBG>
        <NavLink to={`/${RouteNames.auth}`}>
          <ArrowLeft />
          <p>{TitleVariant.loginTitle}</p>
        </NavLink>
      </BlockTitleWithBG>

      <StyledForm onSubmit={handleSubmit(onSubmit)} data-test-id='auth-form'>
        <BlockTitle>{TitleVariant.forgotTitle}</BlockTitle>
        <FormSection>
          <CustomInput
            register={register}
            watch={watch}
            errors={errors}
            name={UserAPIFields.email}
            placeholder={FORM_INPUT_TEXT.forgotPassword.placeholder}
            label={FORM_INPUT_TEXT.forgotPassword.label}
            type='email'
            validation={{ required: true, minLength: 5 }}
          />
        </FormSection>
        <PrimaryButton
          title={TitleVariant.login}
          disabled={!isValid}
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
};
