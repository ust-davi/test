import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  InputLabel,
  TextField,
  Button,
  IconButton,
  Box,
  Divider,
} from '@mui/material';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Clear, Check } from '@mui/icons-material';

import {
  COLOR_DARK_GREY,
  COLOR_GREY_5,
  COLOR_MINT_70,
  COLOR_RED_60,
  COLOR_VIOLET_0,
  COLOR_VIOLET_40,
  COLOR_VIOLET_5,
  COLOR_VIOLET_60,
  COLOR_VIOLET_70,
} from '../styles/Color';
import useLogin from '../hooks/useLogin';
import { AuthLoginRequest } from '../type';
import { makeStyles } from '@mui/styles';
import theme from '../theme';
import useCommonUserStyles from '../styles/tempUserStyles';
import Alert from '../components/Alert';

interface ILoginForm {
  phoneNumber: string;
  password: string;
}

const Login = () => {
  const classes = useStyles();
  const userClasses = useCommonUserStyles();
  // const { error } = useSelector((state: RootState) => state.user);

  const { mutateAsync, isError } = useLogin();

  const {
    control,
    formState: { errors, isDirty, isValid },
    handleSubmit,
    watch,
    setValue,
  } = useForm<ILoginForm>({
    mode: 'onChange',
  });

  const watchPhoneNumber = watch('phoneNumber');
  const watchPassword = watch('password');

  const onClickClearButton = () => {
    setValue('phoneNumber', '');
  };

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    const { phoneNumber, password } = data;
    const user: AuthLoginRequest = {
      userId: phoneNumber,
      password,
    };

    await mutateAsync(user, {
      onError: () => {
        setAlertOpen(true);
        setAlertMessage(
          '휴대폰 번호 혹은 비밀번호가 일치하지 않습니다.\n입력한 내용을 다시 확인해주세요.',
        );
      },
    });
  };

  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');

  return (
    <>
      <Box sx={{ width: '100%', maxWidth: '1158px', height: 'inherit' }}>
        <Box
          sx={{
            width: '100%',
            maxWidth: '324px',
            height: 'inherit',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            '& > div': {
              margin: '18px 0',
            },
          }}
        >
          <img
            className={classes.logo}
            src="https://mendlemendle.com/images/renewal_mdmd/assets/logo-web-clients.svg"
            alt="Logo"
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputLabel
              sx={{ fontSize: '14px', fontWeight: '700', marginBottom: '1px' }}
              htmlFor="email"
            >
              휴대폰번호
            </InputLabel>
            <Box
              sx={{
                width: '100%',
                // borderBottom: `1px solid ${COLOR_GREY_5}`,
                button: {
                  margin: '4% 0',
                },
              }}
            >
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
                    id="email"
                    variant="outlined"
                    size="small"
                    {...field}
                    InputProps={{
                      endAdornment: watchPhoneNumber ? (
                        errors.phoneNumber ? (
                          <IconButton
                            sx={{
                              '&&': {
                                margin: '0px',
                              },
                            }}
                            onClick={onClickClearButton}
                          >
                            <Clear sx={{ fontSize: '20px' }} />
                          </IconButton>
                        ) : (
                          <Check
                            sx={{
                              margin: '8px',
                              fontSize: '20px',
                              color: COLOR_MINT_70,
                            }}
                          />
                        )
                      ) : null,
                    }}
                  />
                )}
              />
              <ErrorMessage
                errors={errors}
                name="phoneNumber"
                render={({ message }) => (
                  <Box sx={{ color: COLOR_RED_60, position: 'fixed' }}>
                    {message}
                  </Box>
                )}
              />
              <InputLabel
                sx={{
                  fontSize: '14px',
                  fontWeight: '700',
                  marginTop: '32px',
                  marginBottom: '1px',
                }}
                htmlFor="password"
              >
                비밀번호
              </InputLabel>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  pattern: {
                    value:
                      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/,
                    message: '',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    className={userClasses.textfield}
                    type="password"
                    id="password"
                    variant="outlined"
                    size="small"
                    {...field}
                    InputProps={{
                      endAdornment:
                        watchPassword && !errors.password ? (
                          <Check
                            sx={{
                              margin: '8px',
                              fontSize: '20px',
                              color: COLOR_MINT_70,
                            }}
                          />
                        ) : null,
                    }}
                  />
                )}
              />
              <Button
                sx={{
                  '&&': {
                    width: '100%',
                    backgroundColor: COLOR_VIOLET_60,
                    height: '40px',
                    color: COLOR_VIOLET_0,
                    marginTop: '29px',

                    '&: hover': {
                      backgroundColor: COLOR_VIOLET_70,
                      color: COLOR_VIOLET_0,
                    },

                    '&: disabled': {
                      backgroundColor: COLOR_VIOLET_5,
                      color: COLOR_VIOLET_40,
                    },
                  },
                }}
                type="submit"
                variant="contained"
                color="primary"
                disabled={!isDirty || !isValid}
                // onClick={onClickLoginButton}
              >
                로그인
              </Button>
            </Box>
          </form>
          <Divider sx={{ backgroundColor: COLOR_GREY_5, margin: '36px 0px' }} />
          <Box sx={{ width: '100%' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                margin: '5.5% 0',
                img: {
                  margin: '0 8px',
                },
              }}
            >
              <img
                src="https://www.mendlemendle.com/images/renewal_mdmd/login-kakaotalk.svg"
                alt="login-kakaotalk"
              />
              <img
                src="https://www.mendlemendle.com/images/renewal_mdmd/login-navercafe.svg"
                alt="login-navercafe"
              />
              <img
                src="https://www.mendlemendle.com/images/renewal_mdmd/login-facebook.svg"
                alt="login-facebook"
              />
              <img
                src="https://www.mendlemendle.com/images/renewal_mdmd/login-apple.svg"
                alt="login-apple"
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                a: {
                  color: COLOR_DARK_GREY,
                  fontWeight: 'bold',
                  fontSize: '14px',
                  lineHeight: '143%',
                  margin: '0 14.5px',
                },
              }}
            >
              <Link to="/searchpw">비밀번호 찾기</Link>
              <Link to="/termsAgreement">회원가입</Link>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '14px',
                lineHeight: '143%',
                color: COLOR_DARK_GREY,
                marginTop: '8.5%',
              }}
            >
              © UST Corp. All rights reserved.
            </Box>
          </Box>
        </Box>
      </Box>
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

const useStyles = makeStyles({
  logo: {
    width: '100%',
    display: 'block',
    margin: '0 auto 162px',
    [theme.breakpoints.down('md')]: {
      width: '80%',
      margin: '0 auto 30%',
    },
  },
});

export default Login;
