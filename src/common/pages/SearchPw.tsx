import { ChangeEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Clear, Check } from '@mui/icons-material';
import { IconButton, TextField, Button, Box } from '@mui/material';
import { ErrorMessage } from '@hookform/error-message';
import Countdown, { zeroPad } from 'react-countdown';
import useTableWidth from '../hooks/useTabletWidth';
import NavBar from '../../components/NavBar';
import SubNavBar from '../components/SubNavBar';
import MobileSubAppBar from '../components/MobileSubAppBar';
import useCommonUserStyles from '../styles/tempUserStyles';
import useSendSMS from '../hooks/useSendSMS';
import useSendSMSCheck from '../hooks/useSendSMSCheck';
import { CommonSmsSendAuthCheckRequest, SendSMSRequest } from '../type';
import { COLOR_VIOLET_5 } from '../styles/Color';
import { makeStyles } from '@mui/styles';
import Alert from '../components/Alert';

interface ISearchPWForm {
  phoneNumber: string;
  authNumber: string;
  password: string;
  passwordCheck: string;
  birthday: string;
  sex: string;
}

const SearchPw = () => {
  const {
    control,
    setValue,
    watch,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors, isValid },
  } = useForm<ISearchPWForm>({
    mode: 'onChange',
    defaultValues: {
      phoneNumber: '',
      authNumber: '',
    },
  });

  const { mutateAsync: sendSMSMutateAsync } = useSendSMS();
  const { mutateAsync: sendSMSCheckMutateAsync } = useSendSMSCheck();

  const userClasses = useCommonUserStyles();
  const classes = useStyles();

  const TabletWidth = useTableWidth();

  const [isEnableAuthNumber, setIsEnableAuthNumber] = useState(false);
  const [threeMinutes, setThreeMinutes] = useState(0);
  const [isNumberAuthenticated, setIsNumberAuthenticated] = useState(false);
  const [authSeq, setAuthSeq] = useState<number>(0);

  const history = useHistory();

  const watchPhoneNumber = watch('phoneNumber');

  const onClickPhoneNumberClearButton = () => {
    setValue('phoneNumber', '');
  };

  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');

  const onClickSetEnableAuthNumber = async () => {
    setIsEnableAuthNumber(true);
    setThreeMinutes(Date.now() + 1000 * 60 * 3);
    trigger('authNumber');

    const request: SendSMSRequest = {
      phoneNumber: getValues('phoneNumber'),
    };
    const response = await sendSMSMutateAsync(request);
    const seq = response?.data?.data as number;
    setAuthSeq(seq);

    setIsEnableAuthNumber(true);
    trigger('authNumber');
    // setAlertOpen(true);
    // setAlertMessage('인증번호가 발송되었습니다.');
  };

  const onClickCheckAuthentication = async () => {
    const sendSMSCheckRequest: CommonSmsSendAuthCheckRequest = {
      authCode: getValues('authNumber'),
      seq: authSeq,
    };

    const response = await sendSMSCheckMutateAsync(sendSMSCheckRequest);
    if (response?.data?.status === 'OK') setIsNumberAuthenticated(true);
  };

  const onInputBirthday = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.substring(0, 6);
  };

  const onInputSex = (event: ChangeEvent<HTMLInputElement>) => {
    const flag = /^[1-4]{1}$/.test(event.target.value);

    const result = flag ? event.target.value : '';
    event.target.value = result.substring(0, 1);
  };

  const onSubmit: SubmitHandler<ISearchPWForm> = (data) => {
    history.push('/changePassword');
  };

  const onInputAuthNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const { length } = event.target.value;
    const target = value.substring(length - 1, length);
    const flag = /^[0-9]$/.test(target);

    const result = flag ? value : value.substring(0, length - 1);
    event.target.value = result.substring(0, 6);
  };

  const renderer = useCallback(({ minutes, seconds, completed }: any) => {
    if (completed) {
      return null;
    }
    return (
      <span className={userClasses.timer}>
        {zeroPad(minutes)}:{zeroPad(seconds)}
      </span>
    );
  }, []);

  return (
    <>
      {TabletWidth ? (
        <>
          <NavBar searchInput={false} />
          <SubNavBar title="비밀번호 찾기" fontType="h4" />
        </>
      ) : (
        <MobileSubAppBar title="비밀번호 찾기" fontType="h5" />
      )}
      <main className={userClasses.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={userClasses.contentWrap}>
            <div>
              <div className={userClasses.rowWrap}>
                <Controller
                  name="phoneNumber"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: '휴대폰 번호를 입력해주세요.',
                    pattern: {
                      value: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
                      message: '휴대폰 번호를 정확하게 입력하세요.',
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      className={userClasses.textfield}
                      type="text"
                      variant="outlined"
                      size="small"
                      disabled={isEnableAuthNumber}
                      error={!!errors.phoneNumber}
                      placeholder="휴대폰 번호"
                      sx={{ fontWeight: 400 }}
                      {...field}
                      InputProps={{
                        endAdornment: watchPhoneNumber ? (
                          isEnableAuthNumber ? (
                            <div className={userClasses.iconWrapper}>
                              <Check className={userClasses.checkButton} />
                            </div>
                          ) : (
                            <IconButton
                              className={userClasses.iconButton}
                              onClick={onClickPhoneNumberClearButton}
                            >
                              <Clear className={userClasses.clearButton} />
                            </IconButton>
                          )
                        ) : null,
                      }}
                    />
                  )}
                />
                <Button
                  className={userClasses.button}
                  type="button"
                  variant="contained"
                  disabled={
                    !!errors.phoneNumber ||
                    watchPhoneNumber.length < 1 ||
                    isEnableAuthNumber
                  }
                  onClick={() => onClickSetEnableAuthNumber()}
                >
                  인증번호전송
                </Button>
              </div>
              <ErrorMessage
                errors={errors}
                name="phoneNumber"
                render={({ message }) => (
                  <p className={userClasses.errorMessage}>{message}</p>
                )}
              />
            </div>
            <div className={userClasses.rowWrap}>
              <Controller
                name="authNumber"
                control={control}
                defaultValue=""
                rules={{
                  required: '인증 번호를 입력해주세요.',
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: '인증 번호를 정확하게 입력하세요.',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    className={userClasses.textfield}
                    type="text"
                    size="small"
                    disabled={isNumberAuthenticated}
                    placeholder="인증번호"
                    {...field}
                    error={!!errors.authNumber}
                    onInput={onInputAuthNumber}
                    InputProps={{
                      endAdornment:
                        isEnableAuthNumber && !isNumberAuthenticated ? (
                          <Countdown date={threeMinutes} renderer={renderer} />
                        ) : null,
                      classes: {
                        disabled: classes.disabledInput,
                      },
                    }}
                  />
                )}
              />
              <Button
                className={userClasses.button}
                type="button"
                variant="contained"
                disabled={
                  !!errors.authNumber ||
                  !isEnableAuthNumber ||
                  isNumberAuthenticated
                }
                onClick={onClickCheckAuthentication}
              >
                인증하기
              </Button>
            </div>
            <div className={userClasses.rowWrap} style={{ marginTop: '5px' }}>
              <Controller
                name="birthday"
                control={control}
                defaultValue=""
                rules={{
                  required: '생년월일을 입력해주세요.',
                  pattern: {
                    value:
                      /^([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))$/,
                    message: '생년월일을 정확히 입력해주세요.',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    className={userClasses.textfield}
                    type="text"
                    placeholder="생년월일"
                    size="small"
                    {...field}
                    onInput={onInputBirthday}
                    error={!!errors.birthday}
                  />
                )}
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'end',
                  width: '50%',
                  paddingLeft: '5%',
                }}
              >
                <Controller
                  name="sex"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: '성별을 입력해주세요.',
                  }}
                  render={({ field }) => (
                    <TextField
                      className={userClasses.textfield}
                      type="number"
                      size="small"
                      {...field}
                      onInput={onInputSex}
                      error={!!errors.sex}
                    />
                  )}
                />
                <span className={userClasses.secretNumber}>••••••</span>
              </div>
            </div>
            <ErrorMessage
              errors={errors}
              name="birthday"
              render={({ message }) => (
                <p className={userClasses.errorMessage}>{message}</p>
              )}
            />
            <div>
              <Button
                className={userClasses.nextButton}
                type="submit"
                disabled={!isValid}
              >
                다음
              </Button>
            </div>
          </div>
        </form>
      </main>
      <Alert
        isOpen={alertOpen}
        message={alertMessage}
        onClose={() => {
          setAlertOpen(false);
        }}
      />
    </>
  );
};

export default SearchPw;

const useStyles = makeStyles({
  disabledInput: {
    border: 'none',
    backgroundColor: COLOR_VIOLET_5,
  },
});
