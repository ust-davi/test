import React from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import SubNavBar from '../components/SubNavBar';
import MobileSubAppBar from '../components/MobileSubAppBar';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { ErrorMessage } from '@hookform/error-message';
import useTableWidth from '../hooks/useTabletWidth';
import useCommonUserStyles from '../styles/tempUserStyles';
import Alert from '../components/Alert';

interface IChangingPassword {
  password: string;
  newPassword: string;
  newPasswordCheck: string;
}

const ChangingPassword = () => {
  const userClasses = useCommonUserStyles();
  const TabletWidth = useTableWidth();

  const history = useHistory();

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<IChangingPassword>({
    mode: 'onChange',
    defaultValues: {
      password: '',
      newPassword: '',
      newPasswordCheck: '',
    },
  });

  const onSubmit: SubmitHandler<IChangingPassword> = (data) => {
    history.push('/');
  };

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
                    type="password"
                    className={userClasses.textfield}
                    size="small"
                    {...field}
                    error={!!errors.password}
                    placeholder="현재 비밀번호"
                    // InputProps={{
                    //   endAdornment:
                    //     !errors.password && errors.password === undefined ? (
                    //       <IconWrapper>
                    //         <StyledCheck />
                    //       </IconWrapper>
                    //     ) : null,
                    // }}
                  />
                )}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <p className={userClasses.errorMessage}>{message}</p>
                )}
              />
            </div>
            <div>
              <Controller
                name="newPassword"
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
                    type="password"
                    className={userClasses.textfield}
                    size="small"
                    {...field}
                    error={!!errors.newPassword}
                    placeholder="새 비밀번호"
                    // InputProps={{
                    //   endAdornment:
                    //     !errors.newPassword &&
                    //     errors.newPassword === undefined ? (
                    //       <IconWrapper>
                    //         <StyledCheck />
                    //       </IconWrapper>
                    //     ) : null,
                    // }}
                  />
                )}
              />
              <ErrorMessage
                errors={errors}
                name="newPassword"
                render={({ message }) => (
                  <p className={userClasses.errorMessage}>{message}</p>
                )}
              />
            </div>
            <div>
              <Controller
                name="newPasswordCheck"
                control={control}
                defaultValue=""
                rules={{
                  required: '비밀번호를 입력해주세요.',
                  validate: (value) =>
                    value === getValues('newPassword') ||
                    '비밀번호가 일치하지 않습니다',
                }}
                render={({ field }) => (
                  <TextField
                    type="password"
                    className={userClasses.textfield}
                    size="small"
                    {...field}
                    error={!!errors.newPasswordCheck}
                    placeholder="새 비밀번호 확인"
                    // InputProps={{
                    //   endAdornment:
                    //     !errors.newPasswordCheck &&
                    //     errors.newPasswordCheck === undefined ? (
                    //       <IconWrapper>
                    //         <StyledCheck />
                    //       </IconWrapper>
                    //     ) : null,
                    // }}
                  />
                )}
              />
              <ErrorMessage
                errors={errors}
                name="passwordCheck"
                render={({ message }) => (
                  <p className={userClasses.errorMessage}>{message}</p>
                )}
              />
            </div>
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
      {/* <Alert
        isOpen={alertOpen}
        message={alertMessage}
        onClose={() => {
          setAlertOpen(false);
        }}
      /> */}
    </>
  );
};

export default ChangingPassword;
