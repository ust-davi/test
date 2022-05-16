import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import SubNavBar from '../components/SubNavBar';
import MobileSubAppBar from '../components/MobileSubAppBar';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { IconButton, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Clear, Check } from '@mui/icons-material';
import { ErrorMessage } from '@hookform/error-message';
import Countdown, { zeroPad } from 'react-countdown';
import { COLOR_VIOLET_5 } from '../styles/Color';
import useTableWidth from '../hooks/useTabletWidth';
import useCommonStyles from '../styles/tempUserStyles';
import useJoin from '../hooks/useJoin';
import {
  CommonSmsSendAuthCheckRequest,
  SendSMSRequest,
  User,
  UserJoinRequest,
} from '../type';
import useSendSMS from '../hooks/useSendSMS';
import useSendSMSCheck from '../hooks/useSendSMSCheck';

interface IJoinForm {
  phoneNumber: string;
  authNumber: string;
  name: string;
  birthday: string;
  sex: string;
  password: string;
  passwordCheck: string;
  inviteCode: string;
}

const Signup = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const TabletWidth = useTableWidth();
  const {
    status: joinStatus,
    data: joinData,
    error: joinError,
    isError: joinIsError,
    mutateAsync,
    mutate,
  } = useJoin();

  const { mutateAsync: sendSMSMutateAsync } = useSendSMS();
  const { mutateAsync: sendSMSCheckMutateAsync } = useSendSMSCheck();

  const {
    control,
    setValue,
    watch,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors, isValid },
  } = useForm<IJoinForm>({
    mode: 'onChange',
    defaultValues: {
      phoneNumber: '',
      authNumber: '',
      password: '',
      passwordCheck: '',
    },
  });

  const [isEnableAuthNumber, setIsEnableAuthNumber] = useState(false);
  const [threeMinutes, setThreeMinutes] = useState(0);
  const [isNumberAuthenticated, setIsNumberAuthenticated] = useState(false);
  const [isShowCheckIcon, setIsShowCheckIcon] = useState(false);
  const [authSeq, setAuthSeq] = useState<number>(0);

  const watchPhoneNumber = watch('phoneNumber');
  const watchPassword = watch('password');

  const history = useHistory();

  const onClickSetEnableAuthNumber = async () => {
    const request: SendSMSRequest = {
      phoneNumber: getValues('phoneNumber'),
    };
    const response = await sendSMSMutateAsync(request);
    const seq = response?.data?.data as number;
    setAuthSeq(seq);

    setIsEnableAuthNumber(true);
    console.log(isEnableAuthNumber, !isNumberAuthenticated);
    setThreeMinutes(Date.now() + 1000 * 60 * 3);
    trigger('authNumber');
  };

  useEffect(() => {
    console.log(isEnableAuthNumber);
  }, [isEnableAuthNumber]);

  const onClickPhoneNumberClearButton = () => {
    setValue('phoneNumber', '');
  };

  const onClickCheckAuthentication = async () => {
    const sendSMSCheckRequest: CommonSmsSendAuthCheckRequest = {
      authCode: getValues('authNumber'),
      seq: authSeq,
    };

    const response = await sendSMSCheckMutateAsync(sendSMSCheckRequest);
    if (response?.data?.status === 'OK') setIsNumberAuthenticated(true);
  };

  const onBlurCheckIcon = () => {
    setIsShowCheckIcon(true);
  };

  const onFocusCheckIcon = () => {
    setIsShowCheckIcon(false);
  };

  const onSubmit: SubmitHandler<IJoinForm> = (data) => {
    const user: UserJoinRequest = {
      birthday: data.birthday,
      invite_CODE: data.inviteCode,
      name: data.name,
      password: data.password,
      phone: data.phoneNumber,
    };

    mutateAsync(user);
  };

  const onInputAuthNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const { length } = event.target.value;
    const target = value.substring(length - 1, length);
    const flag = /^[0-9]$/.test(target);

    const result = flag ? value : value.substring(0, length - 1);
    event.target.value = result.substring(0, 6);
  };

  const onInputBirthday = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.substring(0, 6);
  };

  const onInputSex = (event: ChangeEvent<HTMLInputElement>) => {
    const flag = /^[1-4]{1}$/.test(event.target.value);

    const result = flag ? event.target.value : '';
    event.target.value = result.substring(0, 1);
  };

  const renderer = useCallback(({ minutes, seconds, completed }: any) => {
    if (completed) {
      return null;
    }
    return (
      <span className={commonClasses.timer}>
        {zeroPad(minutes)}:{zeroPad(seconds)}
      </span>
    );
  }, []);

  return (
    <>
      {TabletWidth ? (
        <>
          <NavBar searchInput={false} />
          <SubNavBar title="회원가입" fontType="h4" />
        </>
      ) : (
        <MobileSubAppBar title="회원가입" fontType="h5" />
      )}
      <main className={commonClasses.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={commonClasses.contentWrap}>
            <div>
              <div className={commonClasses.rowWrap}>
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
                      className={commonClasses.textfield}
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
                            <div className={commonClasses.iconWrapper}>
                              <Check className={commonClasses.checkButton} />
                            </div>
                          ) : (
                            <IconButton
                              className={commonClasses.iconButton}
                              onClick={onClickPhoneNumberClearButton}
                            >
                              <Clear className={commonClasses.clearButton} />
                            </IconButton>
                          )
                        ) : null,
                      }}
                    />
                  )}
                />
                <Button
                  className={commonClasses.button}
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
                  <p className={commonClasses.errorMessage}>{message}</p>
                )}
              />
            </div>
            <div>
              <div className={commonClasses.rowWrap}>
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
                      className={commonClasses.textfield}
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
                            <Countdown
                              date={threeMinutes}
                              renderer={renderer}
                            />
                          ) : null,
                        classes: {
                          disabled: classes.disabledInput,
                        },
                      }}
                    />
                  )}
                />
                <Button
                  className={commonClasses.button}
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
              <ErrorMessage
                errors={errors}
                name="authNumber"
                render={({ message }) => (
                  <p className={commonClasses.errorMessage}>{message}</p>
                )}
              />
            </div>
            <div>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{
                  required: '이름을 입력해주세요.',
                }}
                render={({ field: { onChange, value, name, ref } }) => (
                  <TextField
                    className={commonClasses.textfield}
                    type="text"
                    placeholder="이름"
                    size="small"
                    name={name}
                    onBlur={onBlurCheckIcon}
                    onFocus={onFocusCheckIcon}
                    onChange={onChange}
                    value={value}
                    inputRef={ref}
                    InputProps={{
                      endAdornment: isShowCheckIcon ? (
                        <div className={commonClasses.iconWrapper}>
                          <Check className={commonClasses.checkButton} />
                        </div>
                      ) : null,
                    }}
                  />
                )}
              />
              <div>
                <div
                  className={commonClasses.rowWrap}
                  style={{ marginTop: '10px' }}
                >
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
                        className={commonClasses.textfield}
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
                          className={commonClasses.textfield}
                          type="number"
                          size="small"
                          {...field}
                          onInput={onInputSex}
                          error={!!errors.sex}
                        />
                      )}
                    />
                    <span className={commonClasses.secretNumber}>••••••</span>
                  </div>
                </div>
                <ErrorMessage
                  errors={errors}
                  name="birthday"
                  render={({ message }) => (
                    <p className={commonClasses.errorMessage}>{message}</p>
                  )}
                />
              </div>
            </div>
            <div>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: '비밀번호를 입력해주세요.',
                  pattern: {
                    value:
                      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/,
                    message: '비밀번호 (영문+숫자+특수문자 8~20자)',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    className={commonClasses.textfield}
                    type="password"
                    size="small"
                    {...field}
                    error={!!errors.password}
                    placeholder="비밀번호 (영문+숫자+특수문자 8~20자)"
                    InputProps={{
                      endAdornment:
                        !!errors.password && errors.password === undefined ? (
                          <div className={commonClasses.iconWrapper}>
                            <Check className={commonClasses.checkButton} />
                          </div>
                        ) : null,
                    }}
                  />
                )}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <p className={commonClasses.errorMessage}>{message}</p>
                )}
              />
            </div>
            <div>
              <Controller
                name="passwordCheck"
                control={control}
                defaultValue=""
                rules={{
                  required: '비밀번호를 입력해주세요.',
                  validate: (value) =>
                    value === getValues('password') ||
                    '비밀번호가 일치하지 않습니다',
                }}
                render={({ field }) => (
                  <TextField
                    className={commonClasses.textfield}
                    type="password"
                    size="small"
                    {...field}
                    error={!!errors.passwordCheck}
                    placeholder="비밀번호 확인"
                    InputProps={{
                      endAdornment:
                        !!errors.passwordCheck &&
                        errors.passwordCheck === undefined ? (
                          <div className={commonClasses.iconWrapper}>
                            <Check className={commonClasses.checkButton} />
                          </div>
                        ) : null,
                    }}
                  />
                )}
              />
              <ErrorMessage
                errors={errors}
                name="passwordCheck"
                render={({ message }) => (
                  <p className={commonClasses.errorMessage}>{message}</p>
                )}
              />
            </div>
            <div>
              <Controller
                name="inviteCode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    className={commonClasses.textfield}
                    type="text"
                    size="small"
                    {...field}
                    placeholder="초대코드 입력 시 500포인트 지급"
                  />
                )}
              />
            </div>
            <div>
              <Button
                className={commonClasses.nextButton}
                type="submit"
                disabled={!isValid || !isNumberAuthenticated}
              >
                다음
              </Button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

const useStyles = makeStyles({
  disabledInput: {
    border: 'none',
    backgroundColor: COLOR_VIOLET_5,
  },
});

export default Signup;
