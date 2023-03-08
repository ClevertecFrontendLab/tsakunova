import { FC, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { PrimaryButton } from 'components/buttons/primary-button';
import { Modal } from 'components/modal';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { BlockSubtitle, BlockTitle, HasProfile } from 'pages/auth/auth.style';
import { REGISTRATION_STEPS_COUNT } from 'pages/auth/const';
import { registrationRequest } from 'store/auth/registration-actions';
import { ButtonType, FormButtonType, RouteNames, TitleVariant } from 'types/enum';

import { RegErrors } from '../status-modals/reg-errors';

import { RegStepOne } from './components/reg-step-one';
import { RegStepThree } from './components/reg-step-three';
import { RegStepTwo } from './components/reg-step-two';
import { Container } from './registration.style';

export const Registration: FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const { user, isError } = useTypedSelector(({ registration }) => registration);
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

  const onSubmit = (data: any) => {
    dispatch(registrationRequest(data));
    reset();
  };

  const addStep = useCallback(() => {
    if (currentStep === 3) return;
    setCurrentStep((prev) => prev + 1);
  }, [currentStep]);

  const stepProps = { register, errors, watch };

  return isError ? (
    <RegErrors />
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
            onClick={addStep}
            disabled={!isValid}
            handlerType={currentStep === 3 ? FormButtonType.submit : FormButtonType.button}
            title={TitleVariant.nextStep}
            stylesClass={ButtonType.primaryButton}
          />
        </form>

        <HasProfile>
          {TitleVariant.hasProfile} <NavLink to={`/${RouteNames.auth}`}>{TitleVariant.login}</NavLink>
        </HasProfile>
      </Container>
    </Modal>
  );
};
