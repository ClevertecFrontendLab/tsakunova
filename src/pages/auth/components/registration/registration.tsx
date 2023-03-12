import { FC, useCallback, useMemo, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { PrimaryButton } from 'components/buttons/primary-button';
import { Modal } from 'components/modal';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { BlockSubtitle, BlockTitle, HasProfile } from 'pages/auth/auth.style';
import { REGISTRATION_STEPS_COUNT } from 'pages/auth/const';
import { registrationRequest } from 'store/auth/registration/registration-actions';
import { resetRegistration } from 'store/auth/registration/registration-slice';
import { ButtonType, FormButtonType, RouteNames, TitleVariant } from 'types/enum';
import { RegistrationUserData } from 'types/types';

import { ModalStatusWithHandler } from '../status-modals';

import { RegStepOne } from './components/reg-step-one';
import { RegStepThree } from './components/reg-step-three';
import { RegStepTwo } from './components/reg-step-two';
import { Container } from './registration.style';

export const Registration: FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [currentStepButton, setCurrentStepButton] = useState<string>(TitleVariant.nextStep);
  const { isError, is400Status } = useTypedSelector(({ registration }) => registration);
  const navigate = useNavigate();
  const storageUserData = localStorage.getItem('user');
  const errorTextMessage = useMemo(
    () => (is400Status ? TitleVariant.regNotUniqueErrorText : TitleVariant.regErrorMessage),
    [is400Status]
  );
  const errorButtonText = useMemo(
    () => (is400Status ? TitleVariant.repeatRegistration : TitleVariant.repeat),
    [is400Status]
  );

  const {
    register,
    watch,
    formState: { errors, isValid },
    clearErrors,
    handleSubmit,
    control,
    reset,
  } = useForm({
    mode: 'all',
  });

  const dispatch = useAppDispatch();

  const onSubmit = (data: FieldValues) => {
    dispatch(registrationRequest(data as RegistrationUserData));
    reset();
  };

  const stepButtonNext = (step: number) => {
    switch (step + 1) {
      case 2:
        setCurrentStepButton(TitleVariant.lastStep);
        break;
      case 3:
        setCurrentStepButton(TitleVariant.registrationButton);
        break;
      default:
        setCurrentStepButton(TitleVariant.nextStep);
        break;
    }
  };

  const resetRegistrationHandler = useCallback(() => {
    dispatch(resetRegistration());
    setCurrentStep(1);
    stepButtonNext(0);
    reset();
  }, [dispatch, reset]);

  const addStep = useCallback(() => {
    if (isValid) {
      if (currentStep === 3) return;
      stepButtonNext(currentStep);
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep, isValid]);

  const loginHandler = useCallback(() => {
    navigate(`/${RouteNames.books}`);
  }, [navigate]);

  const stepProps = { register, errors, watch, control, clearErrors };

  const renderContent = () =>
    storageUserData ? (
      <ModalStatusWithHandler
        title={TitleVariant.regSuccessTitle}
        text={TitleVariant.regSuccessText}
        buttonText={TitleVariant.loginAfterRegistration}
        onClickHandler={loginHandler}
      />
    ) : (
      <Modal>
        <Container>
          <BlockTitle>{TitleVariant.registration}</BlockTitle>
          <BlockSubtitle>
            {currentStep} шаг из {REGISTRATION_STEPS_COUNT}
          </BlockSubtitle>
          <form onSubmit={handleSubmit(onSubmit)} data-test-id='register-form'>
            {currentStep === 1 && <RegStepOne {...stepProps} />}
            {currentStep === 2 && <RegStepTwo {...stepProps} />}
            {currentStep === 3 && <RegStepThree {...stepProps} />}
            <PrimaryButton
              disabled={!isValid}
              onClick={addStep}
              handlerType={currentStep >= 3 ? FormButtonType.submit : FormButtonType.button}
              title={currentStepButton}
              stylesClass={ButtonType.primaryButton}
            />
          </form>

          <HasProfile>
            {TitleVariant.hasProfile} <NavLink to={`/${RouteNames.auth}`}>{TitleVariant.login}</NavLink>
          </HasProfile>
        </Container>
      </Modal>
    );

  return isError ? (
    <ModalStatusWithHandler
      title={TitleVariant.regErrorTitle}
      buttonText={errorButtonText}
      text={errorTextMessage}
      onClickHandler={resetRegistrationHandler}
    />
  ) : (
    renderContent()
  );
};
