import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Controller, useForm } from 'react-hook-form';
import { Checkbox, FormControlLabel, Button, Typography } from '@mui/material';
import NavBar from '../../components/NavBar';
import SubNavBar from '../components/SubNavBar';
import MobileSubAppBar from '../components/MobileSubAppBar';
// import { COLOR_RED_60 } from '../styles/Color';
import { makeStyles } from '@mui/styles';
import { COLOR_VIOLET_5, COLOR_VIOLET_60, COLOR_RED_60 } from '../styles/Color';
import useTabletWidth from '../hooks/useTabletWidth';
import useCommonStyles from '../styles/tempUserStyles';

interface ITermsAgreementForm {
  allAgree: boolean;
  usingService: boolean;
  overFourteenYearsOld: boolean;
  collectingPersonalInformation: boolean;
  usinglocationImformation: boolean;
  receivingMakertingInformation: boolean;
}

const checkBoxArr = [
  {
    id: 1,
    name: 'usingService',
    label: '서비스 이용 약관 동의',
    required: true,
  },
  {
    id: 2,
    name: 'overFourteenYearsOld',
    label: '만 14세 이상 확인',
    required: true,
  },
  {
    id: 3,
    name: 'collectingPersonalInformation',
    label: '개인정보 위치 수집',
    required: true,
  },
  {
    id: 4,
    name: 'usinglocationImformation',
    label: '위치정보 이용 약관 동의',
    required: true,
  },
  {
    id: 5,
    name: 'receivingMakertingInformation',
    label: '마케팅 정보 수신 동의',
    required: false,
  },
];

const SearchPw = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  const TabletWidth = useTabletWidth();

  const history = useHistory();

  const { control, setValue, getValues, watch } = useForm<ITermsAgreementForm>({
    mode: 'onChange',
    defaultValues: {
      allAgree: false,
      usingService: false,
      overFourteenYearsOld: false,
      collectingPersonalInformation: false,
      usinglocationImformation: false,
      receivingMakertingInformation: false,
    },
  });

  const watchAllAgree = watch('allAgree');
  const watchUsingService = watch('usingService');
  const watchOverFourteenYearsOld = watch('overFourteenYearsOld');
  const watchCollectingPersonalInformation = watch(
    'collectingPersonalInformation',
  );
  const watchUsinglocationImformation = watch('usinglocationImformation');
  const watchrReceivingMakertingInformation = watch(
    'receivingMakertingInformation',
  );

  useEffect(() => {
    if (
      watchUsingService &&
      watchOverFourteenYearsOld &&
      watchCollectingPersonalInformation &&
      watchUsinglocationImformation &&
      watchrReceivingMakertingInformation
    ) {
      setValue('allAgree', true);
    } else {
      setValue('allAgree', false);
    }
  }, [
    watchAllAgree,
    watchUsingService,
    watchOverFourteenYearsOld,
    watchCollectingPersonalInformation,
    watchUsinglocationImformation,
    watchrReceivingMakertingInformation,
  ]);

  const onChangeAllAgreeButton = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      setValue('collectingPersonalInformation', true);
      setValue('overFourteenYearsOld', true);
      setValue('receivingMakertingInformation', true);
      setValue('usingService', true);
      setValue('usinglocationImformation', true);
    } else {
      setValue('collectingPersonalInformation', false);
      setValue('overFourteenYearsOld', false);
      setValue('receivingMakertingInformation', false);
      setValue('usingService', false);
      setValue('usinglocationImformation', false);
    }
  };

  const onClickNextButton = () => {
    history.push('/signup');
  };

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
        <div className={classes.contentWrap}>
          <Typography className={classes.titleText} variant="h5">
            약관 동의
          </Typography>
          <Controller
            name="allAgree"
            control={control}
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <FormControlLabel
                className={classes.allAgree}
                label="전체 동의"
                control={
                  <Checkbox
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      onChange(e);
                      onChangeAllAgreeButton(e);
                    }}
                    onBlur={onBlur}
                    checked={value}
                    name={name}
                    ref={ref}
                    color="error"
                    className={classes.checkbox}
                  />
                }
              />
            )}
          />
          {checkBoxArr?.map((item: any) => {
            return (
              <Controller
                key={item.id}
                name={item.name}
                control={control}
                rules={{
                  required: item.required,
                }}
                render={({ field: { onChange, onBlur, value, name, ref } }) => (
                  <FormControlLabel
                    label={
                      item.required ? (
                        <span className={classes.fontWeight400}>
                          {item.label}{' '}
                          <span className={classes.required}>(필수)</span>
                        </span>
                      ) : (
                        <span className={classes.fontWeight400}>
                          {item.label} (선택)
                        </span>
                      )
                    }
                    className={classes.agree}
                    control={
                      <Checkbox
                        onChange={onChange}
                        onBlur={onBlur}
                        checked={value}
                        name={name}
                        ref={ref}
                        color="error"
                        className={classes.checkbox}
                      />
                    }
                  />
                )}
              />
            );
          })}
          <Button
            className={commonClasses.nextButton}
            type="submit"
            variant="contained"
            disabled={
              !watchUsingService ||
              !watchOverFourteenYearsOld ||
              !watchCollectingPersonalInformation ||
              !watchUsinglocationImformation
            }
            onClick={onClickNextButton}
            sx={{ marginTop: '20px' }}
          >
            다음
          </Button>
        </div>
      </main>
    </>
  );
};

const useStyles = makeStyles({
  contentWrap: {
    width: '100%',
    maxWidth: '320px',
    height: 'inherit',
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '&>div': {
      marginBottom: '10px',
    },
    '@media screen and (max-width: 768px)': {
      paddingTop: '70px',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      margin: 'auto',
      transform: 'none',
    },
  },
  titleText: {
    height: '60px',
    fontWeight: 'bold',
    fontSize: '21px',
    lineHeight: '150%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  allAgree: {
    width: '100%',

    '&&': {
      display: 'block',
      margin: '0px',
      backgroundColor: COLOR_VIOLET_5,
      borderRadius: '4px',

      '& span': {
        fontWeight: 'bold',
      },
    },
  },
  agree: {
    width: '100%',
    height: '38px',

    '&&': {
      display: 'block',
      margin: '0px',
      marginTop: '10px',
    },
  },
  checkbox: {
    '& > svg > path': {
      color: COLOR_VIOLET_60,
      '&.Mui-checked': {
        color: COLOR_VIOLET_60,
      },
    },
  },
  fontWeight400: {
    fontWeight: 400,
  },
  required: {
    color: COLOR_RED_60,
  },
  marginTop20: {
    marginTop: '20px',
  },
});

export default SearchPw;
